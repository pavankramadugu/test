import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AgGridModule} from "ag-grid-angular";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { MatMenuModule} from '@angular/material/menu';
import {ActionButtonCellRenderer} from "./action-button-cell/action-button-cell.component";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ActionButtonCellRenderer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterLinkActive,
    RouterLink,
    AgGridModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
