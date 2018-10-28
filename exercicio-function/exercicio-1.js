let minFilter = (...vetor) =>{
    let less = Infinity;
    vetor.forEach(function(current){
        if (current < less) less = current;
    });
    return less;
};

console.log(minFilter(885, 984, 444, 528, 528));
