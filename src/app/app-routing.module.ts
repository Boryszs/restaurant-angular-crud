import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdresComponent } from './adres/adres.component';
import { OsobaComponent } from './osoba/osoba.component';
import { KlientComponent } from './klient/klient.component';
import { PracownikComponent } from './pracownik/pracownik.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "adresy", component: AdresComponent},
  {path: "osoby", component: OsobaComponent},
  {path: "klienci", component: KlientComponent},
  {path: "pracownicy", component: PracownikComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
