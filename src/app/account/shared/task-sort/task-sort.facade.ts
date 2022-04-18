import { Injectable } from '@angular/core';
import { CustomSelectOption } from '@shared/custom-select';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AccountTaskSortComponentFacade {
  public get options(): Array<CustomSelectOption<string>> {
    return [
      new CustomSelectOption<string>({
        id: '1',
        title: this.translateService.instant('ACCOUNT.SHARED.TASK_SORT.TEXT_BY_DATE')
      }),
      new CustomSelectOption<string>({
        id: '2',
        title: this.translateService.instant('ACCOUNT.SHARED.TASK_SORT.TEXT_BY_STATUS')
      })
    ];
  }

  constructor(
    private translateService: TranslateService
  ) {
  }
}
