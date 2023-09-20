import { Iterator } from "./Iterator";
import { Collection } from "./Collection";
import { Patient } from "./Patient";
import { PatientArrayIterator } from "./PatientArrayIterator";

export class PatientArray implements Collection<Patient> {

    public patients: Array<Patient>;

    public constructor() {
        this.patients = new Array<Patient>();
    }

    public iterator(): Iterator<Patient> {
        return new PatientArrayIterator(this.patients);
    }
}