import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAreaComponent } from './alert-area.component';

describe('AlertAreaComponent', () => {
  let component: AlertAreaComponent;
  let fixture: ComponentFixture<AlertAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
