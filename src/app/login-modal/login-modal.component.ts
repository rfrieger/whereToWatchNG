import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal-service';
import { AuthService } from '../services/auth-service';
import { TokenService } from '../services/token-service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  username;
  password;

  modalService: ModalService;
  authService: AuthService;
  tokenService: TokenService;

  constructor( modalService : ModalService, authService: AuthService, tokenService: TokenService) {
    this.modalService = modalService;
    this.authService = authService;
    this.tokenService = tokenService;
  }

  ngOnInit() {
  }

  signIn() {
    this.authService.signin(this.username, this.password).subscribe(token => {
      this.tokenService.token = token
      this.tokenService.loggedIn =true
      console.log(this.tokenService.loggedIn)
      this.modalService.toggleLoginModal()
    })

  }
  

  

 
}

