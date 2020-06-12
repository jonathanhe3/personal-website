import { Component } from '@angular/core';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-website';

  constructor(private utilityService: UtilityService) {}

  callScrollToTop() {
    this.utilityService.scrollToTop();
  }
}
