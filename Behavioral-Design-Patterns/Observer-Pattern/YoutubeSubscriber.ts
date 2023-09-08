import { IObserver } from "./IObserver";
import { YoutubeChannel } from "./YoutubeChannel";

export class YoutubeSubscriber implements IObserver {

    // Stores a reference to the subject and a state (name of the most recent video)
    private state: string;
    private subject: YoutubeChannel;

    constructor(_subject: YoutubeChannel) {

        // Set reference to the subject and then register the observer to the subject
        this.subject = _subject;
        this.subject.register(this);
        
        this.state = this.subject.getState();
    }

    public update(): void {
        this.state = this.subject.getState();
    }

    public logStatus(): string {
        return this.state;
    }
}