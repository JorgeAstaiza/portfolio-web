import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormEmailService {
  constructor(private http: HttpClient) {}

  sendEmailByForm(form: any): Observable<any> {
    return this.http.post('https://formspree.io/f/mnqwboge', form);
  }
}
