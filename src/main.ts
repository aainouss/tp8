import { bootstrapApplication } from '@angular/platform-browser';

import { ProductFormsComponent } from './app/product-forms/product-forms.component';

bootstrapApplication(ProductFormsComponent)
  .catch((err) => console.error(err));
