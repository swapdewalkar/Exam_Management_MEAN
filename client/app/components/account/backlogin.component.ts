import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LogInComponent {
  info:String=""; 
  username:String;
  password:String;
  constructor(private authService:AuthService){
  }

  login(event){
    console.log("event call");
    event.preventDefault();
    var newAccount={
      username:this.username,
      password:this.password
    };
    console.log(1);

    this.authService.getLogin(newAccount).then((res) =>{
           if(res)
            console.log("Done",this.event);
           else
            console.log("sdasdas",this.event);
       });
  }
}
