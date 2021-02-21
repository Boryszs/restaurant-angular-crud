import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
  
  const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class PracownikService {
  constructor(private http: HttpClient) { }

  pracownikAll(){
    return this.http.get<any[]>(BASE_URL+"pracownik/all"); 
  }

  pracownikAllData(){
    return this.http.get<any[]>(BASE_URL+"pracownik/all-pracownik"); 
  }

  deletePracownik(id){
    return this.http.delete(`${BASE_URL}pracownik/delete-pracownik/${id}`)
  }

  klientDataId(id){
    return this.http.get<any[]>(`${BASE_URL}pracownik/get-pracownik/${id}`); 
  }

}
