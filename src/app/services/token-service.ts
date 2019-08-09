import { Injectable } from "@angular/core";
import { ModalService } from './modal-service';

@Injectable()
export class TokenService {
    token: string;
    loggedIn : boolean = false;

    constructor() { }
  
}