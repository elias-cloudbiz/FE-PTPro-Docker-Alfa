// @ts-ignore
import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewChecked, AfterViewInit, Injectable } from '@angular/core';
// @ts-ignore
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// @ts-ignore
import { Router } from '@angular/router';
// @ts-ignore
import { SessionService } from '../../../providers/services/session.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

@Injectable()
// @ts-ignore
export class SignupComponent implements OnInit, AfterViewChecked, AfterViewInit {

  isLinear = false;
  Generalprofile: FormGroup;
  Membership: FormGroup;

  Memberships: any[] = [
    { value: 'Client', viewValue: 'Jeg søker trening, veiledning eller kosthjelp.' },
    { value: 'PT', viewValue: 'Jeg er en trener, idretsutøver eller influenser.' }
  ];

  private userType: any = ["Jeg er kunde og søker hjelp med livstil eller trenings.", "Jeg er selger, idrettsutøver eller influenser."];
  public MembershipValue: string;

  PTMembership: any[] = [
    { value: 'Announce', viewValue: 'Annonse: 6 Mnd. gratis premium medlemskap' },
    { value: 'Free', viewValue: 'Gratis medlemskap' },
    // { value: 'Premium', viewValue: 'Premium medlemskap / 99 NOK Måned' }
  ];

  public MembershipPackage = "Premium";

  Region: string;
  City: string;



  constructor(private _formBuilder: FormBuilder, private router: Router, public session: SessionService) 
  {

  }

  selectMembership(input) {
    this.MembershipValue = input;
  }

  selectMembershipPackage(input) {
    if (input == "Free")
      this.MembershipPackage = "Free";
    else
      this.MembershipPackage = "Premium"
  }

  ngAfterViewChecked() {

  }

  ngOnInit() {
    this.Generalprofile = this._formBuilder.group({
      Generalprofile: ['', Validators.required]
    });
    this.Membership = this._formBuilder.group({
      Membership: ['', Validators.required]
    });
  }


  ngAfterViewInit() {

    this.Region = this.session.Region;
    this.City = this.session.City;

  }
}
