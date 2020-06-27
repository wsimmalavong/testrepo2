import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-pee',
  templateUrl: './pee.component.html',
  styleUrls: ['./pee.component.scss']
})
export class PeeComponent implements OnInit {
  contacts: string;

  constructor(private contactsService: LoginService) { }

  ngOnInit(): void { 

  }

  

}
