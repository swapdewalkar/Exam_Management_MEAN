import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {TaskService} from '../../services/task.service';
@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
        info:String="";
        username:String;
        password:String;
        constructor(private authService:AuthService){

        }

        register(event){
          console.log("event call");
          event.preventDefault();
          var newAccount={
            username:this.username,
            password:this.password
          };
          // this.tasks.push(newTask);
        /*  this.authService.getRegister(newAccount)
            .subscribe(task=>{
            console.log("dasdas");
          });
          *///this.authService.l();
          //console.log('Swapnil');
          // this.tasks.push(newTask);
          this.authService.register(newAccount)
            .subscribe();
        }

}
