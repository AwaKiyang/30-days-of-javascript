//A regular expression or RegExp is an expression that helps to find pattern in data
//RegExp takes two parameters the search pattern and an optional flag
//A pattern could be a text or any form of pattern which some sort of similarity
//A flag are optional parameters in regular expression which determine the type of searching
//g: a global flag which means looking for a pattern in a whole text
//i: case insensitive flag(itsearches for both lowercase and uppercase)
//m: ultiline

//creating a pattern
let pattern = 'love'
let regEx = new RegExp(pattern) //declring without a flag
let flag = 'gi'
let regEx2 = new RegExp(pattern,flag) //declaring with flag and pattern
let regEx3 = new RegExp('love','gi') //decalring and assiging at the same time

let regEx4 = /love/gi  //write a regular expression with flag without regEx constructor

//RegEx methods
//test() to test for macth in a string
const str ='I love Javascript'
const felling = /love/
const result = felling.test(str)
console.log(result)

//macth() to return an array containing all of the matches
console.log(str.match(pattern)) //return all data concerning match
console.log(str.match(/love/g)) //only returns match

//search() test for a match in a string and return its index, or -1 if match not found
console.log(str.search(/love/g)) //returns index ox love
console.log(str.search(/waar/g)) //returns -1 since waar is not in string

//replacing a substring replace()
const txt = 'Python is the most beautiful language that a human begin has ever created.\\ I recommend python for a first programming language '
let matchRepalce = txt.replace(/Python|python/, 'javascript')
let matchRepalce2 = txt.replace(/Python|python/g, 'javascript') //by adding g flag we ensure a scan through the whole string
console.log(matchRepalce)
console.log(matchRepalce2)

//another use case
waar = '%I% %lo%ve% %you%'
console.log(waar.replace(/%/g, ''))
console.log(waar.match(/[a-z]/g))

//special chraters to use with Regexp
//[]
/**[]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
 *
 */
const doc = 'An Apple and banana are fruits. An cliche says an Apple a day keeps the doctor away has been replaced by a banana a day keeps the doctor far away'
console.log(doc.match(/[Aa]pple/))
console.log(doc.match(/[Aa]pple/g))
/**
 * |: Either or
r'apple|banana' mean either of an apple or a banana
 */
console.log(doc.match(/[Aa]pple|[Bb]anana/g)) // | either online
/**
 * \: uses to escape special characters
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
 */
const exam = 'This regular expression example was made in January 12,  2020.'
console.log(exam.match(/\d/g))
/**
 * +: one or more times
r'[a]+' means at least once or more times
 */
console.log(exam.match(/\d+/g))
/**
 * .: any charater exept the new line
 */
console.log(doc.match(/[a]./g))
/**
 * *: zero or more times
r'[a]*' means a optional or it can occur many times.
 */
console.log(doc.match(/[a].*/g))
/**
 * ?: zero or one times
r'[a]?' means zero times or once
 */ 
const verify = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
console.log(verify.match(/[Ee]-?mail/g)) //?means optional thepattern may not occur or it may occur once

//We can specify the length of the substring we look for in a text, using a curly bracket. Let us see, how ot use RegExp quantifiers. 
// Imagine, we are interested in substring that their length are 4 characters

const txt1 = 'This regular expression example was made in December 6,  2019.'
const patt = /\b\w{4}\b/g  //  exactly four character words 
    // \b: word bounder, matches with the beginning or ending of a word
    // \w: one word charater
const matches = txt1.match(patt)
console.log(matches)  //['This', 'made', '2019']

console.log(txt1.match(/\b[A-Za-z]{4}\b/g)) //exactly four character  words without numbers
//{3,}: At least 3 characters
//{3,8}: 3 to 8 characters
console.log(txt1.match(/\d{4}/g)) //word with four numbers
console.log(txt1.match(/\d{1,4}/g))

/**
 * ^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
 */
console.log(txt1.match(/^This/g))

//test
patty = /^[A-Za-z]{3,12}$/
console.log(patty.test('Abeseneh'))








