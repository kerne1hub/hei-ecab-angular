import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/store';
import { ComponentStore } from '@ngrx/component-store';
import { AccountTasksDetailsPageState } from './details.state';
import {
  Actions,
  disable,
  enable,
  formGroupReducer, FormGroupState,
  markAsSubmitted,
  MarkAsSubmittedAction,
  SetValueAction
} from 'ngrx-forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountTasksDetailsActionForm, AccountTasksDetailsCommentForm } from './shared/forms';
import { AccountActions } from '@app/account/shared/store/actions';
import { SidebarState } from '@shared/sidebar';
import { AccountSelectors } from '@app/account/shared/store/selectors';

@Injectable()
export class AccountTasksDetailsPageFacade {
  public get isSendingRequest$(): Observable<boolean> {
    return this.componentStore.select((state) => state.isSendingRequest);
  }

  public get actionFormState$(): Observable<FormGroupState<AccountTasksDetailsActionForm>> {
    return this.componentStore.select((state) => state.actionFormState);
  }

  public get commentFormState$(): Observable<FormGroupState<AccountTasksDetailsCommentForm>> {
    return this.componentStore.select((state) => state.commentFormState);
  }

  public get errorResponse$(): Observable<HttpErrorResponse> {
    return this.componentStore.select((state) => state.errorResponse);
  }

  public get sidebarState$(): Observable<SidebarState> {
    return this.store.select(AccountSelectors.contentSidebarState);
  }

  constructor(
    private componentStore: ComponentStore<AccountTasksDetailsPageState>,
    private store: Store<AppState>
  ) {
    this.resetState();
  }

  public resetState(): void {
    this.store.dispatch(AccountActions.resetState());
    this.componentStore.setState(new AccountTasksDetailsPageState());
  }

  public initPage(): void {
    this.store.dispatch(AccountActions.setContentSidebarState({ sidebarState: 'expanded' }));
  }

  public toggleSidebar(): void {
    this.store.dispatch(AccountActions.toggleContentSidebar());
  }

  public handleCommentFormStateAction(action: Actions<any>): void {
    this.updateCommentFormState(action);

    if (action instanceof SetValueAction) {
      this.clearStateErrors();
    }

    if (action instanceof MarkAsSubmittedAction) {
      this.markCommentFormStateAsSubmitted();
    }
  }

  public handleActionFormStateAction(action: Actions<any>): void {
    this.updateActionFormState(action);

    if (action instanceof SetValueAction) {
      this.clearStateErrors();
    }

    if (action instanceof MarkAsSubmittedAction) {
      this.markActionFormStateAsSubmitted();
    }
  }

  private updateCommentFormState(action: Actions<any>): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        commentFormState: formGroupReducer(state.commentFormState, action)
      })
    )();
  }

  private updateActionFormState(action: Actions<any>): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        actionFormState: formGroupReducer(state.actionFormState, action)
      })
    )();
  }

  private clearStateErrors(): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        errorResponse: null
      })
    )();
  }

  private markCommentFormStateAsSubmitted(): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        commentFormState: markAsSubmitted(state.commentFormState)
      })
    )();
  }

  private markActionFormStateAsSubmitted(): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        actionFormState: markAsSubmitted(state.actionFormState)
      })
    )();
  }

  private updateIsSendingRequest(value: boolean): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        isSendingRequest: value
      })
    )();
  }

  private toggleDisablingCommentForm(value: boolean): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        commentFormState: value
          ? disable(state.commentFormState)
          : enable(state.commentFormState)
      })
    )();
  }

  private toggleDisablingActionForm(value: boolean): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        actionFormState: value
          ? disable(state.actionFormState)
          : enable(state.actionFormState)
      })
    )();
  }

  private updateStateDueToServerError(response: HttpErrorResponse): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        isSendingRequest: false,
        errorResponse: response
      })
    )();
  }
}
