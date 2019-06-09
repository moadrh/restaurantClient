import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Serveur } from '../../shared/Serveur';
import { ServeurService } from './serveur.service';

@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.scss']
})
export class ServeurComponent implements OnInit {

  serveurs: Serveur[];
  serveurForm: FormGroup;
  operation: string = 'add';
  selectedServeur: Serveur;

  constructor(private serveurService: ServeurService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initServeur();
    this.loadServeurs();
  }

  createForm() {
    this.serveurForm = this.fb.group({
      nom: '',
      prenom: '',
      dateNaissance: '',
      ville: '',
      adresse: '',
      login: '',
      password: '',
      matricule: '',
    });
  }

  loadServeurs() {
    this.serveurService.getServeurs().subscribe(
      data => { this.serveurs = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Serveurs est terminé') }
    );
  }

  addServeur() {
    const s = this.serveurForm.value;
    this.serveurService.addServeur(s).subscribe(
      res => {
        this.initServeur();
        this.loadServeurs();
      }
    );
  }

  updateServeur() {
    console.log("upd  " + this.selectedServeur.nom);
    this.serveurService.updateServeur(this.selectedServeur).subscribe(
      res => {
        this.initServeur();
        this.loadServeurs();
        this.operation = "add";
      }
    );
  }

  deleteServeur() {
    this.serveurService.deleteServeur(this.selectedServeur.id).subscribe(
      res => {
        this.selectedServeur = new Serveur();
        this.loadServeurs();
      }
    );
  }

  initServeur() {
    this.selectedServeur = new Serveur();
    this.createForm();
  }

}
