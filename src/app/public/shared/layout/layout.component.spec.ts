import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicLayoutPageComponent } from './layout.component';

describe('PublicLayoutPageComponent', () => {
  let component: PublicLayoutPageComponent;
  let fixture: ComponentFixture<PublicLayoutPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicLayoutPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
