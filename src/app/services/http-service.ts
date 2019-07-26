import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    
    constructor(private http: HttpClient) {
    }
    rootUrl = environment.apiurl
    
    public findAllLocations(): Observable<Location[]> {
        return this.http.get<Location[]>(this.rootUrl + "/locations")
    }

    public getLocations(city:string, team: string) {
        if(!city) {
            city = "n"
        }

        if(!team) {
            team = "n"
        }
        return this.http.get<Location[]>(this.rootUrl + "/locations/" + city + "/" + team)
    }
}