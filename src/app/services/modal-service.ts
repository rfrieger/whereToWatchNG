import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    showLoginModal = false;
    showSignupModal= false;

    public returnShowLoginModal() {
        return this.showLoginModal;
    }
    public returnShowSignupModal() {
      return this.showSignupModal;
      
  }

    public toggleLoginModal() {        
      if(this.showLoginModal === false) {
          this.showLoginModal = true
        } else {
          this.showLoginModal = false;
        }
      }

      public toggleSignupModal() {      
        console.log("test")  
        if(this.showSignupModal === false) {
          console.log("1")  

            this.showSignupModal = true
          } else {
            this.showSignupModal = false;
            console.log("2")  

          }
        }
      
}