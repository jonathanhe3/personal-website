import { Component, OnInit, HostListener } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {

  imageRef: any;

  lastScrollPosition: any;
  imageHeightFactor: any;
  imagePaddingFactor: any;

  windowWidth: any;

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.imageHeightFactor = this.utilityService.IMAGE_HEIGHT / this.utilityService.DOWN_SCROLL_AMOUNT;
    this.imagePaddingFactor = this.utilityService.IMAGE_PADDING / this.utilityService.DOWN_SCROLL_AMOUNT;
  }

  ngAfterViewInit() {
    this.imageRef = document.getElementById('image');
  }

  toggleMenu() {
    console.log("toggle menu");
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.windowWidth > 415) {
      let currentScrollPosition = document.documentElement.scrollTop;
      if (currentScrollPosition < this.utilityService.SCROLL_STOP) {
        this.imageRef.style.height = (this.utilityService.DOWN_SCROLL_AMOUNT - currentScrollPosition) * this.imageHeightFactor + "px";
        this.imageRef.style.padding = (this.utilityService.DOWN_SCROLL_AMOUNT - currentScrollPosition) * this.imagePaddingFactor + "px 0px";
      } else {
        this.imageRef.style.height = "102px";
        this.imageRef.style.padding = "17px 0px";
      }
      this.lastScrollPosition = document.documentElement.scrollTop;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    if (this.windowWidth > 415) {
      this.imageRef = document.getElementById('image');
    }
  }
}
