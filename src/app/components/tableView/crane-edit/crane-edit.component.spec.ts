import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraneEditComponent } from './crane-edit.component';

describe('CraneEditComponent', () => {
  let component: CraneEditComponent;
  let fixture: ComponentFixture<CraneEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraneEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
