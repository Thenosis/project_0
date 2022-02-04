import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    isAbout = false;
    isProduct = false;
    isContact = false;
    isMain = true;

   goToAbout() {
        this.isAbout = true;
        this.isProduct = false;
        this.isContact = false;
        this.isMain = false;
   }

   goToProducts() {
        this.isAbout = false;
        this.isProduct = true;
        this.isContact = false;
        this.isMain = false;
   }

   goToContact() {
    this.isAbout = false;
    this.isProduct = false;
    this.isContact = true;
    this.isMain = false;
   }
}
