import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {TaskService} from '../../services/task.service';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
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

        register(event){
          console.log("event call");
          event.preventDefault();
          var newAccount={
            username:this.username,
            password:this.password
          };
          this.authService.getRegister(newAccount).then((data)=>{
            console.log(data);
            if(data.status!='Register Successfully'){
              console.log("sdasd"+data.status);
              this.info = data.status;
            }
            else{
                this.router.navigate(['/dashboard']);
            }
          });
        }
        goToDashboard(){
          this.router.navigate(['/dashboard']);
        }

}
