import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AccountTasksDetailsCommentForm } from './shared/forms';

export class AccountTasksDetailsPageState {
  public isSendingRequest: boolean;
  public formState: FormGroupState<any>;
  public errorResponse: HttpErrorResponse;

  constructor() {
    this.isSendingRequest = false;
    this.formState = createFormGroupState<AccountTasksDetailsCommentForm>('AccountTasksDetailsCommentForm', {
      content: ''
    });
    this.errorResponse = null;
  }
}
