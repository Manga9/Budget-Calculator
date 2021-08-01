import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/interfaces/budget';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  budgetItems : Budget[] = new Array<Budget>()
  totalBudget : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: Budget) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: Budget) {
    let index = this.budgetItems.indexOf(item)
    this.budgetItems.splice(index, 1)
    this.totalBudget -= item.amount;
  }

}
