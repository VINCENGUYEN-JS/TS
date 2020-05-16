import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";

const numberCollections = new NumbersCollection([10, 3, -5, 0]);
numberCollections.sort();
console.log(numberCollections);

/**Sorting with character */
const characterCollection = new CharacterCollection("NhutNguyen");
characterCollection.sort();
console.log(characterCollection);
