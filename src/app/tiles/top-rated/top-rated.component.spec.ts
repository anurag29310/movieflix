import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopRatedComponent } from './top-rated.component';


describe('Top10Component', () => {
  let component: TopRatedComponent;
  let fixture: ComponentFixture<TopRatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
