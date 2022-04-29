import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountTaskStatus } from '@app/account/shared/task-status/enums';

@Component({
  selector: 'tasks-details-meta',
  templateUrl: 'meta.html',
  styleUrls: ['meta.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksDetailsMetaComponent {
  public taskStatus: AccountTaskStatus;

  constructor() {
    this.taskStatus = AccountTaskStatus.OPEN;
  }
}
