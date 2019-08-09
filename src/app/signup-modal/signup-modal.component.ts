import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal-service';
import { AuthService } from '../services/auth-service';
import { TokenService } from '../services/token-service';
import { User } from '../user';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {
  authService : AuthService;
  tokenService : TokenService;
  user: User;

  constructor(public modalService : ModalService, authService: AuthService, tokenService: TokenService) { 
    this.authService =  authService;
    this.tokenService =tokenService
    this.user = new User();
  }
    
  ngOnInit() {
  }

  createNewUser() {
    this.authService.signup(this.user).subscribe(token => this.tokenService.token = token);
    this.modalService.toggleSignupModal()
    alert("sign up successful")

  }
}
