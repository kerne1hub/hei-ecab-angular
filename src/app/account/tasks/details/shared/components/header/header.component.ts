import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tasks-details-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksDetailsHeaderComponent { }
