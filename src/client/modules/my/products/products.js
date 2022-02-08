import { LightningElement } from 'lwc';

export default class Products extends LightningElement {
    isSubmit=false;

    goToSubmit() {
        this.isProduct = false;
        this.isContact = false;
        this.isHome = false;
        this.isSubmit = true;
   }

}