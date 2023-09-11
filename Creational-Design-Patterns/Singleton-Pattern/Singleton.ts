export class Singleton {
    
    private static instance: Singleton | null = null;
    private data: string = "";

    constructor() {
        if(Singleton.instance == null) {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }

    public static getInstance(): Singleton {
        if(Singleton.instance == null) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public getData(): string {
        return this.data;
    }

    public setData(_data: string): void {
        this.data = _data;
    }
}