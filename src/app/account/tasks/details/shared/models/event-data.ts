import { AccountTasksDetailsEvent } from '../enums';
import { DateTime } from 'luxon';

export class AccountTasksDetailsEventData {
  public eventType: AccountTasksDetailsEvent;
  public icon: string;
  public initiator?: string;
  public initiatorUsername: string;
  public label?: string;
  public assign?: string;
  public assignUsername: string;
  public unassign?: string;
  public unassignUsername?: string;
  public date: DateTime;
  public comment?: string;
  public expireDate?: DateTime;

  constructor(model: Partial<AccountTasksDetailsEventData>) {
    Object.assign(this, model);
  }
}
