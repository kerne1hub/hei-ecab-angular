import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tasks-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksHeaderComponent { }
