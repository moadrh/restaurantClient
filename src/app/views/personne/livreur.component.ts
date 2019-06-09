import { Component, OnInit } from '@angular/core';
import { LivreurService } from './livreur.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Livreur } from '../../shared/Livreur';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.scss']
})
export class LivreurComponent implements OnInit {

  livreurs: Livreur[];
  livreurForm: FormGroup;
  operation: string = 'add';
  selectedLivreur: Livreur;

  constructor(private livreurService: LivreurService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initLivreur();
    this.loadLivreurs();
  }

  createForm() {
    this.livreurForm = this.fb.group({
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

  loadLivreurs() {
    this.livreurService.getLivreurs().subscribe(
      data => { this.livreurs = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Livreurs est terminé') }
    );
  }

  addLivreur() {
    const s = this.livreurForm.value;
    this.livreurService.addLivreur(s).subscribe(
      res => {
        this.initLivreur();
        this.loadLivreurs();
      }
    );
  }

  updateLivreur() {
    console.log("upd  " + this.selectedLivreur.nom);
    this.livreurService.updateLivreur(this.selectedLivreur).subscribe(
      res => {
        this.initLivreur();
        this.loadLivreurs();
        this.operation = "add";
      }
    );
  }

  deleteLivreur() {
    this.livreurService.deleteLivreur(this.selectedLivreur.id).subscribe(
      res => {
        this.selectedLivreur = new Livreur();
        this.loadLivreurs();
      }
    );
  }

  initLivreur() {
    this.selectedLivreur = new Livreur();
    this.createForm();
  }

}
