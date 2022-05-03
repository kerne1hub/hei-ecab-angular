import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AccountTasksDetailsEventData } from '../../models';
import { DateTime, DurationLikeObject } from 'luxon';
import { AccountTasksDetailsEvent } from '../../enums';

@Component({
  selector: 'tasks-details-timeline-entry',
  templateUrl: 'timeline-entry.html',
  styleUrls: ['timeline-entry.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksDetailsTimelineEntryComponent {
  @Input() data: AccountTasksDetailsEventData;

  public get isComment(): boolean {
    return this.data.eventType === this.eventTypeEnum.COMMENT;
  }

  public get timestamp(): string {
    const currentDate = DateTime.now();

    const dateDiff = currentDate.diff(this.data.date, this.dateKeys_).toObject();

    for (const key of this.dateKeys_) {
      if (dateDiff[key] !== 0) {
        return `${dateDiff[key]} ${key} назад`;
      }
    }
  }

  public readonly eventTypeEnum: typeof AccountTasksDetailsEvent;

  private readonly dateKeys_: Array<keyof DurationLikeObject>;

  constructor() {
    this.dateKeys_ = ['years', 'months', 'weeks', 'days', 'hours', 'minutes'];
    this.eventTypeEnum = AccountTasksDetailsEvent;
  }
}
