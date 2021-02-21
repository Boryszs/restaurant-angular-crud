import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KlientService } from '../services/klient.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-klienci-edit',
  templateUrl: './klienci-edit.component.html',
  styleUrls: ['./klienci-edit.component.css']
})
export class KlienciEditComponent implements OnInit {
  dataSource;
  id; 
  constructor(private service:KlientService,private route :ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.klientDataId(this.id).subscribe(data => this.dataSource = data);
  }

  klientEdit(){
  }

}
