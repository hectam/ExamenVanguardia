import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccontsComponent } from './acconts.component';

describe('AccontsComponent', () => {
  let component: AccontsComponent;
  let fixture: ComponentFixture<AccontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccontsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
