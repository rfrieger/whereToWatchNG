import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { TokenService } from './token-service';

@Injectable()
  export class AuthService {

    public authUrl: string;
    public newUserUrl: string;
  
    constructor(private http: HttpClient, private tokenService: TokenService) {
      this.authUrl = environment.apiurl + 'signin';
      this.newUserUrl = environment.apiurl + 'signup';
    }
  
  
    signin(username: string, password: string): Observable <string> {
      return this.http.post(this.authUrl, {}, {
        params: {username, password},
        responseType: 'text'
      });
    }
  
    signup(user: User): Observable <string> {
      return this.http.post(this.newUserUrl, user, {responseType: 'text'});
    }
}  