import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMovieFlexComponent } from './home-movie-flex.component';

describe('HomeMovieFlexComponent', () => {
  let component: HomeMovieFlexComponent;
  let fixture: ComponentFixture<HomeMovieFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMovieFlexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMovieFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
