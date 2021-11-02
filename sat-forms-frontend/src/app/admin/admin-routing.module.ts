import { AuthGuard } from './../auth/auth.guard';
import { AccessDeniedComponent } from './../access-denied/access-denied.component';
import { FornecedorComponent } from './pages/fornecedor/fornecedor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'admin',
  //   component: FornecedorComponent,
  //   canActivate: [AuthGuard],
  //   // The user need to have this roles to access
  //   data: { roles: ['ROLE_ADMIN'] },
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
