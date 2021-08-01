import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Budget } from 'src/app/interfaces/budget';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  @Input () item : Budget = {amount: 0, description: ''}
  @Output() formItems : EventEmitter<Budget> = new EventEmitter<Budget>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.formItems.emit(form.value)
    form.reset()
  }

}
