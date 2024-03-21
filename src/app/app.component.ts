import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from '../services/message.service';
import { AlertService } from '../services/alert.service';
import { CreateMessageResponse } from '../models/create-message-respose';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-app';
  public message: string = '';

  constructor(private messageService: MessageService, private alertService: AlertService) { }

  onSubmit() {
    this.messageService.createMessage(this.message).subscribe({
      next: (response: CreateMessageResponse) => {

        if (response.success)
          this.message = '';

        this.alertService.displayAlert(response.success, response.message);
      },
      error: (error: any) => {
        this.alertService.displayAlert(false, 'Unexpected error. Try again later.');
      }
    });
  }
}
