import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Imitation} from '../../models/imitations';
import {ImitationsService} from '../../services/imitations/imitations.service';

@Component({
  selector: 'app-addimitation',
  templateUrl: './addimitation.component.html',
  styleUrls: ['./addimitation.component.scss']
})
export class AddimitationComponent implements OnInit {
  ImitationForm: FormGroup;
  Imitation: Imitation[];

  constructor(private router: Router, private fb: FormBuilder, private ImitationService: ImitationsService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.ImitationForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/[A-z]/)
      ]],
    });
  }

  onsubmit() {
    const controls = this.ImitationForm.controls;

    /* Проверяем форму  */
    if (this.ImitationForm.invalid) {
      /*Если форма не валидна, то помечаем все как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      /* Прерываем выполнение метода*/
      return;
    }
    /* Обработка данных формы */
    console.log(this.ImitationForm.value);
    this.ImitationService.addImitation(this.ImitationForm.value)
      .subscribe();
  }

  reset() {
    this.router.navigateByUrl('/admin/tests');
  }
}
