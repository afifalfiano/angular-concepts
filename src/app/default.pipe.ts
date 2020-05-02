import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {

  transform(value: string, fallback: string) {
    let image = '';
    if(value) {
      image = value;
    }else{
     image = fallback;
  }

  // tslint:disable-next-line:align
  return image;
}

}
