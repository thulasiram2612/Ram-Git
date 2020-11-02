

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  currentQuiz;
  quizNo;
  userData:any="";
quiz1=[{id:1,question:"_________ gas do we need to live",option:["Co2-Carbon-di-oxide","O2-Oxygen","N2-Nitrogen","He-Helium"],orgAnswer:"O2-Oxygen"},
{id:2,question:"Earth is __________ like shape",option:["Box","Sphere","Triangle","Cone"],orgAnswer:"Sphere"},
{id:3,question:"What is the byproduct of photosynthesis?",option:["Oxygen","Carbon-di-oxide","Hydrogen","Argon"],orgAnswer:"Oxygen"},
{id:4,question:"Electric bulb filament is made of __________",option:["Copper","Aluminium","Lead","Tungsten"],orgAnswer:"Tungsten"},
{id:5,question:"Which of the following is used in pencils?",option:["Silicon","Charcoal","Graphite","Phosphorous"],orgAnswer:"Graphite"}];

quiz2=[{id:1,question:"X=(2x(4+5))/6 find X ",option:["5","18","2","3"],orgAnswer:"3"},
{id:2,question:"What is the average of the following sequence (1,4,5,6,11,14,23)",option:["9","9.14","8.24","9.5"],orgAnswer:"9.14"},
{id:3,question:"what is the area of triangle?",option:["3 x sides","1/2 x sides","(1/2) x Base x Height","Base x Height"],orgAnswer:"(1/2) x Base x Height"},
{id:4,question:"What is volume of cube if side is a?",option:["a x a x a","3 X a","a X a","2 x a"],orgAnswer:"a x a x a"},
{id:5,question:"Find L.C.M for 4 and 6",option:["14","2","12","4"],orgAnswer:"12"}];

quiz3=[{id:1,question:"what is the capital of India?",option:["Tamilnadu","Maharashtra","Delhi","Kerala"],orgAnswer:"Delhi"},
{id:2,question:"Which of the following resource is non-renewable?",option:["Coal","Oil","Natural gas","All of the above"],orgAnswer:"All of the above"},
{id:3,question:"Which of the following energy is get from sun?",option:["Solar energy","Wind energy","Tidal energy","Nuclear energy"],orgAnswer:"Solar energy"},
{id:4,question:"When did India got freedom?",option:["1966","1920","1947","1955"],orgAnswer:"1947"},
{id:5,question:"who is 11th persident of India?",option:["Vallabhbhai patel","A.P.J.Abdul Kalam","Indira Gandhi","Pranab mukherjee"],orgAnswer:"A.P.J.Abdul Kalam"}];

quiz4=[{id:1,question:"What is the present tense of 'was'?",option:["were","are","is","has"],orgAnswer:"is"},
{id:2,question:"Find tense of the following sentence 'I was finished my work'",option:["Past","Present","Past continuous","Past perfect"],orgAnswer:"Past"},
{id:3,question:"Question tag : It is raining",option:["isn't it?","is it?","are it?","wasn't it?"],orgAnswer:"isn't it?"},
{id:4,question:"He ______ finshed the homework",option:["were","was","are","is"],orgAnswer:"was"},
{id:5,question:"What is action word?",option:["noun","adjective","pronoun","verb"],orgAnswer:"verb"}];

quiz5=[{id:1,question:"Who is called as missile man of India?",option:["A.P.J.Abdul Kalam","C.V.Raman","K.V.Sivan","Mayilsamy Annadurai"],orgAnswer:"A.P.J.Abdul Kalam"},
{id:2,question:"Who is the father of our nation?",option:["Jawaharlal Nehru","Ambedkar","Mahatma Gandhi","Subhash chandra bose"],orgAnswer:"Mahatma Gandhi"},
{id:3,question:"Which captain won worldcup for india in 2011?",option:["Rohit Sharma","M.S.Dhoni","Virat kohli","Dravid"],orgAnswer:"M.S.Dhoni"},
{id:4,question:"What is the national animal of india?",option:["Lion","Dog","Tiger","Elephant"],orgAnswer:"Tiger"},
{id:5,question:"Which country has the largest population?",option:["India","Japan","U.S.A","China"],orgAnswer:"China"}];  
users=[];
user={id:null,
  registerNo:null,
  firstName:"",
  lastName:"",
  dateOfBirth:"",
password:"",
answer:[]}
constructor() { }
}



















































































