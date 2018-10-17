import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

/**
 *  The class used for delivering filter result to posts-component
 */
export class DeliveryService {
    private subject = new Subject<any>();

    /** 
     * send message to subscriber (posts component)
     */
    sendMessage(message: Object) {
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }

    /** 
     * get message
     */
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
