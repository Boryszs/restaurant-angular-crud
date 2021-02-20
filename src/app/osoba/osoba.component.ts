import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import {OsobaService} from '../services/osoba.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-osoba',
  templateUrl: './osoba.component.html',
  styleUrls: ['./osoba.component.css']
})
export class OsobaComponent implements AfterViewInit, OnInit{
  displayedColumns: string[] = ['id', 'imie', 'nazwisko', 'pesel','data urodzenia','email','telefon','delete','edit','detail'];

  dataSource = new MatTableDataSource();

  constructor(private service :OsobaService) { }

  @ViewChild(MatPaginator) 
  paginator: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteId(id){
    this.service.deleteOsoba(id).subscribe(data => this.getData());
  }


  getData(){
     this.service.osobaAll().subscribe(data => this.dataSource.data = data);
  }

  ngOnInit(): void {
    this.getData();
  }

}
