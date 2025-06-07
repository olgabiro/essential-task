import {Component, EventEmitter, inject, input, Input, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Task} from './task.model';
import {CardComponent} from '../../shared/card/card.component';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    DatePipe,
    CardComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTask(this.task().id);
  }
}
