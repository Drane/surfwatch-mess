import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfwatchComponent } from './surfwatch.component';

describe('SurfwatchComponent', () => {
  let component: SurfwatchComponent;
  let fixture: ComponentFixture<SurfwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
