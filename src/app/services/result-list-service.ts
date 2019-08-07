import { Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { Observable } from 'rxjs';

Injectable()
export class ResultListService {
    locations : Location[]
    location : Location;

    constructor(private httpService : HttpService){
    };

   public getLocations(city: string, team: string){
    
     this.httpService.getLocations(city, team).subscribe(data => {
       this.locations = data;
       if(this.locations.length  < 1) {
         alert("No Matches Found")
         
       }
     })
   }

    returnLocations() {
      return this.locations;
    }
  }

