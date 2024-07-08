import { Component, computed, Input, input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) avatar!:string
  // @Input({required:true}) name!:string

  avatar = input<string>()
  name = input<string>()
  
  // get randomUserPhoto(){
  //   return 'assets/users/'+this.avatar()
  // }

  randomUserPhoto = computed(()=> 'assets/users/'+ this.avatar())

  onSelectUser() { }
} 
