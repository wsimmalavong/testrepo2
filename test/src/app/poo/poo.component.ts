import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  styleUrls: ['./poo.component.scss'],
  providers: [LoginService],
})
export class PooComponent implements OnInit {
  contacts: string;

  constructor(private contactsService: LoginService) { }

  ngOnInit(): void {
    this.contactsService.getContacts();
  }

}
