import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlienciEditComponent } from './klienci-edit.component';

describe('KlienciEditComponent', () => {
  let component: KlienciEditComponent;
  let fixture: ComponentFixture<KlienciEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlienciEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlienciEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
