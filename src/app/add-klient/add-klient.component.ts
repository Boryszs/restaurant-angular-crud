import { Component, OnInit } from '@angular/core';
import { KlientService } from '../services/klient.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-klient',
  templateUrl: './add-klient.component.html',
  styleUrls: ['./add-klient.component.css']
})
export class AddKlientComponent implements OnInit {

  dataSource;
  constructor(private service :KlientService,private router: Router) { }

  ngOnInit(): void {
    const data = {
      login:"",
      haslo:"",
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

  addKlient(){
    this.service.klientAdd(this.dataSource).subscribe(i => console.log('send'));
    this.router.navigateByUrl('/home');
  }

}
