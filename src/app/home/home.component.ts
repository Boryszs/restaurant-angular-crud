import {AfterViewInit,Component, OnInit, ViewChild} from '@angular/core';
import {KlientService} from '../services/klient.service';
import {PracownikService} from '../services/pracownik.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit{

  displayedColumnsK: string[] = ['id', 'login', 'haslo', 'imie', 'nazwisko', 'pesel','data urodzenia','email','telefon', 'miejscowosc', 'ulica', 'nr domu','kod pocztowy','delete','edit'];
  displayedColumnsP: string[] = ['id', 'pensja', 'rola', 'imie', 'nazwisko', 'pesel','data urodzenia','email','telefon', 'miejscowosc', 'ulica', 'nr domu','kod pocztowy','delete','edit'];

  dataSourceKlient = new MatTableDataSource();
  dataSourcePracownik = new MatTableDataSource();

  constructor(private serviceKlient :KlientService,private servicePracownik :PracownikService,private router: Router){}

  @ViewChild('paginator') 
  paginator: MatPaginator;
  @ViewChild('paginator2') 
  paginator2: MatPaginator;

  ngAfterViewInit() {
    this.dataSourceKlient.paginator = this.paginator;
    this.dataSourcePracownik.paginator = this.paginator2;
  }

  deleteKlient(id){
    this.serviceKlient.deleteKlient(id).subscribe(i => this.getData());
  }

  deletePracownik(id){
    this.servicePracownik.deletePracownik(id).subscribe( i => this.getData());
  }

  editKlient(id){
      this.router.navigate(['/klient-edit',id]);
  }

  editPracownik(id){
      this.router.navigate(['/pracownicy-edit',id]);
  }

  addKlient(){
      this.router.navigateByUrl('/add-klient');
  }

  addPracownik(){
    this.router.navigateByUrl('/add-pracownik');
  }

  getData(){
    this.serviceKlient.klientAllData().subscribe(data => this.dataSourceKlient.data = data)
    this.servicePracownik.pracownikAllData().subscribe(data => this.dataSourcePracownik.data = data)
  }
  ngOnInit(): void {
    this.getData();
  }
}
