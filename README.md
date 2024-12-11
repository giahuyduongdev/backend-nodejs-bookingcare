<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Tech Stack](#space_invader-tech-stack)
- [Getting Started](#toolbox-getting-started)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)
- [Contributing](#wave-contributing)
- [Contact](#handshake-contact)

<!-- About the Project -->
## :star2: About the Project
This is a backend project for an online appointment booking system, developed using pure JavaScript on a Node.js environment with the Express.js framework

<!-- TechStack -->
### :space_invader: Tech Stack
This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
<div align="center">
  <code><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
  <code><img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" title="PostgreSQL"/></code>
	
</div>

<!-- Getting Started -->
## 	:toolbox: Getting Started
This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<!-- Installation -->
### :gear: Installation
Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services.
1. NodeJS v14.17.0 at [https://nodejs.org/dist/v14.17.0/](https://nodejs.org/dist/v14.17.0/)
2. PostgreSQL 16.3 at [https://www.postgresql.org/ftp/source/v16.3/](https://www.postgresql.org/ftp/source/v16.3/)

<!-- Run Locally -->
### :running: Run Locally
1. Clone the project

```bash
  git clone https://github.com/giahuyduongdev/backend-nodejs-bookingcare.git
```

2. Add the following environment variables to your .env file like .env.example

```bash
PORT=
NODE_ENV=
URL_REACT=

DB_HOST=
DB_PASSWORD=
DB_PORT=
DB_SSL=
DB_DIALECT=
DB_DATABASE_NAME=
DB_USERNAME=

MAX_NUMBER_SCHEDULE=
EMAIL_APP_PASSWORD=
EMAIL_APP=
```

3. Run migrate database
```bash
  npx sequelize-cli db:migrate
```
4. Insert data to data table from database

5. Install dependencies
   
```bash
  npm install
```

6. Build src

```bash
  npm run build-src
```

7. Start project

```bash
  npm run build
```

<!-- Contributing -->
## :wave: Contributing

<table>
  <tbody>
    <tr>
          <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/giahuyduongdev"><img src="https://avatars.githubusercontent.com/u/157091631?s=400&u=629ae7c2c3053cc22a974ace4d8f8b8a730636af&v=4" width="100px;" alt="Dương Gia Huy"/><br /><sub><b>Dương Gia Huy</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/thinhne2002"><img src="https://avatars.githubusercontent.com/u/98071248?v=4" width="100px;" alt="Nguyễn Hoàng Thịnh"/><br /><sub><b>Nguyễn Hoàng Thịnh</b></sub></a><br /></td
    </tr>
    </tbody>
</table>

<!-- Contact -->
## :handshake: Contact

Dương Gia Huy -  giahuyduongdev@gmail.com

Project Link: [https://github.com/giahuyduongdev/backend-nodejs-bookingcare](https://github.com/giahuyduongdev/backend-nodejs-bookingcare)



