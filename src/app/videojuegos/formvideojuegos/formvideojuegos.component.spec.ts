import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvideojuegosComponent } from './formvideojuegos.component';

describe('FormvideojuegosComponent', () => {
  let component: FormvideojuegosComponent;
  let fixture: ComponentFixture<FormvideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormvideojuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
