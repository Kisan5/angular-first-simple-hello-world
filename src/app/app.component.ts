import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/*
  Kisan: 
  Difference between Angular 13 and 18 with some notes--------------------
  This Latest Angular Project gets created in standlone: true. By which all these components are standlone component which can be build and run standalone. In previous angular versions i.e. popular Angular 13 if we generate a project by "ng new appName" then non standalone project was getting created by default which has some extra files which can be used to create the project but those files are removed/changed in this standalone component version so need to understand the standalone component file structures.

  File differences in app module:
  1. Angular 13 app module files
    a. app-routing.module.ts (used to define routes)
    b. app.component.css (styles for the component)
    c. app.component.html (HTML structure for the component)
    d. app.component.spec.ts (To write unit test cases)
    e. app.component.ts (Typescript file for the component to programming for the component)
    f. app.module.server.ts (Server related things)
    g. app.module.ts  (IMP: this is a @NgModule which has 4 things mentioned below)
        - declarations - To declare compoents in this section to use it in app module/ app component
        - imports - Import other different Modules to use in app module. e.g. mentioned below
            HttpClientModule: To use http methods like get,post,put,delete to use apis
            AppRoutingModule: importing the app-routing-module.ts which file is present To define routes in app
            RouterOutlet: To use <router-outlet>, RouterLink="http://..." in html components like button (click)=.. etc
            CommonModule: Exports all the basic Angular directives and pipes, such as NgIf , NgForOf , DecimalPipe etc.
            BrowserModule: provides essential services and infrastructure needed to run an Angular application within browser
            FormsModule: to enable the creation of template-driven forms within your application. Also to use [[ngModel]]
            ReactiveFormsModule: To use formGroup and formBuilder to directly connect the HTML form to a variable
            etc. 
        - providers -Used to register the service classes by which can use those class object with dependency injection. ie. used to register a service that should be accessible globally throughout the application, added here in this providers array in the root application module. Note: This also can be possible by using "@Injectable({ providedIn: 'root' })" in the service class itself.
        - bootstrap - Tells about which component to load/bootstrap at app starting.

  2. Angular 18 app module files
    a. app.component.css - same present
    b. app.component.html - same present
    c. app.component.spec.ts - same present
    d. app.component.ts - Modified
        in @component 2 new things added compared to Angular 13, 
          a. standalone: true (which tells about this is standalone component) and 
          b. imports: [] (used to declare modules as well as the compoents here in this section which was being done with "declarations: for components and imports: for modules" in angular 13 in app.module.ts file)
    e. app.config.server.ts - Modified - 
        Till now not used it in anything. May be server related configurations and any class if  needed by server registered here in this file providers [] array. but later both appConfig and appConfigServer file both added and sent together. so if we register service class here also it might work.
    f. app.config.ts - New
        Defines the application configuration that tells Angular how to assemble the application. It has the providers array to register the service classes which is not present in app.component.ts in this.
    g. app.routes.ts - New - used to define routes.

*/

@Component({
  selector: 'app-root',
  standalone: true, //kisan: new added in angular 17 onwards which tells about this is standalone component
  imports: [RouterOutlet], //kisan: used to declare modules as well as the compoents here in this section which was being done with "declarations: for components and imports: for modules" in angular 13 in app.module.ts file
  templateUrl: './app.component.html', 
    //kisan: Tell about which is the template for this component. Here we can also directly    define small template by using - " template: '<p> Hello World </p>', "
  styleUrl: './app.component.css',
    //kisan: used to define the css style for that component.
})
export class AppComponent {
  title = 'This title is fetched from appComponent file'; //kisan: Varibale in this components programming file which will be fetched and used in the HTML element through binding.
}
