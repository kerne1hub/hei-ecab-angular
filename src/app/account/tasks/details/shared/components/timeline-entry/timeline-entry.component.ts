import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AccountTasksDetailsEventData } from '../../models';

@Component({
  selector: 'tasks-details-timeline-entry',
  templateUrl: 'timeline-entry.html',
  styleUrls: ['timeline-entry.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksDetailsTimelineEntryComponent {
  @Input() data: AccountTasksDetailsEventData;
}
