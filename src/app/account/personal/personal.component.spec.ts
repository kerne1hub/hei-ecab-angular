import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountPersonalPageComponent } from './personal.component';

describe('AccountPersonalPageComponent', () => {
  let component: AccountPersonalPageComponent;
  let fixture: ComponentFixture<AccountPersonalPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccountPersonalPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPersonalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
