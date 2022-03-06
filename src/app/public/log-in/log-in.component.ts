import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { PublicLogInPageFacade } from './log-in.facade';
import { Observable } from 'rxjs';
import { Actions, FormGroupState } from 'ngrx-forms';
import { ComponentStore } from '@ngrx/component-store';
import { PublicLogInPageForm } from '@app/public/log-in/shared/forms';

@Component({
  selector: 'public-log-in-page',
  templateUrl: 'log-in.html',
  styleUrls: ['log-in.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PublicLogInPageFacade,
    ComponentStore
  ]
})
export class PublicLogInPageComponent implements OnDestroy {
  public isSubmitting$: Observable<boolean>;
  public formState$: Observable<FormGroupState<PublicLogInPageForm>>;
  public isLoginFailed$: Observable<boolean>;

  constructor(
    private facade: PublicLogInPageFacade
  ) {
    this.isSubmitting$ = this.facade.isSubmitting$;
    this.formState$ = this.facade.formState$;
    this.isLoginFailed$ = this.facade.isLoginFailed$;
  }

  public ngOnDestroy(): void {
    this.facade.resetState();
  }

  public formSubmitted(): void {
    // TODO
  }

  public formActionTriggered(action: Actions<any>): void {
    this.facade.handleFormStateAction(action);
  }
}
