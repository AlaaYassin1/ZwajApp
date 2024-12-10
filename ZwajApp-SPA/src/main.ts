import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { appConfig } from './app/app.config';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    ...appConfig.providers,
  ],
}).catch((err) => console.error(err));

//   لماذا هذا التعديل:
// HttpClientModule ليس مزود (provider) عادي، بل هو NgModule، لذلك نستخدم importProvidersFrom() لإضافته.
// بهذه الطريقة، يتم تضمين كل ما يحتاجه HttpClientModule بشكل صحيح دون أن يسبب مشاكل في الحقن (injection)

//The ... syntax you see is called the spread operator in JavaScript/TypeScript.
// It allows you to "spread" the contents of an array, object,
//or iterable into another array or object. In the case of:
