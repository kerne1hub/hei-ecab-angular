import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { LessonType } from '@shared/lesson';

@Component({
  selector: 'schedule-lesson-counter',
  templateUrl: 'lesson-counter.html',
  styleUrls: ['lesson-counter.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountScheduleLessonCounterComponent {
  @Input() showLabel: boolean;
  @Input() showCount: boolean;

  public lessonType: typeof LessonType;

  constructor() {
    this.lessonType = LessonType;
    this.showLabel = true;
    this.showCount = true;
  }
}
