import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryNavigationComponent } from './primary-navigation.component';

describe('PrimaryNavigationComponent', () => {
  let component: PrimaryNavigationComponent;
  let fixture: ComponentFixture<PrimaryNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
