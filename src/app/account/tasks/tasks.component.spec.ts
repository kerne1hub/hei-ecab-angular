import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountTasksPageComponent } from './tasks.component';

describe('AccountTasksPageComponent', () => {
  let component: AccountTasksPageComponent;
  let fixture: ComponentFixture<AccountTasksPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccountTasksPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
