import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TodosService {

  constructor(private http: Http) { }

  getAllTasks() {
    return this.http.get(environment.apiUrl + 'tasks/')
      .map(response => <any[]>response.json());
  }

  getTask(id) {
    return this.http.get(environment.apiUrl + 'tasks/' + id)
      .map(response => <any[]>response.json());
  }

  createTask(task) {

  }

  updateTask(id) {

  }

  deleteTask(id) {
    return this.http.delete(environment.apiUrl + 'tasks/' + id)
      .map(response => <any[]>response.json());
  }
}
