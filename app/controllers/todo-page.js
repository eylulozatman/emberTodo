// app/controllers/todo-page.js
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TodoPageController extends Controller {
  @service tasks;

  get allTasks() {
    return this.tasks.getTasks();
  }

  @action
  deleteTask(taskId) {
    this.tasks.deleteTask(taskId);
  }
  
}
