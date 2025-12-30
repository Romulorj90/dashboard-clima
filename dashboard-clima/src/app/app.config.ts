import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'; // Importante!

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()]
};