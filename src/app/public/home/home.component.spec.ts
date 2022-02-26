import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicHomePageComponent } from './home.component';

describe('PublicHomePageComponent', () => {
  let component: PublicHomePageComponent;
  let fixture: ComponentFixture<PublicHomePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicHomePageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
