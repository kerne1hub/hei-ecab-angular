import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicLogInPageState } from './log-in.state';
import { ComponentStore } from '@ngrx/component-store';
import { PublicLogInPageForm } from './shared/forms';
import {
  Actions, clearAsyncError,
  disable,
  enable,
  formGroupReducer,
  FormGroupState,
  markAsSubmitted, MarkAsSubmittedAction, SetValueAction,
  updateGroup,
  validate
} from 'ngrx-forms';
import { email, required } from 'ngrx-forms/validation';
import { PublicLogInServerErrorCode } from './shared/enums';

@Injectable()
export class PublicLogInPageFacade {
  public get isSubmitting$(): Observable<boolean> {
    return this.componentStore.select((state) => state.isSubmitting);
  }

  public get formState$(): Observable<FormGroupState<PublicLogInPageForm>> {
    return this.componentStore.select((state) => state.formState);
  }

  public get isLoginFailed$(): Observable<boolean> {
    return this.componentStore.select((state) => state.isLoginFailed);
  }

  private tryLogInEffect$: () => Observable<void>;

  constructor(
    private readonly componentStore: ComponentStore<PublicLogInPageState>,
  ) {
    this.resetState();
    this.validateForm();
  }

  public handleFormStateAction(action: Actions<any>): void {
    this.updateFormState(action);

    if (action instanceof SetValueAction) {
      this.clearFormStateErrors();
    }

    if (action instanceof MarkAsSubmittedAction) {
      this.markFormStateAsSubmitted();
    }

    this.validateForm();
  }

  public resetState(): void {
    this.componentStore.setState(new PublicLogInPageState());
  }

  private validateForm(): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        formState: updateGroup<PublicLogInPageForm>(
          state.formState,
          {
            email: validate<string>(required, email),
            password: validate<string>(required)
          }
        )
      })
    )();
  }

  private clearFormStateErrors(): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        isLoginFailed: false,
        formState: updateGroup<PublicLogInPageForm>(
          state.formState,
          {
            email: clearAsyncError(PublicLogInServerErrorCode.INVALID_CREDENTIALS),
            password: clearAsyncError(PublicLogInServerErrorCode.INVALID_CREDENTIALS)
          }
        )
      })
    )();
  }

  private updateIsSubmitting(value: boolean): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        isSubmitting: value
      })
    )();
  }

  private updateFormState(action: Actions<any>): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        formState: formGroupReducer(state.formState, action)
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

  private toggleDisablingForm(value: boolean): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        formState: (value)
          ? disable(state.formState)
          : enable(state.formState)
      })
    )();
  }
}
