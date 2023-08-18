# Node/React Minimalist Development Framework
* node
* react 
* koa
* webpack
* craco

###### v 1.0.0

This is a framework I put together to start developing node/react apps as fast as possible without getting bogged down with all the setup.

To start to develop you can run "Start Development" task from the command palette, this will run the react in development mode and will run the node server as well. 

Node will physically share the static web files from the react build folder, to achieve this I have use craco to override the webpack config and force the start script to write to a file.

There are proper settings in launch.json to attach debugger to client and server.

To build the projet run "npm run build" and you can find the full stack build in root\dist.