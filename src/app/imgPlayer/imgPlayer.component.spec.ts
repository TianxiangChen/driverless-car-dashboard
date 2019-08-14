import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPlayerComponent } from './imgPlayer.component';

describe('ImgPlayerComponent', () => {
  let component: ImgPlayerComponent;
  let fixture: ComponentFixture<ImgPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
