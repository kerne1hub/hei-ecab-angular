import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountTasksDetailsEventData } from '../../models';
import { AccountTasksDetailsEvent } from '../../enums';
import { DateTime } from 'luxon';

@Component({
  selector: 'tasks-details-timeline',
  templateUrl: 'timeline.html',
  styleUrls: ['timeline.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksDetailsTimelineComponent {
  public get timelineAddLabel(): AccountTasksDetailsEventData {
    return new AccountTasksDetailsEventData({
      eventType: AccountTasksDetailsEvent.ADD_LABEL,
      icon: 'label',
      initiator: 'Александр Мельник',
      initiatorUsername: '@amelnik',
      label: 'Назначено',
      date: DateTime.now().minus({ hour: 6, minute: 22 })
    });
  }

  public get timelineChangeMilestone(): AccountTasksDetailsEventData {
    return new AccountTasksDetailsEventData({
      eventType: AccountTasksDetailsEvent.CHANGE_MILESTONE,
      icon: 'clock',
      initiator: 'Александр Мельник',
      initiatorUsername: '@amelnik',
      expireDate: DateTime.now().plus({ week: 2 }),
      date: DateTime.now().minus({ hour: 6, minute: 21 })
    });
  }

  public get timelineReassign(): AccountTasksDetailsEventData {
    return new AccountTasksDetailsEventData({
      eventType: AccountTasksDetailsEvent.REASSIGN,
      icon: 'user-outline',
      initiator: 'Александр Мельник',
      initiatorUsername: '@amelnik',
      assign: 'Алексей Нестеров',
      assignUsername: '@anekrasov',
      unassign: 'Александр Мельник',
      unassignUsername: '@amelnik',
      date: DateTime.now().minus({ hour: 5, minute: 44 })
    });
  }

  public get timelineComment(): AccountTasksDetailsEventData {
    return new AccountTasksDetailsEventData({
      eventType: AccountTasksDetailsEvent.COMMENT,
      initiator: 'Александр Мельник',
      initiatorUsername: '@amelnik',
      comment: 'Вариант задания брать согласно своему номеру (см. описание)',
      date: DateTime.now().minus({ hour: 4, minute: 21 })
    });
  }
}
