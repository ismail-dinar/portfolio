import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NgwWowService} from 'ngx-wow';
import {Title} from '@angular/platform-browser';
import {Router, RouterOutlet, RoutesRecognized} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  subscription = new Subscription();

  constructor(private wowService: NgwWowService, private titleService: Title, private router: Router) {
    this.subscription.add(this.router.events.subscribe(
      (event) => {
        if (event instanceof RoutesRecognized) {
          this.titleService.setTitle(event.state.root.firstChild.data.title);
        }
      }
    ));
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.wowService.init();
  }
}
