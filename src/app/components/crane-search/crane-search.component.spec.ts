import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraneSearchComponent } from './crane-search.component';

describe('CraneSearchComponent', () => {
  let component: CraneSearchComponent;
  let fixture: ComponentFixture<CraneSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraneSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraneSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
