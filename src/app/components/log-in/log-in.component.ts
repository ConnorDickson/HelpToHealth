import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  apiresponse = "";

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl('', [
    Validators.required
  ]);
  
  constructor(private http:HttpClient) { }

  onLoginClick() {
    let loginDetails = {
      "email": this.email.value,
      "password": this.password.value
    };

    let body = JSON.stringify(loginDetails);
    console.log(body);
    this.http.post('https://helptocare-api.azurewebsites.net/api/Login', body, httpOptions).subscribe(
        (data: any) => { console.log(data);
        },
        error => {
          console.error("Error Logging In!", error);
          this.apiresponse = "NOT LOGGED IN!"
        }
     );
  }

  ngOnInit() {
  }

}
