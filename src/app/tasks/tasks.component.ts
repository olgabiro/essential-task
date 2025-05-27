import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {NewTaskData} from './task/task.model';
import {NewTaskComponent} from './new-task/new-task.component';
import {TasksService} from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) userName!: string;
  isAddingTask = false;

  constructor(private taskService: TasksService) {
  }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCancelAddTask() {
    this.isAddingTask = false
  }

  onAddTask(taskData: NewTaskData) {
    this.taskService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }
}
