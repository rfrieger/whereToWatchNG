import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal-service';
import { HttpService } from '../services/http-service';
import { Location } from '../location';

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.css']
})
export class LocationModalComponent implements OnInit {
  
 location: Location;
  

  constructor(public modalService : ModalService, public httpService : HttpService) {
    this.location = new Location();
   }

  ngOnInit() {
  }

  createLocation (team : string){
    this.httpService.saveLocation(this.location, team)
    this.modalService.toggleLocationModal()
    this.location.address = "";
    this.location.city="";
    this.location.description ="";
    this.location.name ="";
    alert("test")
  }

}
