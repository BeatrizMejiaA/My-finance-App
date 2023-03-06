import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPortafolioComponent } from './set-portafolio.component';

describe('SetPortafolioComponent', () => {
  let component: SetPortafolioComponent;
  let fixture: ComponentFixture<SetPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPortafolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
