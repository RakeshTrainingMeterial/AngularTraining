import { HttpModelComponent } from './http-model/http-model.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import {AdminComponent} from './admin/admin.component'
import {AuthGuard} from './service/auth.guard'
import {AuthDeactivateGuard} from './service/auth-deactivate.guard'
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  {path:"",redirectTo:'about',pathMatch:'full'},
  {path:"main",component:HomeComponent},
  {path:"about",
  component:AboutComponent,
  canDeactivate:[AuthDeactivateGuard]
},
{path:"httpClient",component:HttpModelComponent},
  {path:"contact",
  component:ContactComponent,
  children:[
    {
      path:'edit',component:EditComponent,canActivate:[AuthGuard]
    }
  ]
  },
  {path:"product",component:ProductComponent},
  {path:"products/:id",component:ProductsComponent},
  {path:"mainPage",component:MainpageComponent},
  {path:"admin",component:AdminComponent,canActivate:[AuthGuard]},
  {path:"**",redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
