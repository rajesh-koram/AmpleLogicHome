import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isFloatingLoader: boolean = false;

  constructor(private commonService: CommonService) {

    this.commonService.getMessage.subscribe((res) => { 
      if (res && res?.isStartTriggered) { 
        this.isFloatingLoader = true;
      }
      if (res && res?.reEnableStart) { 
        this.isFloatingLoader = false;
      }
    });
   }
}
