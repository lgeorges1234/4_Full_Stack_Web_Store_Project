import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartConfirmationComponent } from './cart-confirmation.component';

xdescribe('CartConfirmationComponent', () => {
  let component: CartConfirmationComponent;
  let fixture: ComponentFixture<CartConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
