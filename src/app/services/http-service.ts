import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Team } from '../team';

@Injectable()
export class HttpService {
    tempLocations : Location[];
    rootUrl = environment.apiurl;

    constructor(private http: HttpClient) {
    }
   
    
    public findAllLocations(): Observable<Location[]> {
        return this.http.get<Location[]>(this.rootUrl)
    }

    public getLocations(city:string, team: string) {
        if(!city) {
            return this.http.get<Location[]>(this.rootUrl + "locationByTeam/" + team)
            
        }
        if(!team) {
            console.log(this.rootUrl + "locations/" + city)
            return this.http.get<Location[]>(this.rootUrl + "locations/" + city)
        } 
        
        if (team && city)return this.http.get<Location[]>(this.rootUrl + "locations/" + city + "/" + team)
    }
}