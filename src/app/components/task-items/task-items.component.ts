import { Component, Input, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasck';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {

  @Input() task: Task = TASKS[0]

  faTimes= faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
