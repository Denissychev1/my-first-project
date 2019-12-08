import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {QuestionsService} from '../../services/questions/questions.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss']
})
export class AddquestionComponent implements OnInit {
QuestionForm: FormGroup;
  constructor(  public dialogRef: MatDialogRef<AddquestionComponent>, private router: Router, private fb: FormBuilder,
                private questionService: QuestionsService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.QuestionForm = this.fb.group({
      id: [''],
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
    console.log(this.QuestionForm.value);
    this.questionService.addQuestion(this.QuestionForm.value)
      .subscribe();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
