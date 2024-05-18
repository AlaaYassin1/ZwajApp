import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/Alertify.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),provideClientHydration(),AuthService,AlertifyService,ErrorInterceptorProvider],

};
