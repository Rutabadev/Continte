import { TodosService } from './todos.service';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Todo } from './todo';
import { MasonryOptions, AngularMasonry } from 'angular2-masonry';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { AddTodoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
    providers: [TodosService]
})

export class TodosComponent implements OnInit {
    @ViewChild(AngularMasonry) masonry: AngularMasonry;
    tasks: Todo[];
    tasksShown: Todo[];
    loading: boolean;
    statusFilter: string;
    statuses: string[];
    todosService: TodosService;
    progress_value = 0;
    myOptions: MasonryOptions = {
        transitionDuration: '0.8s',
        columnWidth: 270,
        gutter: 20,
        fitWidth: true
    };

    constructor(todosService: TodosService,
        public dialog: MatDialog,
        public snackBar: MatSnackBar,
        private http: HttpClient) {
        this.todosService = todosService;
    }

    ngOnInit() {
        this.statusFilter = 'all';
        this.statuses = ['all', 'pending', 'ongoing', 'completed'];
        this.loading = true;
        const timer = Observable.timer(0, 200);
        const timerSubscription = timer.takeWhile(ev => ev < 37).subscribe(() => this.progress_value++);
        this.todosService.getAllTasks()
            .subscribe(event => {
                // Via this API, you get access to the raw event stream.
                // Look for download progress events.
                if (event.type === HttpEventType.DownloadProgress) {
                    if (event.loaded > this.progress_value) {
                        // This is an download progress event. Compute and show the % done:
                        this.progress_value = Math.round(100 * event.loaded / event.total);
                        timerSubscription.unsubscribe();
                    }
                } else if (event instanceof HttpResponse) {
                    this.tasks = event.body;
                    this.tasksShown = event.body;
                    this.updateTasksShown();
                    this.loading = false;
                    this.tasksShown = this.tasksShown.reverse();
                }
            });
        this.progress_value = 0;
    }

    updateTasksShown() {
        if (this.statusFilter === 'all') {
            Object.assign(this.tasksShown, this.tasks);
        } else {
            this.tasksShown = this.tasks.filter(task => (task.status[0].toString() === this.statusFilter));
        }
        this.masonry.layout();
    }

    // Creates a task if no parameter, updates othewise
    openDialog(task): void {
        let options;

        if (task) {
            options = {
                width: '250px',
                data: {
                    card_title: 'Update Task',
                    initial_task: task,
                    isUpdate: true
                }
            };
        } else {
            options = {
                width: '250px',
                data: {
                    card_title: 'Create Task',
                    initial_task: {
                        status: ['pending']
                    }
                }
            };
        }

        const dialogRef = this.dialog.open(AddTodoDialogComponent, options);

        dialogRef.afterClosed().subscribe(result => {
            // Check if the dialog as been completed or just exited
            if (result) {
                result.new_task.creation_date = Date.now();
                // Check if we need to create or update a task
                if (result.isUpdate) {
                    this.todosService.updateTask(result.new_task);
                    Object.assign(result.initial_task, result.new_task);
                    this.snackBar.open('Task updated', null, {
                        duration: 2000
                    });
                } else {
                    const initial_task = Object.assign({}, result.new_task);
                    // Temporary changes before we get the actual task from the db
                    result.new_task._id = 'on sait pas encore';
                    this.tasks.unshift(result.new_task);
                    this.todosService.createTask(initial_task).subscribe(
                        dbTask => {
                            Object.assign(result.new_task, dbTask);
                        }, error => {
                            console.log('error: ' + JSON.stringify(error));
                        });
                    this.snackBar.open('Task created', null, {
                        duration: 2000
                    });
                }
                this.updateTasksShown();
            }
        });
    }

    delete(id) {
        this.todosService.deleteTask(id).subscribe(result => {
            this.tasks = this.tasks.filter(task => (task._id !== id));
            this.tasksShown = this.tasksShown.filter(task => (task._id !== id));
            this.snackBar.open('Task deleted', null, {
                duration: 2000
            });
        });
    }
}
