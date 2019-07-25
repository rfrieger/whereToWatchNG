import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    showLoginModal = false;

    public returnShowLoginModal() {
        return this.showLoginModal;
    }

    public toggleLoginModal() {        
      if(this.showLoginModal === false) {
          this.showLoginModal = true
        } else {
          this.showLoginModal = false;
        }
      }
}