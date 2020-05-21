import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSocketConComponent } from './basic-socket-con.component';

describe('BasicSocketConComponent', () => {
  let component: BasicSocketConComponent;
  let fixture: ComponentFixture<BasicSocketConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSocketConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSocketConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
