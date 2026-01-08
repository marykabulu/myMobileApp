import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwsService {
  private apiUrl = 'https://zlpgn8492a.execute-api.us-east-1.amazonaws.com/prod'; // Replace with your API Gateway URL

  constructor(private http: HttpClient) {}

  rewriteText(message: string, tone: string): Observable<any> {
    const payload = {
      message: message,
      tone: tone
    };
    
    return this.http.post(`${this.apiUrl}/rewrite`, payload);
  }
}