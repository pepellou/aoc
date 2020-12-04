const solve = expenses => {
    console.log(' ===[ PART ONE ]=============');
    console.log(
        expenses
            .filter( (x, _, a) => a.indexOf(2020 - x) >= 0 )
            .reduce( (x, p) => x * p, 1)
    );
    console.log(' ===[ PART TWO ]=============');
    console.log(
        expenses
            .map( (x, _, a) => [x].concat(a.filter( (y, _, a) => a.indexOf(2020 - x - y) >= 0 )) )
            .filter ( x => x.length > 1 )[0]
            .reduce( (x, p) => x * p, 1)
    );
}

require('fs').readFile(__dirname + '/input.txt', 'utf8', function(err, data) {
    if (err) throw err;
    solve(
        data
            .split('\n')
            .map( x => parseInt(x) );
    );
});
