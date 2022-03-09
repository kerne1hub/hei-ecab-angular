import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Actions,
  disable,
  enable,
  formGroupReducer,
  FormGroupState,
  markAsSubmitted,
  MarkAsSubmittedAction,
  SetValueAction,
  updateGroup,
  validate
} from 'ngrx-forms';
import { ComponentStore } from '@ngrx/component-store';
import { PublicSignUpPageState } from './sign-up.state';
import { PublicSignUpPageForm } from './shared/forms';
import { email, required } from 'ngrx-forms/validation';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PublicSignUpPageFacade {
  public get isSubmitting$(): Observable<boolean> {
    return this.componentStore.select((state) => state.isSubmitting);
  }

  public get formState$(): Observable<FormGroupState<PublicSignUpPageForm>> {
    return this.componentStore.select((state) => state.formState);
  }

  public get errorResponse$(): Observable<HttpErrorResponse> {
    return this.componentStore.select((state) => state.errorResponse);
  }

  constructor(
    private readonly componentStore: ComponentStore<PublicSignUpPageState>
  ) {
    this.resetState();
    this.validateForm();
  }

  public handleFormStateAction(action: Actions<any>): void {
    this.updateFormState(action);

    if (action instanceof SetValueAction) {
      this.clearStateErrors();
    }

    if (action instanceof MarkAsSubmittedAction) {
      this.markFormStateAsSubmitted();
    }

    this.validateForm();
  }

  public resetState(): void {
    this.componentStore.setState(new PublicSignUpPageState());
  }

  private validateForm(): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        formState: updateGroup<PublicSignUpPageForm>(
          state.formState,
          {
            firstName: validate<string>(required),
            lastName: validate<string>(required),
            email: validate<string>(required, email)
          }
        )
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
