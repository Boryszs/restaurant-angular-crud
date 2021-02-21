import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracownicyEditComponent } from './pracownicy-edit.component';

describe('PracownicyEditComponent', () => {
  let component: PracownicyEditComponent;
  let fixture: ComponentFixture<PracownicyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracownicyEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracownicyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
