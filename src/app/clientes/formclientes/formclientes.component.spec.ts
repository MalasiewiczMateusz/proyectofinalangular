import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormclientesComponent } from './formclientes.component';

describe('FormclientesComponent', () => {
  let component: FormclientesComponent;
  let fixture: ComponentFixture<FormclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
