import { LoaderService } from './loader/loader.service';
import {delay} from 'rxjs/operators';
import { PrimeNGConfig } from 'primeng/api';
import { environment } from './../environments/environment';
import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig,   private _loading: LoaderService) {}

  title = 'sat-forms-frontend';
  ambiente: string = "";
  nome: String = "";
  loading: boolean = false;


  ngOnInit() {
    this.primengConfig.ripple = true;
    this.listenToLoading();
    this.ambiente = environment.ambiente;


  }

   /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
    listenToLoading(): void {
      this._loading.loadingSub
        .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
        .subscribe((loading) => {
          this.loading = loading;
        });
    }




}
