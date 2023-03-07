import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPupularStocksComponent } from './card-pupular-stocks.component';

describe('CardPupularStocksComponent', () => {
  let component: CardPupularStocksComponent;
  let fixture: ComponentFixture<CardPupularStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPupularStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPupularStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
