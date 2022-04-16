import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { FormControlState, NGRX_FORM_VIEW_ADAPTER, NgrxDefaultViewAdapter, Actions, SetValueAction } from 'ngrx-forms';
import { FilterSearchComponentFacade } from './filter-search.facade';
import { Subject } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'filter-search',
  templateUrl: 'filter-search.html',
  styleUrls: ['filter-search.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NGRX_FORM_VIEW_ADAPTER,
      useExisting: forwardRef(() => NgrxDefaultViewAdapter),
      multi: true
    },
    FilterSearchComponentFacade,
    ComponentStore
  ]
})
export class FilterSearchComponent implements OnInit, OnDestroy {
  @Input() controlState: FormControlState<string>;
  @Input() placeholder: string;

  @Output() controlStateActionTriggered: Subject<Actions<any>>;

  constructor(
    private readonly facade: FilterSearchComponentFacade
  ) {
    this.controlStateActionTriggered = this.facade.controlStateActionTriggered;
  }

  public ngOnInit(): void {
    this.facade.setControlID(this.controlState.id);
  }

  public ngOnDestroy(): void {
    this.facade.resetState();
  }

  public clear(): void {
    this.controlStateActionTriggered.next(
      new SetValueAction(this.controlState.id, null)
    );
  }
}
