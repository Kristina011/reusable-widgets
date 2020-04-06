import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EelementsHomeComponent } from './eelements-home.component';

describe('EelementsHomeComponent', () => {
  let component: EelementsHomeComponent;
  let fixture: ComponentFixture<EelementsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EelementsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EelementsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
