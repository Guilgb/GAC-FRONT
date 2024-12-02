# G A C

## :pencil2: Description

GAC (Gerenciador de Atividades Complementares) it's a platform that enables students to submit their complementary activities, reviewers to evaluate and either approve or reject those activities, and administrators to efficiently manage the entire system.

## :computer: How to run

After cloning the repository and running the `npm i` command to install all the required dependencies, there are just a few more steps to ensure the application runs correctly.

In this project, we use an API and connect to it using `Axios lib`. To start the application, simply run the command `npm run dev`. This will execute the project and launch it successfully. If you skip this step, the application will not function properly.

## :iphone: Main Techs

<div style="display: inline-block">
   <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
   <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</div>

## :fireworks: Extra Techs

- React Hot Toast
- Axios

## :file_folder: Project Structure

```
├─── public
├─── src
│   ├─── components
│   │    ├─── atoms
│   │    ├─── molecules
│   │    ├─── organisms
│   ├─── config
│   ├─── context
│   ├─── pages: Contains the pages files
```

## :page_facing_up: Pages

- [x] Login
- [x] Register
- [x] Dashboard
- [x] Activities
- [x] Evaluate
- [x] Management
- [x] Profile

The page templates in this project were built following the Atomic Design Pattern, ensuring a modular and scalable structure for creating and organizing components.

## :sparkles: Features

- Login and register forms with real authentication
- Dynamic Data.
- Error handling and user feedback are managed using `react-hot-toast` for seamless and interactive notifications.
- Permissioned access.
- Filter funcionality.
- Register, view, edit and delete activities.
- Approve, deny and comment activities.
- Register, view, edit and delete users.
- Register, view and delete categories.
- Register, view and delete courses.
