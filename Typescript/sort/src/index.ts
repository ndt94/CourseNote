import { Sorter } from "./Sorter";
import { NumbersColletion } from "./NumbersColection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Init
const numbersCollection = new NumbersColletion([10, -1, 5, 2, 8]);
const charactersCollection = new CharactersCollection("XaayB");

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
// Bubble sort an array (abstract way)
numbersCollection.sort();

// Buble sort a string (abstract way)
charactersCollection.sort();
// Bubble sort an array (non abstract way)
// const sorter_number = new Sorter(numbersCollection);
// sorter_number.sort();

// Buble sort a string (non abstract way)
// const sorter_string = new Sorter(charactersCollection);
// sorter_string.sort();

// Buble sort a linked list (non abstract way)
// const sorter_linkled_list = new Sorter(linkedList);
// sorter_linkled_list.sort();

// Print out result
console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
