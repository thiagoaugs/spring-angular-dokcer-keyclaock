import { ManagerComponent } from './manager/manager.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    // The user need to have this roles to access
    data: { roles: ['ROLE_ADMIN'] },
  },
  {
    path: 'manager',
    component: ManagerComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_MANAGER'] },
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
