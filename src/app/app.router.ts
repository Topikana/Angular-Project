import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';
//import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
   /*{ path: '',
    component: LayoutComponent
   },
   */
   {
       path: 'login',
       component: LoginComponent
   }
]

export const appRouter = RouterModule.forRoot(routes)