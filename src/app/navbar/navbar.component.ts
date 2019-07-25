import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginBtnText: string = "Login"
  
  constructor(public modalService : ModalService) { }

  ngOnInit() {
  }
}
