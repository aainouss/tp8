import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {  } from './app/app.component';
import { ProductFormsComponent } from './app/product-forms/product-forms.component';

bootstrapApplication(ProductFormsComponent)
  .catch((err) => console.error(err));
