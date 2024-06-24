# Task-Manager-Application
This application was made as an submission of my assignment for the role of fullstack developer at PedalStart


## The order of files:-
* Task Manager Appplication
   * Frontend
      * index.html
      * App.css
      * App.js
      * TaskDetail
      * TaskEdit
      * TaskForm
      * TaskList
        
   * Backend
      * Config.json
      * task.controller.js
      * inex.js
      * task.js
      * task.routes.js
      * taskRoutes.js
      * Server.js

----
### Frontend API Endpoints
* __http://localhost:3000/__

   Shows the main page or landing page with all the tasks listed along with options to view, edit, delete or add task.

  ![alt text](https://github.com/aryanthakur9662/Task-Manager-Application/blob/Screenshots/A7B635D3-2EC6-419C-A4CB-6D161A6DE8F9.jpeg)


* __http://localhost:3000/tasks/4__

   Shows the details of the task the viewer wishes to get a detailed preview of when the user clicks on the "view" button.

  ![alt text](https://github.com/aryanthakur9662/Task-Manager-Application/blob/Screenshots/EEC2D135-D661-4B1B-8661-A1FE171E9C19.jpeg)
  

* __http://localhost:3000/edit/4__

   Allows the users to edit the details of a task when the user clicks on the "Edit" button.

  ![alt text](https://github.com/aryanthakur9662/Task-Manager-Application/blob/Screenshots/CB158311-AB32-4487-83EA-1032F6439E55.jpeg)

----
### Backend API Endpoints 
* __GET__ http://localhost:5001/api/tasks

   Shows all the tasks currently in the database, in a detailed format(JSON).

  ![alt text](https://github.com/aryanthakur9662/Task-Manager-Application/blob/Screenshots/672E3807-1184-42E5-8BA5-A9FEEF175D2C.jpeg)

* __PUT__ http://localhost:5001/api/tasks/12

   This function allows users to update the tasks after editing the tasks. In this case task with ID 12 will be updated.

  ![alt text](https://github.com/aryanthakur9662/Task-Manager-Application/blob/Screenshots/4534915C-6163-433A-ABD6-5AF367FE52B7.jpeg)

* __DELETE__ http://localhost:5001/api/tasks/15

   This function allows users to delete the tasks. In this case task with ID 15 will be deleted.

  ![alt text](https://github.com/aryanthakur9662/Task-Manager-Application/blob/Screenshots/7A2E1A1E-B7F5-41D7-A90D-42536709B03D.jpeg)

* __POST__ http://localhost:5001/api/tasks

   This function allows users to add a new task to the database whose body needs to be edited by the user.

  ![alt text](https://github.com/aryanthakur9662/Task-Manager-Application/blob/Screenshots/844B0428-9458-4DB1-BE00-C99A5A50CA7E.jpeg)

* __GET__ http://localhost:5001/api/tasks/15

   This function allows users to filter a single task on the basis if ID.

  ![alt text](https://github.com/aryanthakur9662/Task-Manager-Application/blob/Screenshots/D5072F7E-34D7-4469-9C2E-C4D514BA3C33.jpeg)

These API images are screenshots taken from __POSTMAN__

----
## Thank You
