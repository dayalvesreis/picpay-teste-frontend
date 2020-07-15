import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() users = [];
  @Output() sendUser =  new EventEmitter();

  ngOnInit() {}

  payUser(id: number) {
    this.sendUser.emit(id);
  }

}
