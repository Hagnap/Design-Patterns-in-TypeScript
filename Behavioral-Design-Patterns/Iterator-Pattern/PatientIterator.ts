import { Patient } from "./Patient";
import { Iterator } from "./Iterator";

export class PatientArrayIterator implements Iterator<Patient> {

    private patients: Array<Patient>;
    private position: number;

    public constructor(_patients: Array<Patient>) {
        this.patients = _patients;
        this.position = 0;
    }

    public next(): Patient {

        // Update position & return patient at the new position
        this.position++;
        return this.patients[this.position];
    }

    public currentItem(): Patient {

        // Return patient at the current position
        return this.patients[this.position];
    }

    public hasNext(): boolean {

        // If position + 1 is less than the length of the patients array
        // then logically speaking there will be a patient after the 
        // current patient.
        if(this.position + 1 <= this.patients.length) {
            return true;
        }

        return false;
    }
}