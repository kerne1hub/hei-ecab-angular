import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActionsDropdownButton, ActionsDropdownButtonTypeEnum } from '@shared/actions-dropdown';
import { configuration } from '@configurations';
import { NgxTippyProps } from 'ngx-tippy-wrapper/lib/interfaces/ngx-tippy.interfaces';
import { NgxTippyService } from 'ngx-tippy-wrapper';

@Component({
  selector: 'actions-button-dropdown',
  templateUrl: 'actions-button-dropdown.html',
  styleUrls: ['actions-button-dropdown.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsButtonDropdownComponent {
  @Input() entityID: number;
  @Input() closeByClick: boolean;
  @Input() position: 'left' | 'right';
  @Input() placeholder: string;
  @Input() isPrimary: boolean;
  @Input() isDisabled: boolean;
  @Input() isLoading: boolean;
  @Input() icon: string;

  @Input()
  public set buttons(buttons: Array<ActionsDropdownButton>) {
    this._buttons = buttons;
    this.refreshTooltips();
  }

  public get buttons(): Array<ActionsDropdownButton> {
    return this._buttons;
  }

  public get tooltipProps(): NgxTippyProps {
    return configuration.tooltips.actionsButtonDropdown;
  }

  public actionsDropdownButtonTypeEnum: typeof ActionsDropdownButtonTypeEnum;

  private _buttons: Array<ActionsDropdownButton>;

  constructor(
    private tippyService: NgxTippyService
  ) {
    this._buttons = [];
    this.closeByClick = true;
    this.position = 'right';
    this.placeholder = '';
    this.isPrimary = false;
    this.isDisabled = false;
    this.actionsDropdownButtonTypeEnum = ActionsDropdownButtonTypeEnum;
  }

  public handleClick(button: ActionsDropdownButton): void {
    if (!button.disabled) {
      button.handler(this.entityID);
    }
  }

  private refreshTooltips(): void {
    this._buttons.forEach((button) => {
      const instance = this.tippyService.getInstance(button.title);

      if (!instance) {
        return;
      }

      if (button.disabled) {
        instance.enable();
      } else {
        instance.disable();
      }
    });
  }
}
