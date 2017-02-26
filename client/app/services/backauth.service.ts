import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
    isLoggedin: boolean;

    constructor(private http:Http){
      console.log("started");
    }

    getTasks(){
      return this.http.get("/api/l")
      .map(res=> res.json());
    }
      getLogin(newAccount){
        this.isLoggedin = false;
        var headers=new Headers();
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        var creds = 'username=' + newAccount.username + '&password=' + newAccount.password;
        this.http.post('/account/login', creds, {headers: headers}).subscribe((data) => {
            if(data.json().status="Login") {
                //window.localStorage.setItem('auth_key', data.json().token);
                this.isLoggedin = true;
              }
                resolve(this.isLoggedin);

                  console.log(2);
            });
      }


        register(newAccount){
            var headers=new Headers();
            headers.append('Content-Type','application/json');
            return this.http.post("account/registerAngular",JSON.stringify(newAccount),{headers:headers})
              .map(res=> res.json());
            }
}
