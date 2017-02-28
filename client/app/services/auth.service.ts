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

    isAuth(){
        return this.http.get("/account/check")
        .map(function(res){
          return status=res.json().status;
        });
    }

    getStatus(){
      return this.isLoggedin;
    }

    getLogin(loginAccount): Promise<statusData> {
      var headers=new Headers();
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
      });
    }

    getLogOut(){
        localStorage.removeItem("user");
        localStorage.removeItem("id");
        return this.http.get("/account/logout").map((res)=>{res});
    }
  }
}
