import { Injectable } from '@angular/core';
import { Actions } from 'ngrx-forms';
import { ComponentStore } from '@ngrx/component-store';
import { FilterSearchComponentState } from './filter-search.state';
import { Subject } from 'rxjs';

@Injectable()
export class FilterSearchComponentFacade {
  public controlStateActionTriggered: Subject<Actions<any>> = new Subject<Actions<any>>();

  constructor(
    private readonly componentStore: ComponentStore<FilterSearchComponentState>
  ) {
    this.resetState();
  }

  public resetState(): void {
    this.componentStore.setState(new FilterSearchComponentState());
  }

  public setControlID(controlID: string): void {
    this.updateStateControlID(controlID);
  }

  private updateStateControlID(controlID: string): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        controlID
      })
    )();
  }
}
