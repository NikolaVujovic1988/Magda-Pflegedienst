import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import AOS from "aos";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('imageTransition', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', animate('500ms ease-in-out')),
      transition('visible => hidden', animate('500ms ease-in-out'))
    ])
  ]
})

export class HeaderComponent {

  ngOnInit() {
    AOS.init();
  }


  activeLink: string = '';
  isFullScreenDivVisible: boolean = false;
  burgerImageSrc: string = '/assets/images/icons/Property 1=burger.png';
  public burgerImages: string[] = [
    '/assets/images/icons/Property 1=burger.png',
    '/assets/images/icons/Property 1=Transition.png',
    '/assets/images/icons/Property 1=close medium.png',
    '/assets/images/icons/Property 1=CLOSE FINAL.png'
  ];
  private animationInterval: any;

  
  
  setActiveLink(link: string): void {
      this.activeLink = link;
  }

  resetActiveLink(): void {
    this.activeLink = '';
  }

  toggleFullScreenDiv(): void {
    this.isFullScreenDivVisible = !this.isFullScreenDivVisible;
    if (this.isFullScreenDivVisible) {
      this.startBurgerAnimation();
    } else {
      this.stopBurgerAnimation();
      this.burgerImageSrc = this.burgerImages[0];
    }
  }

  private startBurgerAnimation(): void {
    let imageIndex = 0;
    this.animationInterval = setInterval(() => {
      this.burgerImageSrc = this.burgerImages[imageIndex];
      if (imageIndex < this.burgerImages.length - 1) {
        imageIndex++;
      } else {
        clearInterval(this.animationInterval); 
      }
    }, 10);
  }

  private stopBurgerAnimation(): void {
    clearInterval(this.animationInterval);
  }
}
