import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KlientService } from '../services/klient.service';

@Component({
  selector: 'app-klienci-edit',
  templateUrl: './klienci-edit.component.html',
  styleUrls: ['./klienci-edit.component.css']
})
export class KlienciEditComponent implements OnInit {
  dataSource;

  constructor(private service:KlientService) { }

  ngOnInit(): void {
    this.service.klientDataId(11).subscribe(data => this.dataSource = data);
  }

  klientEdit(){
  }

}
