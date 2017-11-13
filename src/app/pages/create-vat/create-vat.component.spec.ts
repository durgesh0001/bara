import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVatComponent } from './create-vat.component';

describe('CreateVatComponent', () => {
  let component: CreateVatComponent;
  let fixture: ComponentFixture<CreateVatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
