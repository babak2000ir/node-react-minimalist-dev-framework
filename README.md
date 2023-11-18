# Minimalist Node/React Development Framework
* node
* react 
* koa
* axios
* zustand
* webpack
* craco
* bootstrap 5
* bootstrap-icons

###### v 1.1.2

More logs
Init mechanism before starting the server
Axios sample call, using oAuth
Zustand sample store

###### v 1.1.1

Build fixes:

Client build folder is cleaned up in development cycles.
Public folder is server correctly on development server.
Build command takes care of public folder correclty.

###### v 1.1.0

Changes to config deployment to azure.

###### v 1.0.0

This is a framework I put together to start developing node/react apps as fast as possible without getting bogged down with all the setup.

To start to develop you can run "Start Development" task from the command palette, this will run the react in development mode and will run the node server as well. 

Node will physically share the static web files from the react build folder, to achieve this I have use craco to override the webpack config and force the start script to write to a file.

There are proper settings in launch.json to attach debugger to client and server.

To build the projet run "npm run build" and you can find the full stack build in root\dist.