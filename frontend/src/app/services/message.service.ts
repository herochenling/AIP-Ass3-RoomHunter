import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<any>();

    //send message to subscriber
    sendMessage(message: Object) {
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }

    //get message
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
