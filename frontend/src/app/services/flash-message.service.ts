import { Injectable } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';

@Injectable({
    providedIn: 'root'
})
export class FlashMessageService {
    msgType: String;

    constructor(private ngFlashMessageService: NgFlashMessageService) {}

    /**
     * Flush message shows error or sucess message
     */
    showMessage(msg, isSuccess) {
        if (isSuccess) {
            this.msgType = 'success';
        } else {
            this.msgType = 'danger';
        }
        this.ngFlashMessageService.showFlashMessage({
            messages: [msg],
            dismissible: true,
            timeout: 5000, //5 sec
            type: this.msgType.toString()
        });
    }
}
