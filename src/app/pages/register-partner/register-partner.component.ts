import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { Partner } from '../../models/partner.interface';


@Component({
  selector: 'app-register-partner',
  templateUrl: './register-partner.component.html',
  styleUrls: ['./register-partner.component.scss']
})
export class RegisterPartnerComponent implements OnInit {

  constructor(private router: Router, private storageS:LocalStorageService) { }

  ngOnInit(): void {
    this.rForm.get("institution").setValue('gato');
  }

  rForm = new FormGroup({
    institution: new FormControl('', Validators.required),
    acronym: new FormControl('test', [Validators.required,Validators.maxLength(10)]),
    name: new FormControl('test', [Validators.required, Validators.minLength(10)]),
    type: new FormControl('test', Validators.required),
    country: new FormControl('test', Validators.required),
    city: new FormControl('test',Validators.required),
    website: new FormControl('test', Validators.required)
  });

  send(rForm:Partner){
    this.storageS.addIstitution(rForm);
    console.log(this.storageS.getList);
  }

  goList() {
    this.router.navigate(['/list-institution']);
  }

}
