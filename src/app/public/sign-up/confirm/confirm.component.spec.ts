import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicSignUpConfirmPageComponent } from './confirm.component';

describe('PublicSignUpConfirmPageComponent', () => {
  let component: PublicSignUpConfirmPageComponent;
  let fixture: ComponentFixture<PublicSignUpConfirmPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicSignUpConfirmPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSignUpConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
