import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipCalulatorComponent } from './tip-calulator.component';

describe('TipCalulatorComponent', () => {
  let component: TipCalulatorComponent;
  let fixture: ComponentFixture<TipCalulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipCalulatorComponent]
    });
    fixture = TestBed.createComponent(TipCalulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
