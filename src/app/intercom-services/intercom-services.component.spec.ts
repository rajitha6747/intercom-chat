import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercomServicesComponent } from './intercom-services.component';

describe('IntercomServicesComponent', () => {
  let component: IntercomServicesComponent;
  let fixture: ComponentFixture<IntercomServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntercomServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercomServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
