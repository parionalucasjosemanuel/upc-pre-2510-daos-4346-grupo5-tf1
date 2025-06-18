import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  availableLangs = ['en_US', 'es_419'];

  constructor(private translate: TranslateService) {
    translate.addLangs(this.availableLangs);
    translate.setDefaultLang('en_US');

    const browserLang = translate.getBrowserLang();
    const defaultLang = this.availableLangs.includes(browserLang!) ? browserLang! : 'en_US';
    translate.use(defaultLang);
  }

  changeLang(lang: string): void {
    this.translate.use(lang);
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }

  getAvailableLangs(): string[] {
    return this.availableLangs;
  }
}
