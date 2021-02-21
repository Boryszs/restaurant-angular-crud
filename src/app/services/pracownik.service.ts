import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
  
  const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class PracownikService {
  constructor(private http: HttpClient) { }

  id;

  pracownikAll(){
    return this.http.get<any[]>(BASE_URL+"pracownik/all"); 
  }

  pracownikAllData(){
    return this.http.get<any[]>(BASE_URL+"pracownik/all-pracownik"); 
  }

  deletePracownik(id){
    return this.http.delete(`${BASE_URL}pracownik/delete-pracownik/${id}`)
  }

  pracownikDataId(id){
    return this.http.get<any[]>(`${BASE_URL}pracownik/get-pracownik/${id}`); 
  }

  pracownikAdd(data){
    return this.http.post(BASE_URL+"pracownik/add-pracownik",data); 
  }

  pracownikEdit(data){
    this.id = data.pracownik.idPracownika;
   return this.http.put(`${BASE_URL}pracownik/update-pracownik/${this.id}`,data); 
 }
}
