import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-news',
  templateUrl: 'news.html',
  styleUrls: ['news.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHomeNewsComponent { }
