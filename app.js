const obj_claves = {
    "G":['g','G'],
    "O":['o', '0', '()', '[]', '<>','O'],
    "L":['l','I','L'],
    "E":['e',3,'3','E']
}

const verifica = (word) =>{
    var result = true;
    var palabra = word;
    console.log(palabra);
    palabra = palabra.replace('\(\)',"O").replace('\(\)',"O");
    palabra = palabra.replace('[]','O');
    palabra = palabra.replace('<>','O').replace('<>','O');
    console.log(palabra);

    list = [];
    palabra.split('').forEach(element =>{
        console.log(element);
        if(obj_claves['G'].includes(element.trim())){
            list.push('G');
        }else if(obj_claves['O'].includes(element.trim())){
            list.push('O');
        }else if(obj_claves['L'].includes(element.trim())){
            list.push('L');
        }else if(obj_claves['E'].includes(element.trim())){
            list.push('E');
        }else{
            console.log('este elemento:', element,'a');
            list.push(element)
            result = false;
        }
    })
    console.log('final:',list.join(''), result);
    if(list.join('') === 'GOOGLE' && result){
        return true;
    }else{
        return false;
    }
}

//console.log(verifica('google'));
//console.log(verifica('g<><>GI3'));
//console.log(verifica('g google'));

