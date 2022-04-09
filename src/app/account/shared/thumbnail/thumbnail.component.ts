import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'account-thumbnail',
  templateUrl: 'thumbnail.html',
  styleUrls: ['thumbnail.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountThumbnailComponent {
  @Input() source: string;
  @Input() source2x: string;
  @Input() defaultSource: string;
}
