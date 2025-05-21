function numToText(num){
    let numbers = {
        '1' : 'One',
        '2' : 'Two',
        '3' : 'Three',
        '4' : 'Four',
        '5' : 'Five',
        '6' : 'Six',
        '7' : 'Seven',
        '8' : 'Eight',
        '9' : 'Nine'
    };

    let numbersTens = {
        '1' : 'Ten',
        '2' : 'Twenty',
        '3' : 'Thirty',
        '4' : 'Forty',
        '5' : 'Fifty',
        '6' : 'Sixty',
        '7' : 'Seventy',
        '8' : 'Eighty',
        '9' : 'Ninety'
    };

    numStr= num.toString()

    switch(numStr.length){
        case(1):
            console.log(numbers[numStr])
            break;
        case(2):
            console.log(numbersTens[numStr[0]] + " " + numbers[numStr[1]])
            break;
        case(3):
            console.log(numbers[numStr[0]] + " Hundred " + numbersTens[numStr[1]] + " " + numbers[numStr[2]]);
            break;
    };
};

numToText(999);