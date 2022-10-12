import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraneAddComponent } from './crane-add.component';

describe('CraneAddComponent', () => {
  let component: CraneAddComponent;
  let fixture: ComponentFixture<CraneAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraneAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
