import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AccountTasksDetailsActionForm, AccountTasksDetailsCommentForm } from './shared/forms';

export class AccountTasksDetailsPageState {
  public isSendingRequest: boolean;
  public actionFormState: FormGroupState<AccountTasksDetailsActionForm>;
  public commentFormState: FormGroupState<AccountTasksDetailsCommentForm>;
  public errorResponse: HttpErrorResponse;

  constructor() {
    this.isSendingRequest = false;
    this.actionFormState = createFormGroupState<AccountTasksDetailsActionForm>('AccountTasksDetailsActionForm', {
      deadline: undefined,
      isNotificationsEnabled: false
    });
    this.commentFormState = createFormGroupState<AccountTasksDetailsCommentForm>('AccountTasksDetailsCommentForm', {
      content: ''
    });
    this.errorResponse = null;
  }
}
