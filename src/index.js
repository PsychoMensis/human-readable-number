module.exports = function toReadable (number) {
    let stringNumber = number.toString();
    if (number === 0){return 'zero'}
    if (stringNumber.length === 1){
        return one(number)}

    else if (stringNumber.length === 2){
        return ten(number)
    }
    else if (stringNumber.length === 3){
        return hundred(number)
    }

    function one (oneNumber){
        switch (oneNumber){
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            default: return '';
        }
      };

      function ten (number){
        if (Math.floor(number/10) === 1){
            switch (number){
                case 10: return 'ten';
                case 11: return 'eleven';
                case 12: return 'twelve';
                case 13: return 'thirteen';
                case 14: return 'fourteen';
                case 15: return 'fifteen';
                case 16: return 'sixteen';
                case 17: return 'seventeen'
                case 18: return 'eighteen'
                case 19: return 'nineteen'
            }
        }
        else{
            if (number%10 === 0)
            switch(Math.floor(number/10)){
                case 2: return 'twenty';
                case 3: return 'thirty';
                case 4: return 'forty';
                case 5: return 'fifty';
                case 6: return 'sixty';
                case 7: return 'seventy';
                case 8: return 'eighty';
                case 9: return 'ninety';
            }
            else{
            switch(Math.floor(number/10)){
                case 2: return 'twenty ' + one(number%10);
                case 3: return 'thirty ' + one(number%10);
                case 4: return 'forty ' + one(number%10);
                case 5: return 'fifty ' + one(number%10);
                case 6: return 'sixty ' + one(number%10);
                case 7: return 'seventy ' + one(number%10);
                case 8: return 'eighty ' + one(number%10);
                case 9: return 'ninety ' + one(number%10);
                }
            }
            
        }

    }
    function hundred(number){
        let add = '';
        if (ten(number%100) === undefined){
            add = one(number%100)
        }
        else {add = ten(number%100);}

        if (number%100 === 0){
            switch(Math.floor(number/100)){
                case 1: return 'one hundred';
                case 2: return 'two hundred';
                case 3: return 'three hundred';
                case 4: return 'four hundred';
                case 5: return 'five hundred';
                case 6: return 'six hundred';
                case 7: return 'seven hundred';
                case 8: return 'eight hundred';
                case 9: return 'nine hundred';
            }
        }
        
        else 
            add = (ten(number%100)||one(number%100))
            switch(Math.floor(number/100)){
                case 1: return 'one hundred ' + add;
                case 2: return 'two hundred ' + add;
                case 3: return 'three hundred ' + add;
                case 4: return 'four hundred ' + add;
                case 5: return 'five hundred ' + add;
                case 6: return 'six hundred ' + add;
                case 7: return 'seven hundred ' + add;
                case 8: return 'eight hundred ' + add;
                case 9: return 'nine hundred ' + add;
            }
    }
      
}
