import { Observable, Subject, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

export class LoadListener<T> {
  private readonly _errorLoading$ = new Subject<boolean>();
  readonly errorLoading$: Observable<boolean> = this._errorLoading$.pipe(
    shareReplay(1)
  );
  readonly data$: Observable<T>;

  constructor(data: Observable<T>) {
    this.data$ = data.pipe(
      shareReplay(1),
      catchError(error => {
        this._errorLoading$.next(true);
        return throwError(() => error);
      })
    );
  }
}
