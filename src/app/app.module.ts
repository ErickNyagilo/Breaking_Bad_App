import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatCardModule} from '@angular/material/card';

import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
