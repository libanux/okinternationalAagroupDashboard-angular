import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService  {

  PageSizing = 20;
  storedToken: string = '';  // Initialize with an empty string
  userId: any = 0

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.platformId = platformId;
    if (isPlatformBrowser(platformId)) {
      // runs on client / browser
      const token = localStorage.getItem('TICKET');
      this.storedToken = token !== null ? token : '';

      // userID
      this.userId = localStorage.getItem('userId')
    }
  }


  //TRUNCATE THE TEXT INTO 20 CHARS
truncateText(text: string, limit: number): string {
  if (text && text.length > limit)
     { return text.substring(0, limit) + '...';  }
    return text;
}
  


}
