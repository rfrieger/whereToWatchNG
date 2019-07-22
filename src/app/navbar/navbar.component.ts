import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginBtnText: string = "Login"
  showLoginModal = false;
  constructor() { }

  ngOnInit() {
  }

  toggleLoginModal() {
    if(this.showLoginModal = false) {
      this.showLoginModal = true
    } else {
      this.showLoginModal = false;
    }
  }

}
