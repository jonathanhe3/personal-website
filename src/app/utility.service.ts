import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  NUMBER_OF_SCROLL_STEPS: number = 30;

  scrollId: number;
  stepSize: number = 0;
  scrollStart: number;

  constructor() { }

  scrollToTop() {
    let currentPosition = document.documentElement.scrollTop;
    if (this.stepSize == 0) {
      this.scrollStart = currentPosition;
      this.stepSize = Math.ceil(currentPosition / this.NUMBER_OF_SCROLL_STEPS);
    }
    if (currentPosition == 0) {
      window.cancelAnimationFrame(this.scrollId);
      this.stepSize = 0;
    } else if (currentPosition - this.stepSize > 0) {
      window.scrollTo(0, currentPosition - this.stepSize);
      this.scrollId = window.requestAnimationFrame(this.scrollToTop.bind(this));
    } else {
      window.scrollTo(0, 0);
      this.scrollId = window.requestAnimationFrame(this.scrollToTop.bind(this));
    } 
    // window.scrollTo({top: 0, left:0, behavior: 'smooth'});
  }
}
