import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicSignUpFinishPageComponent } from './finish.component';

describe('PublicSignUpFinishPageComponent', () => {
  let component: PublicSignUpFinishPageComponent;
  let fixture: ComponentFixture<PublicSignUpFinishPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicSignUpFinishPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSignUpFinishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
