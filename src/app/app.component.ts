import { Component } from '@angular/core';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-website';

  firstTimeLoad = true;

  constructor(private utilityService: UtilityService) {}

  callScrollUpToPosition() {
    if (this.firstTimeLoad) {
      this.utilityService.scrollUpToPosition(0);
      this.firstTimeLoad = false;
    } else {
      this.utilityService.scrollUpToPosition(100);
    }
  }
}
