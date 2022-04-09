import { ActionsDropdownButton } from './models';
import { ActionsDropdownButtonTypeEnum } from './enums';
import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { DropdownContentFixedDirective } from '@shared/dropdown';

@Component({
  selector: 'actions-dropdown',
  templateUrl: 'actions-dropdown.html',
  styleUrls: ['actions-dropdown.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsDropdownComponent {
  @ViewChild(DropdownContentFixedDirective) dropdown: DropdownContentFixedDirective;

  @Input() entityID: number;
  @Input() icon: string;
  @Input() buttons: Array<ActionsDropdownButton>;
  @Input() closeByClick: boolean;
  @Input() position: 'left' | 'right';

  public actionsDropdownButtonTypeEnum: typeof ActionsDropdownButtonTypeEnum;

  constructor() {
    this.icon = 'more';
    this.buttons = [];
    this.closeByClick = true;
    this.position = 'right';
    this.actionsDropdownButtonTypeEnum = ActionsDropdownButtonTypeEnum;
  }
}
