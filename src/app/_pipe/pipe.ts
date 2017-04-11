import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchPipe',
  pure: false
})


export class SearchPipe implements PipeTransform {

  transform(data: any[], searchTerm: string): any[] {
      //console.log(searchTerm,data,"dfgdgdfgdg");
      if(data==null)  return [];
      searchTerm = searchTerm.toUpperCase();
      return data.filter(item => {
        return item.toUpperCase().indexOf(searchTerm) !== -1 
      });
  }
}
/*export class Pipe {
   name: 'searchPipe',
  pure: false
}*/