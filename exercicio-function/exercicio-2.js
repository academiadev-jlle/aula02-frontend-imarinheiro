const newForEach = (array, callback) => {
    array.forEach(function(item){
        callback(item);
    });
};

const dogs = ['nimeria', 'ghost', 'shaggydog', 'lady', 'graywind', 'summer'];

newForEach(dogs, console.log);
