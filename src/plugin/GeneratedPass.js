const abc = 'a, b, c, ch, d, e, f, g, h, i, j, k, l, ll, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z';
const number = '1, 2, 3, 4, 5, 6, 7, 8, 9, 0';
const simbol = " ', : , ! , @ , # , $ , ^ , ) , & , * ,  % ,  -"; 

const arrayOfArrays  = [ ];

const getRandomNumber = ( min, max )=>{
    return Math.floor(Math.random() * (max - min + 1));
}

export function generatedPass ( passwordLength, botonsitos ) {
    var pass = [ ];
    
    switch ( true ){
        case botonsitos[0].letters && botonsitos[1].numbers, botonsitos[2].symbols :
            arrayOfArrays.push( abc.split(','), number.split(','), simbol.split(',') );
            break;
        case botonsitos[0].letters && botonsitos[1].numbers :
            arrayOfArrays.push( abc.split(','), number.split(',')  );
            break;
        case botonsitos[1].numbers && botonsitos[2].symbols :
            arrayOfArrays.push( number.split(','), simbol );
            break;
        case botonsitos[0].letters :
            arrayOfArrays.push( abc.split(',') );
            break;
        case botonsitos[1].numbers :
            arrayOfArrays.push( number.split(',') );
            break;
        case botonsitos[2].symbols :
            arrayOfArrays.push( simbol.split(',') );
            break;
    }
    for( let i = 0 ; i < passwordLength; i++ ){
        
        const myArr = arrayOfArrays[getRandomNumber(0, arrayOfArrays.length - 1)];
        const randomCharacter = myArr[getRandomNumber(0, myArr.length - 1)];

        pass.push(randomCharacter);
        
    }
    pass = pass.join("");
    return pass;
}
