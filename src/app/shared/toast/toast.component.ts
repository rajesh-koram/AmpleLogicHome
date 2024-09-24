import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  config = {
    success: 'success',
    error: 'error',
    duration: 6000,
  };
  toastInterval: any;
  @Input() toastList: any;
  progress: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.toastInterval = setInterval(() => {
      if (this.toastList.length > 0) {
        this.toastList.forEach((toast: any, index: any) => {
          const timeDiff = new Date().getTime() - toast.currentTime;

          toast.progress = (timeDiff / toast.duration) * 100;

          if (timeDiff >= toast.duration) {
            this.toastList.splice(index, 1);
            toast.progress = 0;
          }
        });
      } else {
        this.hideToast();
      }
    }, 100);
  }

  hideToast() {
    this.toastList.splice(0, 1);
  }

  ngOnDestroy(): void {
  }
}