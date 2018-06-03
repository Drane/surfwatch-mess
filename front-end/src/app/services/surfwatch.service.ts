import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from '../auth/auth0-variables';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable()
export class SurfwatchService {

  constructor(public authHttp: AuthHttp) { }

  getSubscriptions() {
    return this.authHttp.get(AUTH_CONFIG.apiUrl + '/secure')
      .map(res => {
        console.log(res);
        return res.json();
      });
  }

}
