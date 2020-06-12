import { Component, OnInit, HostListener } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {

  lastScrollPosition: any;

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.utilityService.scrollToTop();
  }

  ngAfterContentInit() {
    
  }



  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    console.log('document.documentElement.scrollTop: ' + document.documentElement.scrollTop);
    if (document.documentElement.scrollTop < 225) {
      

    }
    // document.getElementById('image').style.
    this.lastScrollPosition = document.documentElement.scrollTop;
  }

}
