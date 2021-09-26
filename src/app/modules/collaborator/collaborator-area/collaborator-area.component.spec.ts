import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorAreaComponent } from './collaborator-area.component';

describe('CollaboratorAreaComponent', () => {
  let component: CollaboratorAreaComponent;
  let fixture: ComponentFixture<CollaboratorAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
