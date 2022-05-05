import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccountTasksDetailsPageFacade } from '../../../details.facade';
import { Observable } from 'rxjs';
import { SidebarState } from '@shared/sidebar';
import { Actions, FormGroupState } from 'ngrx-forms';
import { AccountTasksDetailsActionForm } from '../../forms';

@Component({
  selector: 'tasks-details-content-sidebar',
  templateUrl: 'content-sidebar.html',
  styleUrls: ['content-sidebar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksDetailsContentSidebarComponent {
  public formState$: Observable<FormGroupState<AccountTasksDetailsActionForm>>;
  public sidebarState$: Observable<SidebarState>;

  constructor(
    private readonly facade: AccountTasksDetailsPageFacade
  ) {
    this.sidebarState$ = this.facade.sidebarState$;
    this.formState$ = this.facade.actionFormState$;
  }

  public toggleSidebar(): void {
    this.facade.toggleSidebar();
  }

  public formActionTriggered(action: Actions<any>): void {
    this.facade.handleActionFormStateAction(action);
  }
}
