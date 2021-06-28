import { Component, OnInit } from '@angular/core';
import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;


  constructor(private uiservice: UiService, private router: Router) {

    this.subscription = uiservice.onToggle().subscribe((value) => {
      this.showAddTask = value;
    })
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiservice.toggleAddTask()
  }

  hasRoute(route: string) {
    this.router.url === route;
  }

}
