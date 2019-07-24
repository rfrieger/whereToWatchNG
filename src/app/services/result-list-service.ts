import { Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { Observable } from 'rxjs';

Injectable()
export class ResultListService {
    locations : Location[]
    
    constructor(private httpService : HttpService){
    };

    findAllLocations() {
    this.httpService.findAllLocations().subscribe(data => {
      this.locations = data;
      console.log(data);
      console.log(this.locations.length);
    })
  }

    returnLocations() {
      return this.locations;
    }
  }

