import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ResultListService } from '../services/result-list-service';
import { HttpService } from '../services/http-service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public resultListService : ResultListService, public httpService : HttpService) {
   }

  ngOnInit() {
  }
  
}
