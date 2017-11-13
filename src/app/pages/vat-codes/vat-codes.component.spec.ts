import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatCodesComponent } from './vat-codes.component';

describe('VatCodesComponent', () => {
  let component: VatCodesComponent;
  let fixture: ComponentFixture<VatCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
