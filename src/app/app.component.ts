import { Component } from '@angular/core';
import { CommonService } from './shared/common.service';
import { ToasterService } from './shared/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ampleLogicHome';
  showToast: boolean = false;
  list: any = [];

  isStartTriggered: boolean = false;

  constructor(private commonService: CommonService, private toasterService: ToasterService) {
    this.commonService.displayToast.subscribe(data => {
      this.showToast = data.showToast;
      if (data.toast) {
        data.toast.currentTime = new Date().getTime();
        const foundObjectIndex = this.list.findIndex((obj: any) => obj.id && (obj.id === data.toast.id));
        if (foundObjectIndex !== -1) {
          this.list[foundObjectIndex] = data.toast;
        } else {
          this.list.push(data.toast);
        }
      }
    });

    this.commonService.getMessage.subscribe((res) => { 
      if (res && res?.isStartTriggered) { 
        this.isStartTriggered = true;
      }
      if (res && res?.reEnableStart) { 
        this.isStartTriggered = false;
      }
    });
  }

  ngOnInit(): void {
  }
}