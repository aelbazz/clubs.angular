import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../core/api-services/api.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  public questionForm: FormGroup;
  public sendQuestionSuccess: any;
  public contactError: any;
  public captchaToken: any;


  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiService,
    private recaptchaV3Service: ReCaptchaV3Service
  ) { }

  ngOnInit(): void {
    this.initForm();
    

  }

  public initForm() {
    this.questionForm = this.formBuilder.group({
      fullName: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ])
      ],
      title: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ])
      ],
      message: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(1000)
        ])
      ],
      mobile: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^(05)[0-9]{8}$")
        ])
      ],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      recaptcha: [null, Validators.compose([Validators.required])]
    });
  }

  public sendQuestion() {
    console.log('Here')
    this.sendQuestionSuccess = null;
    this.contactError = null;
    this.recaptchaV3Service
      .execute('contactus')
      .subscribe(
        (token) => {
          this.apiService.contactUs(this.questionForm.value, token).subscribe(
            res => {
              this.sendQuestionSuccess = true;
              this.questionForm.reset();
            },
            err => {
              this.contactError = err.error;
            }
          );
         console.log(token)
        },
        (error) => {
          console.log(error)
        }
      );

  }
}
