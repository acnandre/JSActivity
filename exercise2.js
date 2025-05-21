function halfTriangle(length){
    let i = 0;
    let r = 0;
    let line = '';
    while(i < (length)){
        while( r < (length)){
            if(r<i){
                line += ' ';
            }
            else{
                line += '*';
            }
            r+=1;    
        };
        console.log(line)
        line = '';
        i+=1;
        r=0;
    };
};

halfTriangle(5);