const sequence : number[] = Array.from(Array(10).keys());
const animals : string[] = ['passaro', 'gato', 'cachorro', 'coelho'];
const stringsAndNumbers : any[] = [1, 'one', 2, 'two', 3, 'three'];
//*************************************** */
interface Book {
  title: string;
	author?: string;
 }

function addToLibrary(item: Book) {
  const response = `Adicionado o livro ${item.title} à sua biblioteca.`;
  console.log(response);
}
const book1: Book = {
	title: 'Novo livro',
	author: 'author 1'
}
console.log(addToLibrary(book1));
//*************************************** */
function cashAdd(money : Number, message?:String): any {
  if (message === undefined){
    return money  
  } else {
    return `Valor de R$ ${money} adicionado a conta ${message}.`;
  }
}
console.log(cashAdd(144,'1'));
//************************************** */
function passValue(value: any): any {
  return value;
}
console.log(passValue('String'));
console.log(passValue(1));

function passValue2<T>(value: T): T {
  return value;
}
console.log(passValue2(<string>"generics"));
//console.log(passValue2(<string> 1));

