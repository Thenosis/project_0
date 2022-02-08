import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    isProduct = false;
    isContact = false;
    isHome = true;

    goToHome() {
        this.isProduct = false;
        this.isContact = false;
        this.isHome = true;
   }

   goToProducts() {
        this.isProduct = true;
        this.isContact = false;
        this.isHome = false;
   }

   goToContact() {
    this.isProduct = false;
    this.isContact = true;
    this.isHome = false;
   }
}


