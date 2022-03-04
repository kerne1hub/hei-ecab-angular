import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { configuration } from '@configurations';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang(configuration.language.default);
    this.translateService.currentLang = configuration.language.default;
  }
}
