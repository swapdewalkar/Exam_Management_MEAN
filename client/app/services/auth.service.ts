import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
    isLoggedin: boolean;


    constructor(private http:Http,private router:Router){
      console.log("started");
      this.isLoggedin=false;
    }

    getStatus(){
      return this.isLoggedin;
    }

    getTasks(){
      return this.http.get("/api/l")
      .map(res=> res.json());
    }
    // getLogin(newAccount): Promise<statusData> {
    //   return this.http.get("/account/log")
    //              .toPromise()
    //              .then(function(response){
    //                console.log(response.json().status);
    //               return response.json() as statusData
    //              })
    //              .catch(this.handleError);
    // }
    getLogin(loginAccount): Promise<statusData> {
      var headers=new Headers();
    //  headers.append('Content-Type', 'application/X-www-form-urlencoded');
      //var creds = 'username=' + loginAccount.username + '&password=' + loginAccount.password;
      headers.append('Content-Type','application/json');
      return this.http.post('/account/angularLogin', JSON.stringify(loginAccount), {headers: headers})
      .toPromise()
      .then((response)=>{
      if(response.status==200){
        window.localStorage.setItem('user', response.json().username);
        window.localStorage.setItem('id', response.json()._id);
        this.isLoggedin = true;
        var data=response.json();
        data.status="Login";
      }
      return data as statusData;
      })
      .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
       return Promise.reject(error.message || error);
     }


    getRegister(newAccount): Promise<statusData> {
      var headers=new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post("account/registerAngular",JSON.stringify(newAccount),{headers:headers})
      .toPromise()
      .then(function(response){
      console.log(response.json().status);
      return response.json() as statusData;
        //  console.log(data.json().status);
        //   if(data.json().success) {
        //       window.localStorage.setItem('auth_key', data.json().token);
        //       this.isLoggedin = true;
        //     }
        //       resolve(this.isLoggedin);
      });
    }

    getLogOut(){
        localStorage.removeItem("user");
        localStorage.removeItem("id");
        this.isLoggedin = false;
        this.router.navigate(['/login']);
    }
    checkCredentials(){
         if (localStorage.getItem("user") === null){
             this._router.navigate(['/login']);
    }

}
}
