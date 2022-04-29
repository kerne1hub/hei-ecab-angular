import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/store';

@Injectable()
export class AccountTasksDetailsPageFacade {

  constructor(
    private store: Store<AppState>
  ) { }
}
