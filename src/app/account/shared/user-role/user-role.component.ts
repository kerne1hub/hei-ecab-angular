import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AccountUserRole } from './enums';

@Component({
  selector: 'account-user-role',
  templateUrl: 'user-role.html',
  styleUrls: ['user-role.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountUserRoleComponent {
  @Input() role: AccountUserRole;

  public get roleTranslationKey(): string {
    const key = Object.keys(AccountUserRole).find((status) => AccountUserRole[status] === this.role);

    return `ACCOUNT.SHARED.USER_ROLE.TEXT_${key}`;
  }

  public statusEnum: typeof AccountUserRole;

  constructor() {
    this.statusEnum = AccountUserRole;
  }
}
