import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-service';
import { ResultListService } from '../services/result-list-service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  constructor(private httpService : HttpService, private reasultListService : ResultListService ) { }
  locations: Location[];

  ngOnInit(){
  }
}
