export class Quiz {
    question: string;
    answer: string;
    hide: boolean;
    buttonText: string;
    constructor(question: string, answer: string) {
        this.question = question;
        this.answer = answer;
        this.hide = true;
        this.buttonText = "Show Answer";
    }

    toggle() {
        this.hide = !this.hide;
        this.buttonText = this.hide ? "Show Answer" : "Hide Answer";
    }
}