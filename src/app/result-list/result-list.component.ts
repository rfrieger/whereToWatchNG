import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  locations : Location[]

  constructor(private httpService : HttpService) { }

  ngOnInit() {
    this.findAllLocations();
  }

  findAllLocations() {
    this.httpService.findAllLocations().subscribe(data => {
      this.locations = data;
    })
  }

}
