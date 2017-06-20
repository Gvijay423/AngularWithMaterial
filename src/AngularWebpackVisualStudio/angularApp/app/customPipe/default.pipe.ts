import {Pipe} from '@angular/core';

@Pipe({
    name: 'default'
})

export class DefaultPipe {
    transform(value: string, fallback: string, append: boolean): string {
        let str = "";
        if (value) {
            str = value;
        } else {
            str = fallback;
        }
        if (append) {
            str += " Appended String";
        }
        return str;
    }
}