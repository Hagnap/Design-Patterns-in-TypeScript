export interface IDevice {
    
    turnOff(): void;
    
    turnOn(): void;

    getIsOn(): boolean;

    displayVolume(): void;

    decreaseVolume(): void;

    increaseVolume(): void;

    displayChannelNumber(): void;

    decreaseChannelNumber(): void;

    increaseChannelNumber(): void;
}