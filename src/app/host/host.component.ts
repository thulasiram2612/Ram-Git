import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

  constructor(public quiz:QuizServiceService) { }
  onClick(num){
    if(num==1){
      this.quiz.currentQuiz=this.quiz.quiz1;
      this.quiz.quizNo="Science-Quiz"
    }else if(num==2){
      this.quiz.currentQuiz=this.quiz.quiz2;
      this.quiz.quizNo="Maths-Quiz"
    }else if(num==3){
      this.quiz.currentQuiz=this.quiz.quiz3;
      this.quiz.quizNo="Social-Quiz"
    }else if(num==4){
      this.quiz.currentQuiz=this.quiz.quiz4;
      this.quiz.quizNo="English-Quiz"
    }else if(num==5){
      this.quiz.currentQuiz=this.quiz.quiz5;
      this.quiz.quizNo="GK-Quiz"
    }
  }
  ngOnInit(): void {
  }

}
