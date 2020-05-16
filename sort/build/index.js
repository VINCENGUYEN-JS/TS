"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numberCollections = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numberCollections.sort();
console.log(numberCollections);
/**Sorting with character */
var characterCollection = new CharactersCollection_1.CharacterCollection("NhutNguyen");
characterCollection.sort();
console.log(characterCollection);
