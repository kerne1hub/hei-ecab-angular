import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountTasksDetailsPageComponent } from './details.component';

describe('AccountTasksDetailsPageComponent', () => {
  let component: AccountTasksDetailsPageComponent;
  let fixture: ComponentFixture<AccountTasksDetailsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccountTasksDetailsPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTasksDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
