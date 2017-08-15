import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRotatorComponent } from './image-rotator.component';

describe('ImageRotatorComponent', () => {
  let component: ImageRotatorComponent;
  let fixture: ComponentFixture<ImageRotatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRotatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRotatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
