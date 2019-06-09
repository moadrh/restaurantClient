import { Component, OnInit } from '@angular/core';
import { Cuisinier } from '../../shared/Cuisinier';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CuisinierService } from './cuisinier.service';

@Component({
  selector: 'app-cuisinier',
  templateUrl: './cuisinier.component.html',
  styleUrls: ['./cuisinier.component.scss']
})
export class CuisinierComponent implements OnInit {

  cuisiniers: Cuisinier[];
  cuisinierForm: FormGroup;
  operation: string = 'add';
  selectedCuisinier: Cuisinier;

  constructor(private cuisinierService: CuisinierService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initCuisinier();
    this.loadCuisiniers();
  }

  createForm() {
    this.cuisinierForm = this.fb.group({
      nom: '',
      prenom: '',
      dateNaissance: '',
      ville: '',
      adresse: '',
      login: '',
      password: '',
      diplome: '',
    });
  }

  loadCuisiniers() {
    this.cuisinierService.getCuisiniers().subscribe(
      data => { this.cuisiniers = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Cuisiniers est terminé') }
    );
  }

  addCuisinier() {
    const s = this.cuisinierForm.value;
    this.cuisinierService.addCuisinier(s).subscribe(
      res => {
        this.initCuisinier();
        this.loadCuisiniers();
      }
    );
  }

  updateCuisinier() {
    console.log("upd  " + this.selectedCuisinier.nom);
    this.cuisinierService.updateCuisinier(this.selectedCuisinier).subscribe(
      res => {
        this.initCuisinier();
        this.loadCuisiniers();
        this.operation = "add";
      }
    );
  }

  deleteCuisinier() {
    this.cuisinierService.deleteCuisinier(this.selectedCuisinier.id).subscribe(
      res => {
        this.selectedCuisinier = new Cuisinier();
        this.loadCuisiniers();
      }
    );
  }

  initCuisinier() {
    this.selectedCuisinier = new Cuisinier();
    this.createForm();
  }

}
