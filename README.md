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

###### v 1.1.3
Cleaned up the scripts and dev strategies:

You need a .env in the project root with:
PORT=3001 
This will be the port your node server runs on, this server also serves the rect application in production as well as development mode.

mpn run scripts from root:
"clean": cleans packages, json files and published app (dist) 
"build": mpn i dev stuff, client and server
"publish": creates production ready app (dist)
"prod": runs the production release
"dev": will run your development mode

Server runs on port 3001
Client development mode using craco runs on port 3000

You can load app using both port in development mode but In production, only the server port is active.

task.js for development with multi panel is still working, you can aslo use the new mpn run dev with chocolatey.


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