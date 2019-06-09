import { Component, OnInit } from '@angular/core';
import { Administrateur } from '../../shared/Administrateur';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdministrateurService } from './administrateur.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.scss']
})
export class AdministrateurComponent implements OnInit {

  administrateurs: Administrateur[];
  administrateurForm: FormGroup;
  operation: string = 'add';
  selectedAdministrateur: Administrateur;

  constructor(private administrateurService: AdministrateurService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initAdministrateur();
    this.loadAdministrateurs();
  }

  createForm() {
    this.administrateurForm = this.fb.group({
      nom: '',
      prenom: '',
      dateNaissance: '',
      ville: '',
      adresse: '',
      login: '',
      password: '',
    });
  }

  loadAdministrateurs() {
    this.administrateurService.getAdministrateurs().subscribe(
      data => { this.administrateurs = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Administrateurs est terminé') }
    );
  }

  addAdministrateur() {
    const s = this.administrateurForm.value;
    this.administrateurService.addAdministrateur(s).subscribe(
      res => {
        this.initAdministrateur();
        this.loadAdministrateurs();
      }
    );
  }

  updateAdministrateur() {
    console.log("upd  " + this.selectedAdministrateur.nom);
    this.administrateurService.updateAdministrateur(this.selectedAdministrateur).subscribe(
      res => {
        this.initAdministrateur();
        this.loadAdministrateurs();
        this.operation = "add";
      }
    );
  }

  deleteAdministrateur() {
    this.administrateurService.deleteAdministrateur(this.selectedAdministrateur.id).subscribe(
      res => {
        this.selectedAdministrateur = new Administrateur();
        this.loadAdministrateurs();
      }
    );
  }

  initAdministrateur() {
    this.selectedAdministrateur = new Administrateur();
    this.createForm();
  }
}
