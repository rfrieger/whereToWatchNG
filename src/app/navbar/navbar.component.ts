import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal-service';
import { TokenService } from '../services/token-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginBtnText: string = "Login"
  
  constructor(public modalService : ModalService, public tokenService: TokenService) { }

  ngOnInit() {
  }

  logoff() {
    this.tokenService.token = ""
    this.tokenService.loggedIn = false;
  }
}
