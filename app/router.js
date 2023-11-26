import EmberRouter from '@ember/routing/router';
import config from 'todolist-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('todo-page');
  this.route('new-task-page');
});
