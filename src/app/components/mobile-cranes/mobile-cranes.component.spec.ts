import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCranesComponent } from './mobile-cranes.component';

describe('MobileCranesComponent', () => {
  let component: MobileCranesComponent;
  let fixture: ComponentFixture<MobileCranesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCranesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCranesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
