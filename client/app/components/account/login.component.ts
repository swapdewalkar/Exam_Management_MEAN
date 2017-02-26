import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LogInComponent implements OnInit  {
        info:String="";
        username:String;
        password:String;
        constructor(
         private router: Router,
         private authService:AuthService){
           if(this.authService.isLoggedin ==true){
             this.goToDashboard();
           }
        }

        login(event){
          event.preventDefault();
          var loginAccount={
            username:this.username,
            password:this.password,
          };
          localStorage.removeItem("user");
          localStorage.removeItem("id");
          this.authService.isLoggedin = false;
          var self=this;
          this.authService.getLogin(loginAccount).then((data)=>{
            console.log(data.status);
            if(data.status=='Login'){
              this.goToDashboard();
            }
          }, function(error) {
            self.info = "Wrong Username or Password";
          });
        }

        goToDashboard(){
          this.router.navigate(['/dashboard']);
        }

}
