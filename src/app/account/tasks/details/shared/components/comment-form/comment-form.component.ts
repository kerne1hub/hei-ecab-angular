import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, FormGroupState } from 'ngrx-forms';
import { AccountTasksDetailsCommentForm } from '../../forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AccountTasksDetailsPageFacade } from '../../../details.facade';

@Component({
  selector: 'tasks-details-comment-form',
  templateUrl: 'comment-form.html',
  styleUrls: ['comment-form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksDetailsCommentFormComponent {
  public isSendingRequest$: Observable<boolean>;
  public formState$: Observable<FormGroupState<AccountTasksDetailsCommentForm>>;
  public errorResponse$: Observable<HttpErrorResponse>;

  constructor(
    private facade: AccountTasksDetailsPageFacade
  ) {
    this.isSendingRequest$ = this.facade.isSendingRequest$;
    this.formState$ = this.facade.formState$;
    this.errorResponse$ = this.facade.errorResponse$;
  }

  public formActionTriggered(action: Actions<any>): void {
    this.facade.handleFormStateAction(action);
  }

  public formSubmitted(): void {
    // TODO
  }
}
