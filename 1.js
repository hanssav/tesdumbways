
let a = "17321"
let b = "16461"
let c = "1001"


function checkPalindrome(inputString) {
    let strArray = inputString.toLowerCase().split('');
    let newArr = strArray.join('');
    let revArr =  [...newArr].reverse().join('')

    if ( newArr === revArr) {
        return "Bilangan palindrome";
    } else {
        return "bukan Bilangan palindrome";
    }
    
}

console.log(a +" Merupakan "+ checkPalindrome(a))
console.log(b +" Merupakan "+ checkPalindrome(b))
console.log(c +" Merupakan "+ checkPalindrome(c))

