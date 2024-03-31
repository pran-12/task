import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  integerRegex = /^\d+$/
  title = 'task';
  registerForm = new FormGroup({
    fname : new FormControl("",[Validators.required , Validators.maxLength(20)]),
    age : new FormControl("",[Validators.required,Validators.pattern(this.integerRegex)])
  })

  registerFn(){
    console.log(this.registerForm.value);
  }
}
export class UploadPhotoComponent {
  constructor() { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
  }
}
