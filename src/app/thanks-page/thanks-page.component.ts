import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.component.html',
  styleUrls: ['./thanks-page.component.scss']
})
export class ThanksPageComponent {
  constructor(
    private router: Router
  ) { }

  returnHome() {
    this.router.navigate(['home']);
  }
}
