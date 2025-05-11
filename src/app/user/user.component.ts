import {Component, computed, input, output} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string
  // @Input({required: true}) name!: string

  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => 'assets/users/' + this.avatar())
  select = output<string>();

  // get imagePath() {
  //   return `assets/users/${this.avatar()}`;
  // }

  onSelectUser() {
    this.select.emit(this.id());
  }
}
