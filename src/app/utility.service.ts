import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  NUMBER_OF_SCROLL_STEPS: number = 10;
  IMAGE_HEIGHT: number = 175;
  IMAGE_PADDING: number = 30;
  DOWN_SCROLL_AMOUNT: number = this.IMAGE_HEIGHT + 2*this.IMAGE_PADDING;
  SCROLL_STOP: number = 100;

  scrollId: number;
  stepSize: number = 0;
  scrollStart: number;

  constructor() { }

  scrollUpToPosition(position) {
    let currentPosition = document.documentElement.scrollTop;
    if (currentPosition > position) {
      this.stepSize = Math.ceil((currentPosition - position) / this.NUMBER_OF_SCROLL_STEPS);
      if (currentPosition == position) {
        window.cancelAnimationFrame(this.scrollId);
      } else if (currentPosition - this.stepSize > position) {
        window.scrollTo(0, currentPosition - this.stepSize);
        this.scrollId = window.requestAnimationFrame(this.scrollUpToPosition.bind(this, position));
      } else {
        window.scrollTo(0, position);
        this.scrollId = window.requestAnimationFrame(this.scrollUpToPosition.bind(this, position));
      } 
      this.stepSize = 0;
    }
  }
}
