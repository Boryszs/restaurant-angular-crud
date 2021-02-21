import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKlientComponent } from './add-klient.component';

describe('AddKlientComponent', () => {
  let component: AddKlientComponent;
  let fixture: ComponentFixture<AddKlientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKlientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKlientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
