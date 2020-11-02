import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username="";
i=1;
password="";
login=true;
register=false;
ishost="";
goRegister(){
this.register=true;
this.login=false;
}
onSubmit(user){

  let copydata=Object.assign({},user);
  copydata.id=this.i;
    this.loguser.users.push(copydata);
    this.login=true;
    this.register=false;
    this.i++;
}
onLogin(uName,pass){
  let condition1=false,condition2=false;
    let datas=this.loguser.users;
    
    for(let i=0;i<this.loguser.users.length;i++){
        let user_name,passw;
        user_name=datas[i]["registerNo"];
        passw=datas[i]["password"];
        if(user_name==uName){
          condition1=true;
          if(passw==pass){
            this.loguser.userData=this.loguser.users[i];
            condition2=true;
            this.ishost="/host";
          
          }
        }

    }
    if(condition1==false ){
      alert("User name is not valide");
      
    }else if(condition2==false){
      alert("Enter correct password");
    }

}
  constructor(public loguser:QuizServiceService) { }

  ngOnInit(): void {
  }

}
