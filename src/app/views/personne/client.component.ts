import { Component, OnInit } from '@angular/core';
import { Client } from '../../shared/Client';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients: Client[];
  clientForm: FormGroup;
  operation: string = 'add';
  selectedClient: Client;

  constructor(private clientService: ClientService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initClient();
    this.loadClients();
  }

  createForm() {
    this.clientForm = this.fb.group({
      nom: '',
      prenom: '',
      dateNaissance: '',
      ville: '',
      adresse: '',
      login: '',
      password: '',
      numCarteFildelite: '',
    });
  }

  loadClients() {
    this.clientService.getClients().subscribe(
      data => { this.clients = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Clients est terminé') }
    );
  }

  addClient() {
    const s = this.clientForm.value;
    console.log('huhh '+this.selectedClient.numCarteFildelite);
    this.clientService.addClient(s).subscribe(
      res => {
        this.initClient();
        this.loadClients();
      }
    );
  }

  updateClient() {
    console.log("upd  " + this.selectedClient.nom);
    this.clientService.updateClient(this.selectedClient).subscribe(
      res => {
        this.initClient();
        this.loadClients();
        this.operation = "add";
      }
    );
  }

  deleteClient() {
    this.clientService.deleteClient(this.selectedClient.id).subscribe(
      res => {
        this.selectedClient = new Client();
        this.loadClients();
      }
    );
  }

  initClient() {
    this.selectedClient = new Client();
    this.createForm();
  }
}
