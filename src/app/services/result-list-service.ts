import { Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { Observable } from 'rxjs';

Injectable()
export class ResultListService {
    locations : Location[]
    // city : string = "phildelphia";
    location : Location;

    constructor(private httpService : HttpService){
    };

    public findAllLocations() {
    this.httpService.findAllLocations().subscribe(data => {
      this.locations = data;
    })
  }

   public getLocationsByCity(city: string){
     this.httpService.getLocationsByCity(city).subscribe(data => {
       this.locations = data;
       
     })
   }

    returnLocations() {
      return this.locations;
    }
  }

