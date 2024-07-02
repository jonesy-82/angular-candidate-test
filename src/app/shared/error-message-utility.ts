import { HttpErrorResponse } from '@angular/common/http';

export default class ErrorMessageUtility {
    // In the real world, we would send the server to a remote logging infrastructure (ex. datadog)
    // instead of logging it to the console

    static handleHttpError(err: HttpErrorResponse): string {
        if (err.error instanceof ErrorEvent) {
            return this.handleErrorEvent(err.error);
        } else {
            // The backend returned an unsuccessful response code. The
            // response body my contain clues as to what went wrong...
            let errorMessage = `Server returned code: ${err.status}`;
            console.error(errorMessage);
            return errorMessage;
        }
    }

    static handleErrorEvent(err: ErrorEvent): string {
        // A client-side or network error occurred. Handle it accordingly
        let errorMessage = `An error occurred: ${err.error.message}`;
        console.error(errorMessage);
        return errorMessage;
    }
}