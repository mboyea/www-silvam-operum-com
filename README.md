Silvam Operum
===
A web application which combines your calendar, journal, and task management solution into one place.
---
This application is built with TypeScript, Solid, & Sass. It uses Yarn as a package manager and Babel & Webpack to compile local builds.

### To install this locally
* [Install Yarn] (it is recommended that you [install Node] to do this)
* Clone this repository to your computer.
* Open a terminal in the root directory of this repository.
* Run `yarn install` in the terminal.

From here, you're ready to use the application. Run `yarn run start:prod` in the terminal & navigate to [localhost:1111](http://localhost:1111) in a web browser.

### Scripts
To run a script, type `yarn run <script-name>`

| script-name | description |
|:----------- |:----------- |
| `build` | call build:dev |
| `build:dev` | try to compile the application into /bin/ |
| `build:prod` | try to compile an optimized version of the application into /bin/ |
| `start` | call start:dev |
| `start:dev` | build:dev & start a hot-reloading server at [localhost:1000](http://localhost:1000) |
| `start:prod` | build:prod & start a server at [localhost:1111](http://localhost:1111) |

To edit commands, see "scripts" in package.json

### To contribute to this project
Unfortunately, this project doesn't support user contributions right now.

[install Node]: https://nodejs.org/en/download/
[Install Yarn]: https://yarnpkg.com/getting-started/install
[Solid]: https://www.solidjs.com/