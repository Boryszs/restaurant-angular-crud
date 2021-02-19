import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
  
  const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AdresService {

  constructor(private http: HttpClient) { }

  adresyAll(){
    return this.http.get<any[]>(BASE_URL+"adres/all"); 
  }

}
