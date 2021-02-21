import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdresComponent } from './adres/adres.component';
import { OsobaComponent } from './osoba/osoba.component';
import { KlientComponent } from './klient/klient.component';
import { PracownikComponent } from './pracownik/pracownik.component';
import { KlienciEditComponent } from './klienci-edit/klienci-edit.component';
import { PracownicyEditComponent } from './pracownicy-edit/pracownicy-edit.component';
import { AddKlientComponent } from './add-klient/add-klient.component';
import { AddPracownikComponent } from './add-pracownik/add-pracownik.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "adresy", component: AdresComponent},
  {path: "osoby", component: OsobaComponent},
  {path: "klienci", component: KlientComponent},
  {path: "pracownicy", component: PracownikComponent},
  {path: "klient-edit/:id", component: KlienciEditComponent},
  {path: "pracownicy-edit/:id", component: PracownicyEditComponent},
  {path: "add-klient", component: AddKlientComponent},
  {path: "add-pracownik", component: AddPracownikComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
