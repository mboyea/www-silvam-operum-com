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

### Current Term Goals
> Task & Calendar interface
> Journaling system
> Push notifications
> Full management of recurring tasks

### Long Term Goals
> Task scheduling (once every x amount of time, this task should be done)
> Task commitment tracking (track history of meeting scheduling commitments)
> Task suggestion (based upon category, suggest tasks that are scheduled)
> Routines (an entire day, week, or month that may autofill tasks & categories for a day) - but do routines emerge naturally from the above task management solution?
> Google Calendar integration
> Microsoft Outlook integration
> Alarm notifications

### To contribute to this project
Unfortunately, this project doesn't support user contributions right now.

[install Node]: https://nodejs.org/en/download/
[Install Yarn]: https://yarnpkg.com/getting-started/install
[Solid]: https://www.solidjs.com/