import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal-service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor(public modalService : ModalService) {}

  ngOnInit() {
  }

}
