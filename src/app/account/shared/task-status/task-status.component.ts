import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AccountTaskStatus } from './enums';
import { upperFirst } from 'lodash';

@Component({
  selector: 'account-task-status',
  templateUrl: 'task-status.html',
  styleUrls: ['task-status.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTaskStatusComponent {
  @Input() status: AccountTaskStatus;

  public get statusText(): string {
    return upperFirst(this.status);
  }
}
