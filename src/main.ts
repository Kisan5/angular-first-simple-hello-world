import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/*
  Kisan:
  The main first 4 files in general angular application is 
    a. index.html - This is the only HTML file/page which is opened in the web browser
    b. main.server.ts - Not used till now, may be some server related details/configurations
    c. main.ts - This is the first file gets executed when we launch the application to make every required module(and its child modules etc.), directives, pipes and component(and its child component etc.) loaded, executed and available/ready to angular to be rendered in index.html 
    d. styles.css - This is the parent css file which is used basically to declare some global level styles like if want to import bootstrap etc.

  As this is a "standalone component" based application which is getting created by default by the latest version with "ng new myApp" commands so below are the changes present here as compared to non standalone app which is by default gets created in angular 13/old versions.
  This is file is changed :
    a. in Angular 13- we were bootstraping the "MODULE"
        platformBrowserDynamic().bootstrapModule(AppModule, { 
        //////////kisan: tell which modyule to load/execute first. then based the configuration and codes inside that root module other component / modules gets loaded.//////////
        ngZoneEventCoalescing: true
        })
        .catch(err => console.error(err));
    b. in Angular 17 onwards- we are bootstraping the "COMPONENT", not the module.
  Note: We can create non standalone apps by using below commands
    whole app if want like Angular 17-
      ng new appName --no-standalone
      ng new appName --standalone=false
    if for particular component want to disable it-
      ng generate component --standalone false
 
 */

bootstrapApplication(AppComponent, appConfig)
  //kisan: tell which component to load/execute first. then based the configuration and codes inside that root component other component / modules gets loaded.
  .catch((err) => console.error(err));
