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
