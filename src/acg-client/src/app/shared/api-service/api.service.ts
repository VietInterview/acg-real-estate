/**
 * Created by quang.nguyen on 26/8/17.
 */

import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Config } from '../../env.config'
import 'rxjs/add/operator/map'
import { Observable, Subject } from 'rxjs/Rx'

@Injectable()
export class APIService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API + '/login', JSON.stringify({ username: username, password: password }), options)
            .map((response: Response) => {
                let user = response.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    getRequiredSetting() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API + '/execute', JSON.stringify({ model: 'viethrm.setting', method: 'get_required_setting' }), options)
            .map((response: Response) => {
                let setting = response.json();
                return setting;
            });
    }

    create(model:string, object:any):Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        model = this.escapeModel(model);
        return this.http.post(Config.API + '/create', JSON.stringify({ model: model, values:object }), options)
            .map((response: Response) => response.json());
    }

    update(model:string, id:string, object:any):Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        model = this.escapeModel(model);
        return this.http.post(Config.API + '/update', JSON.stringify({ model: model, values:object, id:id }), options)
            .map((response: Response) => response.json());
    }

    delete(model:string, id:string):Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        model = this.escapeModel(model);
        return this.http.post(Config.API + '/delete', JSON.stringify({ model: model, id:id }), options)
            .map((response: Response) => response.json());
    }

    listAll(model:string): Observable<any[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        model = this.escapeModel(model);
        return this.http.post(Config.API + '/search_read', JSON.stringify({ model: model }), options)
            .map((response: Response) => response.json());
    }

    escapeModel(model:string):string {
        /* All Odoo model in JavaScript are composed as a-b-c
            Need to normalize to a.b.c */
        return model.replace(/-/g,'.')
    }

}
