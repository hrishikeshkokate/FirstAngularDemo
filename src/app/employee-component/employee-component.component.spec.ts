import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponentComponent } from './employee-component.component';

describe('EmployeeComponentComponent', () => {
  let component: EmployeeComponentComponent;
  let fixture: ComponentFixture<EmployeeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
