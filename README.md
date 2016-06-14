# three-js-experiment

This project was created as something for me to experiment with, try out new technologies and techniques. Some of what is done here is slightly outdate, and would be done differently if I started again now (primarily proper bower integration, and more use of gulp automation).

Due to browser security restrictions, this project must be run via a web server.

If you have node.js and gulp.js set up on you machine you can run it in a local server by:

-cloning the project
-opening a command window
-navigating to the project directory
-entering gulp browser-sync

This should run a local web server and open the project.

This is very much an ongoing experiment and in no way production code. Currently only really tested on Chrome (although no reason why it couldn't be made to work on other browsers).

Right now the controls are set up to use game controllers only. If you have one, you can connect it to your machine and control your craft (Only tested as working on Chrome on windows). They could be configured to allow keyboard/mouse.

Right now the build process for the code has been broken by splitting the parts into separate projects for Github. This should be resolved.

Much of the code that drives this project is located in the https://github.com/PMPepper/js-app-framework repository. That is turn required teh https://github.com/PMPepper/grunt-workflow repo to be built (again, were I to start this again that would probably be different - but when I started gulp.js was in it's infancy).
