import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountSchedulePageComponent } from './schedule.component';

describe('AccountSchedulePageComponent', () => {
  let component: AccountSchedulePageComponent;
  let fixture: ComponentFixture<AccountSchedulePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccountSchedulePageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
