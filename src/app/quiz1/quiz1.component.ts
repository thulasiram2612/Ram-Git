import { Component, OnInit } from '@angular/core';
import{QuizServiceService} from '../quiz-service.service';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.scss']
})

export class Quiz1Component implements OnInit {
   i=0;
   answer="";
   mark=0;
   btnp=false;
   btnn=true;
   submited=false;
   quiz=true;
  constructor(public q1:QuizServiceService) {
    console.log(q1.users[0]);
  }

  ngOnInit(): void {
  }
  onClick(){
    if(this.i<this.q1.currentQuiz.length-1){
    this.i++;
    } 
    if(this.i==this.q1.currentQuiz.length-1){
    this.btnn=false;
    }
    if(this.i>0){
      this.btnp=true;
    }
  }
  onClick2(){
    if(this.i>0){
    this.i--;
     }
     if(this.i<this.q1.currentQuiz.length-1){
      this.btnn=true;
      }
      if(this.i==0){
        this.btnp=false;
      }
  }
onSubmit(){
  this.submited=true;
  this.quiz=false;
  console.log(this.q1.users[0].answer[0]);
  for(let j=0;j<this.q1.currentQuiz.length;j++){
    if(this.q1.currentQuiz[j].orgAnswer==this.q1.userData.answer[j]){
      this.mark++;
    }
  }
}
}
