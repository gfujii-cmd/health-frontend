import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandWashComponent } from './hand-wash.component';

describe('HandWashComponent', () => {
  let component: HandWashComponent;
  let fixture: ComponentFixture<HandWashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandWashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
