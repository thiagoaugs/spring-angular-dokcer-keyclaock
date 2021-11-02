import { AppRoutingModule } from './../app-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { FornecedorComponent } from './pages/fornecedor/fornecedor.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';

@NgModule({

  declarations: [
   //myComponents
   FornecedorComponent,
   DashboardAdminComponent,
  ],
  exports: [
   //myComponents
   FornecedorComponent,
   DashboardAdminComponent,
  ],

  imports: [
    CommonModule,

    //PRIMENG
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    ChartModule,
    PanelModule


  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],



})
export class AdminModule { }
