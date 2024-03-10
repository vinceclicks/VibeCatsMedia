import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormSubmittedComponent } from './contact-form-submitted.component';

describe('ContactFormSubmittedComponent', () => {
  let component: ContactFormSubmittedComponent;
  let fixture: ComponentFixture<ContactFormSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormSubmittedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactFormSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
