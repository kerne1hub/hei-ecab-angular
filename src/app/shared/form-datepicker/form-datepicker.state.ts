import { DatepickerDropdownPositionY } from '@angular/material/datepicker';

export class FormDatepickerComponentState {
  public isOpened: boolean;
  public positionY: DatepickerDropdownPositionY;

  constructor() {
    this.isOpened = false;
    this.positionY = 'below';
  }
}
