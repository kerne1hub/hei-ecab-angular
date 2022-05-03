import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccountTasksDetailsPageFacade } from '../../../details.facade';
import { Observable } from 'rxjs';
import { SidebarState } from '@shared/sidebar';

@Component({
  selector: 'tasks-details-content-sidebar',
  templateUrl: 'content-sidebar.html',
  styleUrls: ['content-sidebar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksDetailsContentSidebarComponent {
  public sidebarState$: Observable<SidebarState>;

  constructor(
    private readonly facade: AccountTasksDetailsPageFacade
  ) {
    this.sidebarState$ = this.facade.sidebarState$;
  }

  public toggleSidebar(): void {
    this.facade.toggleSidebar();
  }
}
