import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { GuardpageGuard } from './guards/guardpage.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component'; // jāimportē
import { RegistrationComponent } from './registration/registration.component';
import { TempComponent } from './temp/temp.component';

//Routing and Navigation
const routes: Routes = [
    //jāpievieno jaunā componente (katrs route ir Objekts)
      { path: 'login', component: LoginComponent },
      { path: 'home', canActivate:[GuardpageGuard], component: HomepageComponent }, // ja guards ados true, tad rādīs HomepageComponent kompanenti
      { path: 'signup', canActivate:[GuardpageGuard], component: RegistrationComponent },
      { path: 'temp', canActivate:[GuardpageGuard], component: TempComponent },
      { path: '**', canActivate:[GuardpageGuard], component: ErrorpageComponent },
      { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
