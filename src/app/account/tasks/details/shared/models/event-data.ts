import { AccountTasksDetailsEvent } from '../enums';

export class AccountTasksDetailsEventData {
  public eventType: AccountTasksDetailsEvent;
  public initiator?: string;
  public label?: string;
  public member?: string;
  public date: string;
  public comment?: string;

  constructor(model: Partial<AccountTasksDetailsEventData>) {
    Object.assign(this, model);
  }
}
