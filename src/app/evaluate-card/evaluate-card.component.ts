import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evaluate-card',
  templateUrl: './evaluate-card.component.html',
  styleUrls: ['./evaluate-card.component.scss']
})
export class EvaluateCardComponent {
  @Input() name = '';
  @Input() national = '';
  @Input() comment = '';
  @Input() image = '';
}
