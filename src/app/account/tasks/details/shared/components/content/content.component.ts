import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tasks-details-content',
  templateUrl: 'content.html',
  styleUrls: ['content.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksDetailsContentComponent { }
