import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    isAbout = false;
    isProduct = false;
    isContact = false;
    isHome = true;

    goToHome() {
        this.isAbout = false;
        this.isProduct = false;
        this.isContact = false;
        this.isHome = true;
   }

   goToAbout() {
        this.isAbout = true;
        this.isProduct = false;
        this.isContact = false;
        this.isHome = false;
   }

   goToProducts() {
        this.isAbout = false;
        this.isProduct = true;
        this.isContact = false;
        this.isHome = false;
   }

   goToContact() {
    this.isAbout = false;
    this.isProduct = false;
    this.isContact = true;
    this.isHome = false;
   }
}


