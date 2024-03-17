import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  close: any;
  display: boolean | undefined;
  closePopup() {
    this.display = false;
    this.close.emit();
  }

  showImpressumPopup: boolean = false;

  constructor() {}

  toggleImpressumPopup(): void {
    this.showImpressumPopup = !this.showImpressumPopup;
  }

  closePopupOnOuterClick(event: MouseEvent): void {
    const clickedOutside = !(event.target as Element).classList.contains('popup-content');
    if (clickedOutside) {
      this.showImpressumPopup = false;
    }
  }

  stopPropagating(event: MouseEvent): void {
    event.stopPropagation();
  }
}