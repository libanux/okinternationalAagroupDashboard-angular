import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DateSelectedSignal {

    startDate = signal('');
    endDate = signal('');

  constructor() { }
}
