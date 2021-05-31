import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partner, Country } from '../models/partner.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  listI: Partner[];

  constructor(private http: HttpClient) { 
    this.listI = [{
      institution: '' ,
      acronym: '',
      name:'',
      type: '',
      country: '',
      city: '',
      website: ''
    }];
  }

  getContry(){
    return this.http.get<Country>('https://restcountries.eu/rest/v2/all');
  }

  getList(){
    if (localStorage.getItem('listI')==null) {
      return this.listI;
    } else {
      this.listI=JSON.parse(localStorage.getItem('listI'));
      return this.listI;
    }
  }

  addIstitution(listInstitution: Partner){
     console.log(listInstitution);
    let listI: Partner[]=[];
    if(localStorage.getItem('listI')==null){
      listI.push(listInstitution);
      localStorage.setItem('listI', JSON.stringify(listI));
    }else{
      listI=JSON.parse(localStorage.getItem('listI'));
      console.log(listI);
      listI.push(listInstitution);
      localStorage.setItem('listI', JSON.stringify(listI));
    }
    this.getList();
  }

  deleteInstitution(listInstitution: Partner){
    for(let i=0;i<this.listI.length;i++){
      if(listInstitution==this.listI[i]){
        this.listI.splice(i,1);
        localStorage.setItem('listI', JSON.stringify(this.listI));
      }
    }
  }

}
