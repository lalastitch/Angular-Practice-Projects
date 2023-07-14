import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTipComponent } from './custom-tip.component';

describe('CustomTipComponent', () => {
  let component: CustomTipComponent;
  let fixture: ComponentFixture<CustomTipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTipComponent]
    });
    fixture = TestBed.createComponent(CustomTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
