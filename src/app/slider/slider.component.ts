import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  images = [
    'assets/images/slika1.jpg',
    'assets/images/slika2.jpg',
    'assets/images/slika3.jpg',
    'assets/images/slika4.jpg',
    'assets/images/slika5.jpg'
  ];

  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = ++this.currentIndex % this.images.length;
    }, 5000);
  }

}



