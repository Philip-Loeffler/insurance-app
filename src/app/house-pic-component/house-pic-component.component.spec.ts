import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePicComponentComponent } from './house-pic-component.component';

describe('HousePicComponentComponent', () => {
  let component: HousePicComponentComponent;
  let fixture: ComponentFixture<HousePicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousePicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousePicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
