import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SpinnerDiameterEnum, SpinnerTypeEnum } from './enums';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { LoadingSpinnerFacade } from './loading-spinner.facade';

@Component({
  selector: 'loading-spinner',
  templateUrl: 'loading-spinner.html',
  styleUrls: ['loading-spinner.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    LoadingSpinnerFacade
  ]
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {
  @Input() diameter: number;
  @Input() type: SpinnerTypeEnum;

  public spinnerTypeEnum: typeof SpinnerTypeEnum;

  public get size(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`${this.diameter}px`);
  }

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly facade: LoadingSpinnerFacade
  ) {
    this.diameter = SpinnerDiameterEnum.MEDIUM;
    this.type = SpinnerTypeEnum.DEFAULT;
    this.spinnerTypeEnum = SpinnerTypeEnum;
  }

  public ngOnInit(): void {
    this.facade.viewInitialized();
  }

  public ngOnDestroy(): void {
    this.facade.viewDestroyed();
  }
}
