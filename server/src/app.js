//env import & config
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

//import node
import path from 'node:path';
import { fileURLToPath } from 'node:url';

//import npm
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import Router from 'koa-router';
import axios from 'axios';
import oauth from 'axios-oauth-client';
import { time } from 'node:console';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getClientCredentials = oauth.clientCredentials(
  axios.create(),
  'https://login.microsoftonline.com/c77f7dff-d01a-4ebf-b79c-1ce2d28f7847/oauth2/v2.0/token', //Token endpoint
  '', //Client ID
  '', //Client Secret
)

const app = new Koa();
const router = new Router();
app.use(bodyParser());

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx, next) => {
  // Log the request to the console
  const timeStamp = `${(new Date()).toLocaleDateString('en-GB')} ${(new Date()).toLocaleTimeString('en-GB')}`;
  console.log(`${timeStamp} ${ctx.request.method} '${ctx.request.url}' ${JSON.stringify(ctx.request.body)}`);
  await next();
});

router.post('/api', async (ctx) => {
  console.log(`api route`);
  ctx.body = "Hello World!";
});

router.get('/api-json', async (ctx, next) => {
  console.log(`api-json route`);
  ctx.type = 'application/json';
  ctx.body = { hello: 'world' };
});

router.get('/call-api/:param', async (ctx, next) => {
  console.log(`call-api route with paramter: ${ctx.params.param}`);
  await routeHandler('call-api', {
    "pParam": ctx.params.param,
  }, ctx);
});

app.use(router.routes());

if (process.env.NODE_ENV === 'development') {
  app.use(serve(path.join(__dirname, '../../client/build')));
  app.use(serve(path.join(__dirname, '../../client/public')));
}
else
  app.use(serve(path.join(__dirname, '../../dist/client')));

const port = process.env.port || 8080;

Init()
  .then(() => {
    console.log('Init Completed.');
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(`Initialization error: ${error}`);
  });

console.log(`Server is running`);

async function routeHandler(func, body, ctx) {
  try {
    ctx.type = 'application/json';
    ctx.body = await fetchOperation(func, body);
  }
  catch (error) {
    ctx.status = error.response?.status || 500;
    ctx.type = 'application/json';
    ctx.body = error.response?.data.error || { code: error.code, message: error.message };
    console.log(ctx.body);
  }
}

async function fetchOperation(func, body) {
  const auth = await getClientCredentials('[scope]');
  return axios.post(`${baseUrl}/${func}`,
    body,
    {
      headers: {
        'Authorization': 'Bearer ' + auth.access_token
      }
    }
  )
    .then(response => JSON.parse(response.data));
}

async function Init() {
  console.log('Init Started.');
}
