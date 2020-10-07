import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardpageGuard } from './guards/guardpage.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component'; // jāimportē
import { RegistrationComponent } from './registration/registration.component';

//Routing and Navigation
const routes: Routes = [
    //jāpievieno jaunā componente (katrs route ir Objekts)
      { path: 'login', component: LoginComponent },
      { path: 'home', canActivate:[GuardpageGuard], component: HomepageComponent }, // ja guards ados true, tad rādīs HomepageComponent kompanenti
      { path: 'signup', canActivate:[GuardpageGuard], component: RegistrationComponent },
      { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
