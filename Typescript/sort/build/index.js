"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersColection_1 = require("./NumbersColection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Init
var numbersCollection = new NumbersColection_1.NumbersColletion([10, -1, 5, 2, 8]);
var charactersCollection = new CharactersCollection_1.CharactersCollection("XaayB");
var linkedList = new LinkedList_1.LinkedList();
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
