function bubblesort_list(L) {
    // Your solution here.
    function swap(x) {
        const temp = head(x);
        set_head(x, head(tail(x)));
        set_head(tail(x), temp);
    }
    function onesort(L) {
        if (!is_null(tail(L)) && head(L) > head((tail(L)))) {
            swap(L);
            onesort(tail(L));
        } else if (!is_null(tail(L))){
            onesort(tail(L));
        }
    }
    for (let i = 0; i < length(L); i = i + 1) {
        onesort(L);
    }
}

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
// should show [1, [2, [3, [4, [5, null]]]]]
LL;

const mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ?   5 :
           kinds_of_coins === 2 ?  10 :
           kinds_of_coins === 3 ?  20 :
           kinds_of_coins === 4 ?  50 :
           kinds_of_coins === 5 ? 100 : 0;
}

// The non-memoized version.
function cc(amount, kinds_of_coins) {
    return amount === 0
           ? 1
           : amount < 0 || kinds_of_coins === 0
           ? 0
           : cc(amount, kinds_of_coins - 1)
             +
             cc(amount - first_denomination(kinds_of_coins),
                kinds_of_coins);
}

// The memoized version.
// n is the amount in cents, and k is the number of denominations.
function mcc(n, k) {
    if (!is_undefined(read(n, k))) {
        return read(n, k);
    } else {
        const value = cc(n, k);
        write(n, k, value);
        return value;
    }
    // Your solution here.
    
}

mcc(365, 5);  // Expected result: 1730