import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccountHeaderComponentFacade } from './header.facade';
import { ActionsDropdownButton } from '@shared/actions-dropdown';

@Component({
  selector: 'account-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    AccountHeaderComponentFacade
  ]
})
export class AccountHeaderComponent {
  public profileActionButtons: Array<ActionsDropdownButton>;

  constructor(
    private facade: AccountHeaderComponentFacade
  ) {
    this.profileActionButtons = this.facade.profileActionButtons;
  }
}
