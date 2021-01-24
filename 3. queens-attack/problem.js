'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {
    console.log(n, k, r_q, c_q, obstacles);
    var square_N = [], square_NE = [], square_E = [], square_SE = [], square_S = [], square_SW = [], square_W = [], square_NW = [];

    var valida_obstacles = (row,column) => {
        var result = false;
        if (obstacles.length > 0){
            obstacles.forEach( obstac => {
                if ( obstac[0] == row && obstac[1] == column ){
                    result = true;
                }
            });
        }
        return result;
    };
    //North
    if (r_q < n){
        for( let row=r_q+1; row<=n; row++ ){
            if ( valida_obstacles(row,c_q) ){
                break;
            } else{
                square_N.push([row,c_q]);
            }            
        }
    };
    //South
    if (r_q > 1){
        for( let row=r_q-1; row>=1; row-- ){
            if ( valida_obstacles(row,c_q) ){
                break;
            } else{
                square_S.push([row,c_q]);
            }    
        }
    };
    //East
    if (c_q < n){
        for( let col=c_q+1; col<=n; col++ ){
            if ( valida_obstacles(r_q,col) ){
                break;
            } else{
                square_E.push([r_q,col]);
            }            
        }
    };
    //West
    if (c_q > 1){
        for( let col=c_q-1; col>=1; col-- ){
            if ( valida_obstacles(r_q,col) ){
                break;
            } else{
                square_W.push([r_q,col]);
            }            
        }
    };
    //North East
    if (r_q < n && c_q < n){
        var column = c_q;
        var obstacule = false;
        for( let i=r_q+1; i<=n && obstacule == false; i++ ){
            for ( let j = column+1; j ==column+1 && j <= n; j++){
                if ( valida_obstacles(i,j) ){
                    obstacule = true;
                    break;
                } else{
                    square_NE.push([i,j]);
                } 
            }                
        column += 1;
        }
    };
    //South West
    if (r_q > 1 && c_q > 1){
        var column = c_q;
        var obstacule = false;
        for( let i=r_q-1; i>=1 && obstacule == false; i-- ){
            for ( let j = column-1; j ==column-1 && j >=1; j--){
                if ( valida_obstacles(i,j) ){
                    obstacule = true;
                    break;
                } else{
                    square_SW.push([i,j]);
                } 
            }                
        column -= 1;
        }
    };
    //North West
    if (r_q < n && c_q < n){
        var column = c_q;
        var obstacule = false;
        for( let i=r_q+1; i<=n && obstacule == false; i++ ){
            for ( let j = column-1; j ==column-1 && j >=1; j--){
                if ( valida_obstacles(i,j) ){
                    obstacule = true;
                    break;
                } else{
                    square_NW.push([i,j]);
                }
            }                
        column -= 1;
        }
    };
    //South East
    if (r_q < n && c_q < n){
        var column = c_q;
        var obstacule = false;
        for( let i=r_q-1; i>=1 && obstacule == false; i-- ){
            for ( let j = column+1; j ==column+1 && j <= n; j++){
                if ( valida_obstacles(i,j) ){
                    obstacule = true;
                    break;
                } else{
                    square_SE.push([i,j]);
                }
            }                
        column += 1;
        }
    };
    
    return (square_N.length + square_NE.length + square_E.length + square_SE.length + square_S.length + square_SW.length + square_W.length + square_NW.length);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const r_qC_q = readLine().split(' ');

    const r_q = parseInt(r_qC_q[0], 10);

    const c_q = parseInt(r_qC_q[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    let result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + "\n");

    ws.end();
}
