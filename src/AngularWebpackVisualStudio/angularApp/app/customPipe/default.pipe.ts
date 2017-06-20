import {Pipe} from '@angular/core';

@Pipe({
    name: 'default'
})

export class DefaultPipe {
    transform(value: string, fallback: string): string {
        let str = "";
        if (value) {
            str = value;
        } else {
            str = fallback;
        }
        return str;
    }
}