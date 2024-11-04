<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Tech Stack](#space_invader-tech-stack)
- [Getting Started](#toolbox-getting-started)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)
- [Contributing](#wave-contributing)
- [License](#warning-license)
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
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" alt="Bootstrap" title="Bootstrap"/></code>
</div>

<!-- Getting Started -->
## 	:toolbox: Getting Started
This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<!-- Installation -->
### :gear: Installation
Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services.
1. NodeJS v14.17.0 at [https://nodejs.org/dist/v14.17.0/](https://nodejs.org/dist/v14.17.0/)
2. XAMPP 8.0.30 at [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)

<!-- Run Locally -->
### :running: Run Locally
1. Start Apche, MySQL
   
![image](https://github.com/user-attachments/assets/e08f93ae-80c3-4274-96e2-19cf07882b57)

2. Go to admin page of MySQL
   
![image](https://github.com/user-attachments/assets/5b463d9b-98a1-43f4-8f3c-e9efd2946d4f)

3. Check your version of Node
   
```bash
  node -v
```

4. Clone the project

```bash
  git clone https://github.com/giahuyduongdev/backend-nodejs-bookingcare.git
```

5. Go to the project directory
   
```bash
  git checkout GiaHuyDuong
```

6. Create your new branch
   
```bash
  git checkout -b <Your Branch>
```

7. Add the following environment variables to your .env file

```bash
  PORT=8080
  NODE_ENV=development
```
![image](https://github.com/user-attachments/assets/e9022f8d-83c4-450c-b403-99e19f9e7cf6)

8. Install dependencies
   
```bash
  npm install
```

9. Create a new database on MySQL

![image](https://github.com/user-attachments/assets/3c4852af-1975-4346-9e2b-524bf2bc1a62)

11. Rreate that table in the database on terminal VSCode

```bash
  npx sequelize-cli db:migrate
```

![image](https://github.com/user-attachments/assets/8988ac9b-374b-457a-a962-27547766dfe3)


13. Inserted user demo into the User table.
    
```bash
  npx sequelize-cli db:seed:all
```
![image](https://github.com/user-attachments/assets/53f1caa1-0b40-4b79-bb4e-487059db60b2)

14. Run your project locally

```bash
  npm start
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

<!-- License -->
## :warning: License






<!-- Contact -->
## :handshake: Contact

Dương Gia Huy -  giahuyduongdev@gmail.com

Project Link: [https://github.com/giahuyduongdev/backend-nodejs-bookingcare](https://github.com/giahuyduongdev/backend-nodejs-bookingcare)



