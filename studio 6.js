/*
//1
function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y), null, xs);
}

const test_list = list(1, 2, 3, 2, 3, 4, 5);

my_map(x => x + 1, test_list);

//2
function remove_duplicates(xs) {
    //return accumulate((x, y) => pair(x, remove_all(x, y)), null, xs);
    return accumulate((x, y) => pair(x, filter(a => a !== x, y)), null, xs);
}

remove_duplicates(test_list);
*/
//3
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
// Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
// Combinations that do not use the head coin
// for the remaining amount.
        const combi_B = makeup_amount(x - head(coins), tail(coins));
// Combinations that use the head coin
        const combi_C = map(c => pair(head(coins), c), combi_B);
        return append(combi_A, combi_C);
    }
}


display_list(makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50)));


// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
// list(1, 20, 1), list(1, 10, 5, 5, 1),
// list(1, 10, 5, 1, 5))



































































































































































































