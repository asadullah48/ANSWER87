// Q 87
// This function takes out the first 10 characters from any text
function extractFirstTenChars(str) {
    return str.substring(0, 5); // Gets characters from start to position 5
}
// Example: Taking the first 5 characters of a sentence
console.log(extractFirstTenChars("Hi, JavaScript world!")); // Shows the first 5 characters
// It gives us a smaller piece of the original text, just the beginning part.
