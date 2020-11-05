import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/client';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pf-evo',
  templateUrl: './pf-evo.component.html',
  styleUrls: ['./pf-evo.component.css'],
  providers: [NgbModal]
})
export class PfEvoComponent implements OnInit {

  faExternalLink = faExternalLinkAlt;
  private _clientsList: any;
  public clientListEmpty : boolean = true;
  private client : Client;


  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute, private modalService: NgbModal) {
    this.client = new Client();
  }

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
      this.clientListEmpty = false;
      console.info(this.clientsList)}, err => {
      console.log(err.error)
    })
  }

  goToClientView(client: Client) {
      this.clientService.clientSelectedId = client.id;
      this.clientService.clientSelectedName = client.clientName;
      this.router.navigate(['client'], {relativeTo: this.route} );
  }

  openModal(content) {
    this.modalService.open(content);
  }

  createClientOnMongo(client){
    console.log(client)
    let message :any;
    this.clientService.createClient(client).subscribe(res =>{
      message = res.body;
      alert(message.message)
      this.getClientsOnMongo();
    }, error => {
      message = error.message;
      alert("Error: " + message.message)
    })

  }
}
