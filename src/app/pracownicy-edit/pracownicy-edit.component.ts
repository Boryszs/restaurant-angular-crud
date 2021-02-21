import { Component, OnInit } from '@angular/core';
import { PracownikService } from '../services/pracownik.service';

@Component({
  selector: 'app-pracownicy-edit',
  templateUrl: './pracownicy-edit.component.html',
  styleUrls: ['./pracownicy-edit.component.css']
})
export class PracownicyEditComponent implements OnInit {

  dataSource;

  constructor(private service:PracownikService) { }


  ngOnInit(): void {
    this.service.klientDataId(12).subscribe(data => this.dataSource = data);
  }

  pracownikEdit(){

  }

}
