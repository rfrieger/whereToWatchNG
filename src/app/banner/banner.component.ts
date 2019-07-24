import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ResultListService } from '../services/result-list-service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor(private resultListService : ResultListService) { }
  ngOnInit() {
  }

  getResults(){
    this.resultListService.findAllLocations();
    
    }

}
