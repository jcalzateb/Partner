import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { Partner, Country } from '../../models/partner.interface';


@Component({
  selector: 'app-register-partner',
  templateUrl: './register-partner.component.html',
  styleUrls: ['./register-partner.component.scss']
})
export class RegisterPartnerComponent implements OnInit {

  public countryI: any[2740];

  constructor(private router: Router, private storageS:LocalStorageService) { }

  ngOnInit(): void {
    this.rForm.get("institution").setValue('YES');

    this.storageS.getContry().subscribe(resp=>{
      this.countryI=resp;
      console.log(this.countryI);
      });
  }

  rForm = new FormGroup({
    institution: new FormControl('', Validators.required),
    acronym: new FormControl('', [Validators.required,Validators.maxLength(10)]),
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    type: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('',Validators.required),
    website: new FormControl('http://', Validators.required)
  });

  send(rForm:Partner){
    this.storageS.addIstitution(rForm);
    //console.log(this.storageS.getList);
  }

  goList() {
    this.router.navigate(['/list-institution']);
  }

}
