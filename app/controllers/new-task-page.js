// app/controllers/new-task-page.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Router from '@ember/routing/router';

export default class NewTaskPageController extends Controller {
  @service router;

  @service tasks;

  @action
  goBackToDo() {
    this.router.transitionTo('todo-page');
  }

  @action
  addTask(event) {
    event.preventDefault();

    const title = event.target.querySelector('#title').value;
    const description = event.target.querySelector('#description').value;

    if (title && description) {
      this.tasks.addTask(title, description);

      // Clear input fields
      event.target.querySelector('#title').value = '';
      event.target.querySelector('#description').value = '';
    } else {
      alert('Title and Description cannot be empty!');
    }
  }
}
