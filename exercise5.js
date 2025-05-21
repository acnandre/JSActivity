let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"]
let line = ''
let i = 0;
while (i < color.length){
    switch(i){
        case 0:
            line += i+1;
            line += o[1];
            line += ' choice is '
            line += color[i]
            break;
        case 1:
            line += i+1;
            line += o[2];
            line += ' choice is '
            line += color[i]
            break;
        case 2:
            line += i+1;
            line += o[3];
            line += ' choice is '
            line += color[i]
            break;
        default:
            line += i+1;
            line += o[0];
            line += ' choice is '
            line += color[i]
            break;
    }
    console.log(line);
    line = '';
    i+=1;
};