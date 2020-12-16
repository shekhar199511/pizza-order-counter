import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDetailModalComponent } from './pizza-detail-modal.component';

describe('PizzaDetailModalComponent', () => {
  let component: PizzaDetailModalComponent;
  let fixture: ComponentFixture<PizzaDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
