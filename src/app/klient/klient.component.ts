
import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { KlientService } from '../services/klient.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-klient',
  templateUrl: './klient.component.html',
  styleUrls: ['./klient.component.css']
})
export class KlientComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = ['id', 'login', 'haslo','delete','edit','detail'];
  dataSource = new MatTableDataSource();

  constructor(private service:KlientService){}

  @ViewChild(MatPaginator) 
  paginator: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.service.klientAll().subscribe(data => this.dataSource.data = data)
  }
}
