import { Component, OnInit } from '@angular/core';
import { PracownikService } from '../services/pracownik.service';
import { ActivatedRoute } from '@angular/router'
import {Router} from '@angular/router';


@Component({
  selector: 'app-pracownicy-edit',
  templateUrl: './pracownicy-edit.component.html',
  styleUrls: ['./pracownicy-edit.component.css']
})
export class PracownicyEditComponent implements OnInit {
  id;
  dataSource;

  constructor(private service:PracownikService,private route :ActivatedRoute,private router: Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.pracownikDataId(this.id).subscribe(data => this.dataSource = data);
  }

  pracownikEdit(){
    this.service.pracownikEdit(this.dataSource).subscribe(i => console.log("edit"));
    this.router.navigateByUrl('/home');
  }

}
