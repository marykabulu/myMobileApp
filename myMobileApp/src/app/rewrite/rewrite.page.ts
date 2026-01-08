import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonTextarea, 
  IonButton, 
  IonSelect,
  IonSelectOption,
  IonSpinner
} from '@ionic/angular/standalone';
import { AwsService } from '../services/aws.service';

@Component({
  selector: 'app-rewrite',
  templateUrl: './rewrite.page.html',
  styleUrls: ['./rewrite.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonTextarea, 
    IonButton, 
    IonSelect,
    IonSelectOption,
    IonSpinner,
    CommonModule, 
    FormsModule
  ]
})
export class RewritePage {

  originalMessage: string = '';
  selectedTone: string = '';
  rewrittenMessage: string = '';
  isLoading: boolean = false;

  constructor(private awsService: AwsService) {}

  rewriteMessage() {
    if (!this.originalMessage || !this.selectedTone) {
      this.rewrittenMessage = 'Please enter a message and select a tone.';
      return;
    }

    this.isLoading = true;
    this.rewrittenMessage = '';

    this.awsService.rewriteText(this.originalMessage, this.selectedTone)
      .subscribe({
        next: (response) => {
          this.rewrittenMessage = response.rewrittenText || response.message;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error:', error);
          this.rewrittenMessage = 'Error connecting to server. Please try again.';
          this.isLoading = false;
        }
      });
  }
}
