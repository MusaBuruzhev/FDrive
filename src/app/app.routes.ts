import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RegisterComponent } from './register/register.component';
import { EmailComponent } from './auth/email/email.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'email', component: EmailComponent },
  { path: 'profile', component: ProfileComponent },


];