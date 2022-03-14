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
import { PublicSignUpConfirmPageForm } from './shared/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ComponentStore } from '@ngrx/component-store';
import { PublicSignUpConfirmPageState } from './confirm.state';
import { required } from 'ngrx-forms/validation';

@Injectable()
export class PublicSignUpConfirmPageFacade {

  public get isSubmitting$(): Observable<boolean> {
    return this.componentStore.select((state) => state.isSubmitting);
  }

  public get formState$(): Observable<FormGroupState<PublicSignUpConfirmPageForm>> {
    return this.componentStore.select((state) => state.formState);
  }

  public get errorResponse$(): Observable<HttpErrorResponse> {
    return this.componentStore.select((state) => state.errorResponse);
  }

  constructor(
    private readonly componentStore: ComponentStore<PublicSignUpConfirmPageState>
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
    this.componentStore.setState(new PublicSignUpConfirmPageState());
  }

  private validateForm(): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        formState: updateGroup<PublicSignUpConfirmPageForm>(
          state.formState,
          {
            firstName: validate<string>(required),
            lastName: validate<string>(required),
            patronymic: validate<string>(required),
            dayOfBirth: validate<number>(required),
            monthOfBirth: validate<number>(required),
            yearOfBirth: validate<number>(required),
            seriesOfDocument: validate<number>(required),
            numberOfDocument: validate<number>(required),
            role: validate<number>(required)
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
