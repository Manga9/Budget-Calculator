import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Budget } from 'src/app/interfaces/budget';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: Budget[] = new Array<Budget>()
  @Output() deleteButton : EventEmitter<Budget> = new EventEmitter<Budget>()

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClick(item: Budget) {
    this.deleteButton.emit(item);
  }

}
