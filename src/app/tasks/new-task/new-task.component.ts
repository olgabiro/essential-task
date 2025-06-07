import {Component, EventEmitter, input, Input, output, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  constructor(private taskService: TasksService) {
  }

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId());
    this.close.emit();
  }
}
