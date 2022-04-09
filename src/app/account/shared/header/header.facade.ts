import { Injectable } from '@angular/core';
import { ActionsDropdownButton, ActionsDropdownButtonTypeEnum } from '@shared/actions-dropdown';

@Injectable()
export class AccountHeaderComponentFacade {
  public get profileActionButtons(): Array<ActionsDropdownButton> {
    return [
      new ActionsDropdownButton({
        title: 'Алексей Нестеров',
        disabled: true,
        type: ActionsDropdownButtonTypeEnum.INFO,
        reasonForDisabling: '@anesterov',
        withSeparator: true
      }),
      new ActionsDropdownButton({
        title: 'Редактировать профиль'
      }),
      new ActionsDropdownButton({
        title: 'Настройки',
        withSeparator: true
      }),
      new ActionsDropdownButton({
        title: 'Выйти из аккаунта'
      })
    ];
  }

  constructor() {
  }
}
