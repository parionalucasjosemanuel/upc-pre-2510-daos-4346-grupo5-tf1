import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { User } from '../../epic06-user-profile/model/user.model';

@Injectable({ providedIn: 'root' })
export class CryptoService {
  private secretKey = 'trabajandoya-app-secure-key';

  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.secretKey).toString();
  }

  decrypt(textToDecrypt: string): string {
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey).toString(CryptoJS.enc.Utf8);
  }
}
