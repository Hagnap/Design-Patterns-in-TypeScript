import { Iterator } from "./Iterator";
import { List } from "./List";
import { Patient } from "./Patient";
import { PatientArrayIterator } from "./PatientIterator";

export class PatientArray implements List<Patient> {

    public patients: Array<Patient>;

    public constructor() {
        this.patients = new Array<Patient>();
    }

    public iterator(): Iterator<Patient> {
        return new PatientArrayIterator(this.patients);
    }
}