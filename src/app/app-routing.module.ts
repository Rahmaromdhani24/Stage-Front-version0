import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [

  {path:"" , component:LoginAdminComponent },
  {path:"login" , component:LoginAdminComponent },
  {path:"accueil" , component:AccueilComponent },
  {path:"template" , component:TemplateComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
