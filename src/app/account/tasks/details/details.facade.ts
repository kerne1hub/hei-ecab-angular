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
import { AccountTasksDetailsCommentForm } from './shared/forms';
import { AccountActions } from '@app/account/shared/store/actions';
import { SidebarState } from '@shared/sidebar';
import { AccountSelectors } from '@app/account/shared/store/selectors';

@Injectable()
export class AccountTasksDetailsPageFacade {
  public get isSendingRequest$(): Observable<boolean> {
    return this.componentStore.select((state) => state.isSendingRequest);
  }

  public get formState$(): Observable<FormGroupState<AccountTasksDetailsCommentForm>> {
    return this.componentStore.select((state) => state.formState);
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

  public handleFormStateAction(action: Actions<any>): void {
    this.updateFormState(action);

    if (action instanceof SetValueAction) {
      this.clearStateErrors();
    }

    if (action instanceof MarkAsSubmittedAction) {
      this.markFormStateAsSubmitted();
    }
  }

  private updateFormState(action: Actions<any>): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        formState: formGroupReducer(state.formState, action)
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

  private markFormStateAsSubmitted(): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        formState: markAsSubmitted(state.formState)
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

  private toggleDisablingForm(value: boolean): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        formState: value
          ? disable(state.formState)
          : enable(state.formState)
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
