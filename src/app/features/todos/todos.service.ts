import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http.get(environment.apiUrl + 'tasks/')
      .map(response => <any[]>response);
  }

  getTask(id) {
    return this.http.get(environment.apiUrl + 'tasks/' + id)
      .map(response => <any[]>response);
  }

  createTask(task) {
    this.http.post(environment.apiUrl + 'tasks/', task)
      .subscribe(data => { }, error => {
      console.log('error: ' + JSON.stringify(error));
    });
  }

  updateTask(id) {

  }

  deleteTask(id) {
    return this.http.delete(environment.apiUrl + 'tasks/' + id)
      .map(response => <any[]>response);
  }
}
