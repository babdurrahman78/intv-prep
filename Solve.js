// Counting 1 to 100
const count = () => {
    for(let i = 1; i<=100; i++){
        console.log(i);
    }
}

// check whether given string start with a capital letter
const isCapital = (str) => {
    if(str[0] === str[0].toUpperCase()){
       return console.log('first letter is capital')
    }
    
    return console.log('false')
}

//is prime?
const isPrime = (x) => {
    if(x == 2){
        return console.log('false');
    }
    for(let i=2;i<=x/2;i++){
        console.log(i);
        if(x % i == 0 ){
            return console.log('false');
        }
    }
    return console.log('true');
} 

// is Palindrome
const isPalindrome = (str) => {
    str = str.replace(/\s/g,"").toLowerCase();
    for(let i=0;i<str.length;i++){
        if(str[i] !== str[str.length-1-i]){
            return console.log('false')
        }
    }
    return console.log('true')
}

// factorial
const factorial = (x) => {
    let res = 1;
    for(let i = x;i > 0; i--){
        res *= i;
    }
    return console.log(res);
}


