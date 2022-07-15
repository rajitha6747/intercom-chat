import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercomFooterComponent } from './intercom-footer.component';

describe('IntercomFooterComponent', () => {
  let component: IntercomFooterComponent;
  let fixture: ComponentFixture<IntercomFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntercomFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercomFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
