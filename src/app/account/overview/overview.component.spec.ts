import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountOverviewPageComponent } from './overview.component';

describe('AccountOverviewPageComponent', () => {
  let component: AccountOverviewPageComponent;
  let fixture: ComponentFixture<AccountOverviewPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccountOverviewPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
