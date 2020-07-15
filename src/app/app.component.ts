import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './share/services/data/data.service';
import { User } from './share/interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataService: DataService) { }

  users$: Observable<User[]>;
  modals = {
    payment: false,
    result: false
  }
  titleModal = 'Pagamento para <span>Nome do Usuário</span>'; 

  ngOnInit() {
    this.users$ = this.dataService.geUserList();
  }

  showModal(modal: string) {
    this.modals[modal] = true;
  }

  hideModal(modal) {
    this.modals[modal] = false;
  }

  getUser(event) {
    this.showModal('payment');
  }

}
