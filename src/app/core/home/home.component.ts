import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isHideStartBtn: boolean = false;
  commonServiceSub: any;

  constructor(private toasterService: ToasterService,
    private commonService: CommonService
  ) {

    this.commonServiceSub = this.commonService.getMessage.subscribe((res) => { 
      if (res && res?.reEnableStart) {
        this.isHideStartBtn = false;
        this.toasterService.showToast('success', 'Success', 'Migration applied successfully.', 6000);
      }
    });
  }

  ngOnInit(): void {
  }

  triggerToast() {
    this.isHideStartBtn = true;
    this.commonService.setMessage({ isStartTriggered: true})
  }

  ngOnDestroy(){
    if(this.commonServiceSub) this.commonServiceSub.unsubscribe();
  }
}
