import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PracownikService } from '../services/pracownik.service';

@Component({
  selector: 'app-add-pracownik',
  templateUrl: './add-pracownik.component.html',
  styleUrls: ['./add-pracownik.component.css']
})
export class AddPracownikComponent implements OnInit {

  dataSource;

  constructor(private service :PracownikService,private router: Router) { }

  ngOnInit(): void {
    const data = {
      pensja:"",
      Rola:"",
      osoba:{
          imie:"",
          nazwisko:"",
          pesel:"",
          dataUrodzenia:"",
          email:"",
          telefon:""
      },
      adres:{
          miejscowosc:"",
          ulica:"",
          nrDomu:"",
          kodPocztowy:""
      }	
    }
    this.dataSource = data;
  }

  addPracownik(){
    this.service.pracownikAdd(this.dataSource).subscribe(i => console.log("add pracownik"));
    this.router.navigateByUrl('/home');
  }
}
