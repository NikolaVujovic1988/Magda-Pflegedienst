import { Component } from '@angular/core';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss']
})
export class GooglemapsComponent {
  showMap: boolean = false;

  acceptTerms() {
    this.showMap = true;
  }
}
