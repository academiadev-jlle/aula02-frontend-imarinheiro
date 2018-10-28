const newForEach = (array, callback) => {
    array.forEach(function(item){
        callback(item);
    });
};

const dogs = ['nimeria', 'ghost', 'shaggydog', 'lady', 'graywind'];

newForEach(dogs, console.log);