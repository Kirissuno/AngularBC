import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasElemComponent } from './tablas-elem.component';

describe('TablasElemComponent', () => {
  let component: TablasElemComponent;
  let fixture: ComponentFixture<TablasElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
