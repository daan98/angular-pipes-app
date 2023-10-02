import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'CanFly'
})
export class CanFlyPipe implements PipeTransform {
    transform(value: boolean) {
        return value ? 'Can Fly' : 'Can Not Fly';
    }
}