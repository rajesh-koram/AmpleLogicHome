import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor() { }

  // To display toast
  private showtoast = new Subject<any>();
  displayToast = this.showtoast.asObservable();

  private messageSubject = new Subject<any>();

  setToastMessage(obj: any) {
    this.showtoast.next(obj);
  }

  getMessage = this.messageSubject.asObservable();
  setMessage(message: any): void {
    this.messageSubject.next(message)
  }

  /***************************          Float Screen          ***************************************** */
  private isVisibleSubject = new BehaviorSubject<boolean>(false);
  isVisible$ = this.isVisibleSubject.asObservable();

  show() {
    this.isVisibleSubject.next(true);
  }

  toggle() {
    this.isVisibleSubject.next(!this.isVisibleSubject.value);
  }
}
