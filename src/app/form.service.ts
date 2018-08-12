// The form service holds (or retrieves on demand) all the information in the form.  This includes the fee which the paypal component will fetch
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {

  constructor() { }

  info = undefined;

  updateInfo(info): void {
  	this.info = info
  	console.log('updated info in form service')
  	console.log(this.info)
  }
}
