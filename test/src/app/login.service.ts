import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  getContacts(){
    console.log("Sucess");
    return this.http.get('http://localhost:5000/users/kappa');
  }

}
