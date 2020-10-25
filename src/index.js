module.exports = function toReadable (number) {

    const numbers = {
        1: "one",       2: "two",        3: "three",     4: "four",      5: "five",
        6: "six",       7: "seven",      8: "eight",     9: "nine",     10: "ten",
        11: "eleven",  12: "twelve",    13: "thirteen", 14: "fourteen", 15: "fifteen",
        16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
        30: "thirty",  40: "forty",     50: "fifty",    60: "sixty",    70: "seventy",
        80: "eighty",  90: "ninety"
    };

    let str1 = ''+(number % 1000);
    let str2 = '' + (number % 100);
    let str3 = '' + (number % 10);
    let hundred = ' hundred';
    let read='';

    if (number === 0){
        return 'zero';
    };
    

    if (number >=100){
        read += numbers[str1.substring(0,1)] + hundred;
    }

    if( number % 100 >0){
        if( str2 <=20){
            read += ' '+numbers[str2.substring(0,2)];
        }
        else{
            read += ' '+numbers[str2.substring(0,1)+'0'];

            if(str3>0){
                read += ' '+numbers[str3.substring(0,1)];
            }
        }
        
        
        
    }

    return read.trim();
}

