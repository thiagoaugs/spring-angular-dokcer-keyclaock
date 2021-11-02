
import { initializer } from 'src/utils/app-init';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from 'primeng/menu';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MegaMenuModule } from 'primeng/megamenu';

import {TieredMenuModule} from 'primeng/tieredmenu';
import {MenuItem} from 'primeng/api';


@NgModule({
  declarations: [
    PageFooterComponent,
    PageHeadingComponent,
    PageMenuComponent,
  ],
  exports: [
    PageFooterComponent,
    PageHeadingComponent,
    PageMenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,

    //Keycloack
    KeycloakAngularModule,
    //PRIMENG
    FormsModule,

    BrowserAnimationsModule,
    MegaMenuModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    TieredMenuModule,

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    },
  ]
})


export class SharedModule { }
