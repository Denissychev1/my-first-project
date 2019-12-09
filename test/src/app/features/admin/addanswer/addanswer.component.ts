import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnswersService} from '../../services/answers/answers.service';
import {Answers} from '../../models/answers';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-addanswer',
  templateUrl: './addanswer.component.html',
  styleUrls: ['./addanswer.component.scss']
})
export class AddanswerComponent implements OnInit {
  AnswerForm: FormGroup;
  answer: Answers[];
  qq: any;

  constructor(public dialogRef: MatDialogRef<AddanswerComponent>, @Inject(MAT_DIALOG_DATA) data: any,
              private fb: FormBuilder, private AnswerService: AnswersService) {this.qq = data;
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.AnswerForm = this.fb.group({
      questionId: this.qq,
      text: ['', [
        Validators.required,
        Validators.pattern(/[A-z]/)
      ]],
      value: Boolean
    });
  }

  onsubmit() {
    const controls = this.AnswerForm.controls;

    /* Проверяем форму  */
    if (this.AnswerForm.invalid) {
      /*Если форма не валидна, то помечаем все как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      /* Прерываем выполнение метода*/
      return;
    }
    /* Обработка данных формы */
    console.log(this.AnswerForm.value);
    this.AnswerService.addAnswers(this.AnswerForm.value)
      .subscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
