import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountUserRole } from '@app/account/shared/user-role/enums';

@Component({
  selector: 'personal-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountPersonalHeaderComponent {
  public get userRole(): AccountUserRole {
    return AccountUserRole.STUDENT;
  }
}
