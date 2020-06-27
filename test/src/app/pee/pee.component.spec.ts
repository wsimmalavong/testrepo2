import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeeComponent } from './pee.component';

describe('PeeComponent', () => {
  let component: PeeComponent;
  let fixture: ComponentFixture<PeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
