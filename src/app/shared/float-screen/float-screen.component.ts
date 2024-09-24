import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-float-screen',
  templateUrl: './float-screen.component.html',
  styleUrls: ['./float-screen.component.scss']
})
export class FloatScreenComponent {

  isVisible$ = this.commonService.isVisible$;
  progressPercentage: number = 0;

  floatInterval: any;
  duration: number = 10000;
  startTime: any;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.startTime = new Date().getTime();

    this.floatInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - this.startTime;

      this.progressPercentage = Math.round((timeDiff / this.duration) * 100);

      if (timeDiff >= this.duration) {
        this.commonService.setMessage({ reEnableStart: true });
        this.progressPercentage = 0;
        this.startTime = new Date().getTime();
        if (this.floatInterval) {
          clearInterval(this.floatInterval);
        }
      }
    }, 100);
  }

  ngOnDestroy() {
    if (this.floatInterval) {
      clearInterval(this.floatInterval);
    }
  }

  handleToggle() {
    this.commonService.toggle();
  }
}
