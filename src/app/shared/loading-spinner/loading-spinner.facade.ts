import { Injectable } from '@angular/core';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { configuration } from '@configurations';

@Injectable()
export class LoadingSpinnerFacade {
  private progressRef: NgProgressRef;

  constructor(
    private readonly progress: NgProgress
  ) {
    this.progressRef = this.progress.ref('root');
  }

  public viewInitialized(): void {
    this.progressRef.set(configuration.ngxProgress.min);
    this.progressRef.start();
  }

  public viewDestroyed(): void {
    if (this.progressRef.isStarted) {
      this.progressRef.set(configuration.ngxProgress.max);
      this.progressRef.complete();
    }
  }
}
