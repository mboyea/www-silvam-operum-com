TS & Solid Application Template
===
A template to build web applications with TypeScript, Solid, & Sass
---
This is a template for building a scalable single-page application using [Solid]. To keep things simple and expandable, this template doesn't rely upon any unnecessary dependencies. Whether you're creating a small tool or beginning a large project, this is a strong place to begin.

This template uses Babel & Webpack to compile the project.

To reference a project built using this template, see [this   application](https://github.com/YourZombieMop/totally-tubular-task-table).

### To use this template
* [Install Yarn]
* Fork this repository & rename it to your project's name.
* Clone the forked repository to your computer.
* Open a terminal in the root directory of the cloned repository.
* Run `yarn install` in the terminal.

From here, you're ready to devlelop your project.

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

### To contribute to this template
Unfortunately, this template doesn't support user contributions right now.

[Install Yarn]: https://yarnpkg.com/getting-started/install
[Solid]: https://www.solidjs.com/