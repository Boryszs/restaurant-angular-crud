import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import {PracownikService } from '../services/pracownik.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-pracownik',
  templateUrl: './pracownik.component.html',
  styleUrls: ['./pracownik.component.css']
})
export class PracownikComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = ['id', 'pensja', 'rola'];
  dataSource = new MatTableDataSource();

  constructor(private service :PracownikService){}

  @ViewChild(MatPaginator) 
  paginator: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getData(){
    this.service.pracownikAll().subscribe(data => this.dataSource.data = data);
  }

  ngOnInit(): void {
    this.getData();
  }

}
