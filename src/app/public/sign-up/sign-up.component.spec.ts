import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicSignUpPageComponent } from './sign-up.component';

describe('PublicSignUpPageComponent', () => {
  let component: PublicSignUpPageComponent;
  let fixture: ComponentFixture<PublicSignUpPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicSignUpPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
