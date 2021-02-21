import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import {AdresService} from '../services/adres.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-adres',
  templateUrl: './adres.component.html',
  styleUrls: ['./adres.component.css']
})
export class AdresComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = ['id', 'miejscowosc', 'ulica', 'nr domu','kod pocztowy'];
  dataSource = new MatTableDataSource();

  constructor(private service :AdresService) { }

  @ViewChild(MatPaginator) 
  paginator: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getData(){
    this.service.adresyAll().subscribe(data => this.dataSource.data = data)
  }

  ngOnInit(): void {
    this.getData();
  }

}
