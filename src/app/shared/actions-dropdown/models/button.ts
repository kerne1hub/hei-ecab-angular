import { ActionsDropdownButtonTypeEnum } from '../enums';

export class ActionsDropdownButton {
  public title: string;
  public icon?: string;
  public isStatusIcon?: boolean;
  public hidden?: boolean;
  public disabled?: boolean;
  public reasonForDisabling?: string;
  public tooltip?: string;
  public handler: (id?: number) => void;
  public dataTestID?: string;
  public type?: ActionsDropdownButtonTypeEnum;
  public withSeparator?: boolean;

  constructor(model: Partial<ActionsDropdownButton> = {
    handler: () => {}
  }) {
    Object.assign(this, model);
  }
}
