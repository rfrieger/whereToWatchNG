import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    showLoginModal = false;
    showSignupModal = false;
    showLocationModal = false;

    public returnShowLoginModal() {
        return this.showLoginModal;
    }
    public returnShowSignupModal() {
      return this.showSignupModal;
    }

    public returnLocationModal() {
    return this.showLocationModal;
    } 

    public toggleLoginModal() {        
      if(this.showLoginModal === false) {
          this.showLoginModal = true
        } else {
          this.showLoginModal = false;
        }
      }

    public toggleSignupModal() {      
      if(this.showSignupModal === false) {
          this.showSignupModal = true
        } else {
          this.showSignupModal = false;
        }
      }

    public toggleLocationModal() {      
      if(this.showLocationModal === false) {
          this.showLocationModal = true;
        } else {
          this.showLocationModal = false;
        }
      }     
}