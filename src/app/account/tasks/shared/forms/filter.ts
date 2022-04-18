import { AccountTaskSort } from '@app/account/shared/task-sort/enums';

export class AccountTasksFilterForm {
  public search?: string;
  public sortBy?: AccountTaskSort;
}
