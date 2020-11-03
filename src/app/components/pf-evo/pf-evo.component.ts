import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/client';

@Component({
  selector: 'app-pf-evo',
  templateUrl: './pf-evo.component.html',
  styleUrls: ['./pf-evo.component.css']
})
export class PfEvoComponent implements OnInit {

  private _clientsList: Array<Client>;
  constructor(private clientService: ClientService) { }


  get clientsList(): Array<Client> {
    return this._clientsList;
  }

  set clientsList(value: Array<Client>) {
    this._clientsList = value;
  }

  ngOnInit(): void {
    this.getClientsOnMongo();
  }

  getClientsOnMongo() {
    this.clientService.getClients().subscribe(res => {
      // @ts-ignore
      this.clientsList = res.body
      console.info(this.clientsList)}, err => console.log(err.error))
  }

}
