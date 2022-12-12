# ExampleAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.
Apart from the main page, the project consists of four pages: 
- small mobile cranes follows [Tour of Heroes](https://angular.io/tutorial) tutorial and shows how to work with in-memory database. This page was created at the very beginning to familiarize me with the fundamentals of Angular
- deep foundation page shows how to work with Angular material and Firebase Realtime database as a source of info. This page is one of two ways of implementing CRUD operation. To add or update info use two separate pages. The content of both pages is the same. However, the Add Crane page is written with the help of Angular Material, while the Edit page as regular Reactive form. It was done to compare both options. 
- mobile cranes is a CRUD application, which used Angular 14, Firebase’s Realtime DB, and Angular material. Add/edit page uses the same form, so event emitters were used to refer to this form. 
- authentication page implements a traditional email/password using Firebase, Auth Guard, etc

Apart from all the above, in this project, several routing guards, custom attribute directives, and custom structural ones were implemented. Also, preloading and lazy loading. 
The carousel on the dashboard page was made using the Bootstrap framework 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

