import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {ApplicationService} from '../../../services/application.service';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  faExternalLink = faExternalLinkAlt;
  applicationList: any;
  clientName : string = this.clientService.clientSelectedName;

  constructor(private clientService: ClientService, private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applicationService.getApplications(this.clientService.clientSelectedId).subscribe(res =>{
      this.applicationList = res.body;
      console.log(this.applicationList)
    })
  }

  goToApplicationView(application: any) {

  }
}
