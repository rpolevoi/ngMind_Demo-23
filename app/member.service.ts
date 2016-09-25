import { Member } from './member';

let MEMBERS = [
  new Member(1, 'Sam', 'San Francisco', 'USA'),
  new Member(2, 'Francoise', 'Paris', 'France'),
  new Member(3, 'Pedro')
];


export class MemberService {
    
    getMembers() {return Promise.resolve(MEMBERS);}
    
}
