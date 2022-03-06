import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicLogInPageComponent } from './log-in.component';

describe('PublicLogInComponent', () => {
  let component: PublicLogInPageComponent;
  let fixture: ComponentFixture<PublicLogInPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicLogInPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLogInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
