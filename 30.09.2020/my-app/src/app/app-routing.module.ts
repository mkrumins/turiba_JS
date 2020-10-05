import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component'; // jāimportē

//Routing and Navigation
const routes: Routes = [
    //jāpievieno jaunā componente (katrs route ir Objekts)
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomepageComponent },
      { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
