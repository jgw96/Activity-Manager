import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'byteToMb'
})
export class ByteToMb implements PipeTransform {
    transform(value: number, exponent: string): number {
        let mb = value / 1024 / 1024
        return Math.round(mb);
    }
}