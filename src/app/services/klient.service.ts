import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
  
  const BASE_URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class KlientService {

  constructor(private http: HttpClient) { }
  id : Number;
  klientAll(){
    return this.http.get<any[]>(BASE_URL+"klient/all"); 
  }

  deleteKlient(id){
    console.log(`${BASE_URL}klient/delete-klient/${id}`);
    return this.http.delete(`${BASE_URL}klient/delete-klient/${id}`);
  }

  klientAllData(){
    return this.http.get<any[]>(BASE_URL+"klient/all-klient"); 
  }

  klientDataId(id){
    return this.http.get<any[]>(`${BASE_URL}klient/get-klient/${id}`); 
  }

  klientAdd(data){
    return this.http.post<any[]>(BASE_URL+"klient/add-klient",data); 
  }

  klientEdit(data){
     this.id = data.klient.idKlienta;
    return this.http.put(`${BASE_URL}klient/update-klient/${this.id}`,data); 
  }


}
