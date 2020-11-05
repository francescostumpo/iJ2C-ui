import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {ApplicationService} from '../../../services/application.service';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {Application} from '../../../models/application';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  faExternalLink = faExternalLinkAlt;
  applicationList: any;
  clientName : string = this.clientService.clientSelectedName;
  private application : Application;

  constructor(private clientService: ClientService, private applicationService: ApplicationService, private modalService: NgbModal) {
    this.application = new Application();
  }

  ngOnInit(): void {
    this.getApplicationsOnMongo();
  }

  getApplicationsOnMongo(): void{
    this.applicationService.getApplications(this.clientService.clientSelectedId).subscribe(res =>{
      this.applicationList = res.body;
      console.log(this.applicationList)
    })
  }

  goToApplicationView(application: any) {

  }

  createApplicationOnMongo(application: Application) {
    application.clientId = this.clientService.clientSelectedId;
    console.info(application);
    let message: any;
    this.applicationService.createApplication(application).subscribe(res =>{
      message = res.body;
      alert(message.message)
      this.getApplicationsOnMongo();
    }, error => {
      message = error.message;
      alert("Error: " + message.message)
    })
  }

  openModal(content) {
    this.modalService.open(content);
  }

}
