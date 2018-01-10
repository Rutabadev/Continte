import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable()
export class TodosService {

   constructor(private http: HttpClient) { }

   getAllTasks() {
      return this.http.get(environment.apiUrl + 'tasks/')
         .map(response => <any[]>response);
   }

   getAllTasksRequest() {
      return new HttpRequest('GET', environment.apiUrl + 'tasks/', { reportProgress: true });
   }

   getTask(id) {
      return this.http.get(environment.apiUrl + 'tasks/' + id)
         .map(response => <any[]>response);
   }

   createTask(task) {
      return this.http.post(environment.apiUrl + 'tasks/', task)
         .map(response => <any>response);
   }

   updateTask(task) {
      this.http.put(environment.apiUrl + 'tasks/' + task._id, task)
         .subscribe(data => { }, error => {
            console.log('error: ' + JSON.stringify(error));
         });
   }

   deleteTask(id) {
      return this.http.delete(environment.apiUrl + 'tasks/' + id)
         .map(response => <any>response);
   }
}
