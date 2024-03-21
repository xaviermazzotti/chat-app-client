import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    constructor() { }

    public displayAlert(success: boolean, message: string) {
        var emoji = success ? '✅' : '❌';
        alert(`${emoji} - ${message}`);
    }
}