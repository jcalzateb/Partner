import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPartnerComponent } from './pages/register-partner/register-partner.component';
import { ListInstitutionsComponent } from './pages/list-institutions/list-institutions.component';

const routes: Routes = [
  {
    path:'register',
    component: RegisterPartnerComponent
  },
  {
    path:'list',
    component: ListInstitutionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
