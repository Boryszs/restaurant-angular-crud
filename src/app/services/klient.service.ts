import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
  
  const BASE_URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class KlientService {

  constructor(private http: HttpClient) { }

  klientAll(){
    return this.http.get<any[]>(BASE_URL+"klient/all"); 
  }

  deleteKlient(id){
    return this.http.delete(`${BASE_URL}klient/delete/${id}`)
  }

  klientAllData(){
    return this.http.get<any[]>(BASE_URL+"klient/all-klient"); 
  }

}
