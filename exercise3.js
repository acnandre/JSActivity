function xSign(height){
    for (let i = 0; i < height; i++) {
        let row = '';
        for (let j = 0; j < height; j++) {
            if (j === i || j === height - 1 - i) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
};
