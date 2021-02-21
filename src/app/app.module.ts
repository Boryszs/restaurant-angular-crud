import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { AdresComponent } from './adres/adres.component';
import { OsobaComponent } from './osoba/osoba.component';
import { KlientComponent } from './klient/klient.component';
import { PracownikComponent } from './pracownik/pracownik.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { KlienciEditComponent } from './klienci-edit/klienci-edit.component';
import { PracownicyEditComponent } from './pracownicy-edit/pracownicy-edit.component';
import { AddKlientComponent } from './add-klient/add-klient.component';
import { AddPracownikComponent } from './add-pracownik/add-pracownik.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdresComponent,
    OsobaComponent,
    KlientComponent,
    PracownikComponent,
    KlienciEditComponent,
    PracownicyEditComponent,
    AddKlientComponent,
    AddPracownikComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
