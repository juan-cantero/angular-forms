import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { createPasswordStrengthValidator } from "../validators/password-strength.validator";

let { required, email, minLength } = Validators;

@Component({
  selector: "login",
  templateUrl: "./login-reactive.component.html",
  styleUrls: ["./login-reactive.component.css"],
})
export class LoginReactiveComponent implements OnInit {
  form = this.fb.group({
    email: [
      "",
      {
        validators: [required, email],
      },
    ],
    password: ["", [required, minLength(8), createPasswordStrengthValidator()]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  showError(control: FormControl, error: string) {
    return control.dirty && control.errors[error];
  }
}
