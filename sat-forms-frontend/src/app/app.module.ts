import { ChartModule } from 'primeng/chart';
import { AdminModule } from './admin/admin.module';
import { MenuItem, MegaMenuItem } from 'primeng/api';
import { SharedModule } from './shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeycloakService } from 'keycloak-angular';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule } from 'keycloak-angular';
import { HttpClientModule } from '@angular/common/http';
import { initializer } from 'src/utils/app-init';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {PanelModule} from 'primeng/panel';

import {MenuModule} from 'primeng/menu';


@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    ManagerComponent,
    AdminComponent,


  ],
  imports: [
    BrowserModule,

    //REST
    HttpClientModule,

    //ROUTERS
    AppRoutingModule,



    //PRIMENG
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    PanelModule,

    ChartModule,

    //PRIMENG

    //MyCOMPONENTS
    SharedModule,
    AdminModule,
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
