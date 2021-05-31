import { Component, OnInit } from '@angular/core';
import { Partner } from '../../models/partner.interface';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-institutions',
  templateUrl: './list-institutions.component.html',
  styleUrls: ['./list-institutions.component.scss']
})
export class ListInstitutionsComponent implements OnInit {

  institutionL: Partner[];

  constructor(private router:Router, private storageS:LocalStorageService) { }

  ngOnInit(): void {
    this.institutionL=this.storageS.getList();
    
  }
  deleteInstitution(listI:Partner){
    if(confirm('Are you sure you want to delete it?')){
      this.storageS.deleteInstitution(listI);
    }
  }

  goRegister(){
    this.router.navigate(['/register-partner']);
  }

}
