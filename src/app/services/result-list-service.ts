import { Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { Observable } from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/internal/operators/distinctUntilChanged';
import { Location } from '../location';
import {AutocompleteService} from '../services/auto-complete.service';


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

    // search = (text$: Observable<string>) =>
    // text$.pipe(
    //   debounceTime(200),
    //   distinctUntilChanged(),
    //   map(term => term.length < 2 ? []
    //     : this.results.data.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    // )

  }

