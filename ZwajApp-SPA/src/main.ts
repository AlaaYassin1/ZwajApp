import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent,{
  providers: [
    HttpClientModule, 
    ...appConfig.providers
  ]
})
  .catch((err) => console.error(err));

//The ... syntax you see is called the spread operator in JavaScript/TypeScript.
// It allows you to "spread" the contents of an array, object, 
//or iterable into another array or object. In the case of:
  
