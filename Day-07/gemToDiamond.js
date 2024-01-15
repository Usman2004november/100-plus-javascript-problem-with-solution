/* 

*/
function gemToDiamond(x, y, z){
    if(typeof x !== 'number' || typeof y!== 'number' || typeof z !== 'number'){
        return 'please provide me valid number input'
    }else if(x < 0 || y < 0 || z < 0){
        console.log('please provide me all positive number');
    }else{
        const friend1 = 21
        const friend2 = 32
        const friend3 = 43
        const total = (x * friend1) + (y * friend2) + (z * friend3)
        if(total > 2000){
            return total - 2000
        }else{
            return total;
        }
    }

}
// console.log(gemToDiamond(1, 1, 1));
// console.log(gemToDiamond(20, 200, 50));
console.log(gemToDiamond(100, 5, 1));