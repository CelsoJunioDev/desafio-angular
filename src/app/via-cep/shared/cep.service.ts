import {HttpClient} from '@angular/common/http'
import { Inject, Injectable } from '@angular/core';
import { Cep } from './cep.model';

@Injectable({providedIn: 'root'})
export class CepService{
url = 'https://viacep.com.br/ws/'
  constructor(private http:HttpClient){

  }

  getCep(cep: string){
    return this.http.get(`${this.url}${cep}/json`);
  }
}
