import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tiny-book-card',
  templateUrl: './tiny-book-card.component.html',
  styleUrls: ['./tiny-book-card.component.scss']
})
export class TinyBookCardComponent {
  @Input() name = '';
  @Input() author = '';
  @Input() image = '';
  @Input() rank!: number;
}
