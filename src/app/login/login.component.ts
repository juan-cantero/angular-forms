import { Component, OnInit } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  login(loginForm: NgForm, event: SubmitEvent) {
    console.log(loginForm.value);
  }

  showEmailError(emailControl: FormControl) {
    return emailControl.dirty && emailControl.errors?.required;
  }

  emailChange(event) {}
}
