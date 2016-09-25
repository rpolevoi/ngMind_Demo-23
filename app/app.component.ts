import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Member } from './member';
import { MemberService } from './member.service';


@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h3>Add to List button works ONLY if there is a name (required field).</h3>
  
   
              <form [formGroup]="myform" (submit)="addToList(myform.value)">
                      <label>Name</label>
                      <input type="text" formControlName="name"><br>
                      <label>City</label>
                      <input type="text" formControlName="city"><br>
                      <label>Country</label>
                      <input type="text" formControlName="country"><br>
                      <button>Add</button>
              </form>
              <br>
              
              <app-child-component *ngFor = "let member of members" [childProp]="member"
                (emitter)="delete($event)">
              </app-child-component>`,
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{
  
  members: Member[] = [];
  
  addToList(formObj) {if (this.myform.valid) {
    
    let newId;
    
    if (this.members.length == 0) {newId = 1}
    else { newId = this.members[this.members.length-1].id+1}
    
    let temp = Object.assign( {id: newId}, formObj);
    this.members.push(temp);
    
    }
  }
    

  delete(obj) {this.members = this.members.filter(e => e != obj);}

  constructor(private membServ: MemberService) {
    let fb = new FormBuilder();
 
    this.myform = fb.group({
      name: ['', Validators.required],
      city: [''],
      country: ['']
    });
  }
  
  ngOnInit() {
    this.membServ.getMembers()
      .then (membs => this.members = membs);
  }

}
