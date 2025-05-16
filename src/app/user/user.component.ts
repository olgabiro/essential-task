import {Component, computed, Input, input, output} from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true}) selected!: boolean;
  user = input.required<User>();
  imagePath = computed(() => 'assets/users/' + this.user().avatar)
  select = output<string>();

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
