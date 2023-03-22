const nums= [1,2,3,4];
const sum = (a,b)=> a+b;
const  newnums = [];

for(let i =0; i< nums.length - 1 ; i ++ ){
    let  s = sum(nums[i],nums[i+1]);

    console.log(s)
}


nums.forEach((_,i) => { if ( i < nums.length - 1 ){
        const result = sum(nums[i],nums[i + 1]);
        newnums.push(result);
}
}
);
console.log(newnums);
//foreach dosen't return 

