import { Component } from '@angular/core';
import { CommonModule,NgIf } from '@angular/common';

import { FormGroup,FormBuilder,ReactiveFormsModule,Validators,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule, NgIf],
  templateUrl: './product-forms.component.html',
  styleUrl: './product-forms.component.css'
})
export class ProductFormsComponent {

produitForm:FormGroup;


constructor(private fp : FormBuilder){
  this.produitForm=this.fp.group({
    nom:['',Validators.required],
categorie:['',Validators.required],
prix:[null,Validators.required],
quantite:[0,[Validators.required,Validators.min(0)]],
description:['',Validators.required],
  });
};


get f(): Record<string, AbstractControl>{
  return this.produitForm.controls;
}


get isPremium() : boolean{
  return this.produitForm.get("prix")?.value > 1000;
}

onSubmit() : void{
if (this.produitForm.valid){

  console.log('Produit créé : ',this.produitForm.value);
}else{
  console.warn('Erreur lors de la création du prouit');
}
}


onReset() : void{
  this.produitForm.reset({quantite:0});
}

}
