import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {QuestionsService} from '../../services/questions/questions.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss']
})
export class AddquestionComponent implements OnInit {
  QuestionForm: FormGroup;
  qw: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, public dialogRef: MatDialogRef<AddquestionComponent>, private router: Router,
              private fb: FormBuilder, private questionService: QuestionsService) {
    this.qw = data;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.QuestionForm = this.fb.group({
      imitationId: this.qw,
      text: ['', [
        Validators.required,
        Validators.pattern(/[A-z]/)
      ]]
    });
  }

  onsubmit() {
    const controls = this.QuestionForm.controls;

    /* Проверяем форму  */
    if (this.QuestionForm.invalid) {
      /*Если форма не валидна, то помечаем все как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      /* Прерываем выполнение метода*/
      return;
    }
    /* Обработка данных формы */
    this.questionService.addQuestion(this.QuestionForm.value)
      .subscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
