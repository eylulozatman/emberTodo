import Service from '@ember/service';

export default class TasksService extends Service {
  tasks = [];

  constructor() {
    super(...arguments);
    // localStorage'dan verileri al
    const storedTasks = localStorage.getItem('tasks');
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
  }

  addTask(title, description) {
    const id = Date.now(); // Zaman damgası ile benzersiz bir ID oluştur
    this.tasks.push({ id, title, description });
    this.saveTasks();
  }

  saveTasks() {
    // localStorage'a verileri kaydet
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks() {
    return this.tasks;
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
    window.location.reload();
  }
}