import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  constructor(private router: Router) { }

  logout() {
    localStorage.clear()
    this.router.navigate(['home']);
    this.formModal.hide()
  }

  //Show confirm logout modal
  formModal: any
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("modal-confirm-logout")
    )
  }
  openModal() {
    this.formModal.show()
  }
}
