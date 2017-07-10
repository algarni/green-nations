import { Injectable } from '@angular/core';
import { UserApi } from "fw/users/user-api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/throw';
import { Router } from "@angular/router";

@Injectable()
export class UserService implements UserApi {

    isAuthenticated = true;

    constructor(private router: Router) { }

    signIn(username: string, password: string, rememberMe: boolean): Observable<any>{
        console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
        this.isAuthenticated = true;
        return Observable.of({}).delay(2000);
        // return Observable.of({}).delay(2000).flatMap(x => Observable.throw('Invalid User Name and/or Password'));
    }

    signOut(): Observable<any>{
        this.isAuthenticated = false;
        this.router.navigate(['/signin']);
        return Observable.of({});
    }
}