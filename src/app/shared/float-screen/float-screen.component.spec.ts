import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatScreenComponent } from './float-screen.component';

describe('FloatScreenComponent', () => {
  let component: FloatScreenComponent;
  let fixture: ComponentFixture<FloatScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatScreenComponent]
    });
    fixture = TestBed.createComponent(FloatScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
