import { environment } from '../environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(private http: HttpClient) { }

    public createMessage(message: string): Observable<any> {

        var createMessageRequest = {
            message: message
        };

        const url = `${environment.apiUrl}/api/message`;
        return this.http.post<any>(url, createMessageRequest);
    }
}