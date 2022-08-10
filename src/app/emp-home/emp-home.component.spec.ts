import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpHomeComponent } from './emp-home.component';

describe('EmpHomeComponent', () => {
  let component: EmpHomeComponent;
  let fixture: ComponentFixture<EmpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
