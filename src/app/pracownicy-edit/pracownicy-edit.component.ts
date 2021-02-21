import { Component, OnInit } from '@angular/core';
import { PracownikService } from '../services/pracownik.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pracownicy-edit',
  templateUrl: './pracownicy-edit.component.html',
  styleUrls: ['./pracownicy-edit.component.css']
})
export class PracownicyEditComponent implements OnInit {
  id;
  dataSource;

  constructor(private service:PracownikService,private route :ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.pracownikDataId(this.id).subscribe(data => this.dataSource = data);
  }

  pracownikEdit(){

  }

}
