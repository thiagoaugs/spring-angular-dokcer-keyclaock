import { OnInit } from '@angular/core';

import { MenuItem } from "primeng/api";

export class MenuDTO implements OnInit {

  private items: MenuItem[] = [];

  ngOnInit() {
      this.items = [{
          label: 'File',
          items: [
              {label: 'New', icon: 'pi pi-plus'},
              {label: 'Open', icon: 'pi pi-download'}
          ]
      },
      {
          label: 'Edit',
          items: [
              {label: 'Undo', icon: 'pi pi-refresh'},
              {label: 'Redo', icon: 'pi pi-repeat'}
          ]
      }];
  }
}
