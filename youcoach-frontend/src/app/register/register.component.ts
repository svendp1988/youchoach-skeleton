import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CoacheeService} from '../coacheeService/coachee.service';
import {ICoachee} from './ICoachee';
import {group} from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../css/materialize.css', '../../css/style.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    passwordVerification: ['']
  }, {validator: this.checkPasswords});

  coachee: ICoachee;

  constructor(private fb: FormBuilder, private router: Router,
              private coacheeService: CoacheeService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.coachee = this.registerForm.value;
    this.register(this.coachee);
    // this.goBack();
  }

  // goBack() {
  //   this.router.navigateByUrl('/items').then(r => true);
  // }
  // passwordEqual: true;

  private register(coachee: ICoachee) {
    this.coacheeService.register(coachee).subscribe();
  }

  private checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('passwordVerification').value;

    return pass === confirmPass ? null : {notSame: true};
  }
}
