import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private readonly commonService: CommonService) { }

  showToast(type: string, headerMessage: string, message?: string, progress?: number, id?: number) {
    let toastObj: any = {};
    toastObj.showToast = true;
    toastObj.toast = {
      id: id,
      type: type,
      headerMessage: headerMessage,
      message: message,
      duration: progress
    }
    this.commonService.setToastMessage(toastObj);
  }
}
