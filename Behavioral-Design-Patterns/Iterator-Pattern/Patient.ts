export class Patient {
    private name: string;
    private appointmentNumber: number;

    public constructor(_name: string, _appointmentNumber: number) {
        this.name = _name;
        this.appointmentNumber = _appointmentNumber;
    }

    public getName(): string {
        return this.name;
    }

    public getAppointmentNumber(): number {
        return this.appointmentNumber;
    }
}