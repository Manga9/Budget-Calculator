import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Budget } from 'src/app/interfaces/budget';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: Budget = {amount: 0, description: ''}
  @Output() xButtonClick : EventEmitter<Budget> = new EventEmitter<Budget>()

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick() {
    this.xButtonClick.emit();
  }

}
