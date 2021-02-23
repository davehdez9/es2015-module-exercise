/** This file should import the fruit and both array helpers. It should then:
 * 
 * - Randomly draw a fruit from the array
 * - Log the Message "I'd like RANDOMFRUIT, please."
 * - Log the Message "Here you go: RANDOMFRUIT"
 * - Log the Message "Delicious! May I have another?"
 * - Remove the fruit from the array of fruits.
 * - Log the messages: "I am sorry, We're all out, we have FRUITSLEFT left"
 */

import { choice, remove } from './helpers'
import fruits from './foods'

let randomFruit = choice(fruits)

console.log(`I'd like ${randomFruit}, please.`)
console.log(`Here you go: ${randomFruit}.`)
console.log(`Delicious!, May I have another?`)

let fruitsLeft = remove(fruits, randomFruit)

console.log(`I am sorry, We're all out, we have ${fruitsLeft} left.`)



