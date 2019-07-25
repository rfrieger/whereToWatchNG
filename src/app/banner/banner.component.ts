import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ResultListService } from '../services/result-list-service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor(public resultListService : ResultListService) { }
  ngOnInit() {
  }

  getResults(){
    this.resultListService.findAllLocations();
    
    }

}
