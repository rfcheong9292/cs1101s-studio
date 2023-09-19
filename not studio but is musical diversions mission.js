function simplify_rhythm(rhythm) {
    function collective(xs, n) {
        return n <= 1
               ? xs
               : append(xs, collective(xs, n - 1));
    }
    display("ROUND");
    display_list(rhythm);
    if (is_null(rhythm)) {
        display("null");
        return null;
    } else if (is_number(rhythm)) {
        display("number");
        return rhythm;
    } else if (is_number(tail(rhythm))) {
        display("number tail");
        return simplify_rhythm(collective(head(rhythm), tail(rhythm)));
        
    } else if (is_list(rhythm)) {
        display("ISLIST");
        return accumulate((x, y) => append(simplify_rhythm(x), y), null, rhythm);
    } else {
        display("else");
        return rhythm;
    }
    // if (is_pair(rhythm)) {
    //     return simplify_rhythm(collective(head(rhythm), tail(rhythm)));
    //  } else {
    //      return null;
    //  } 
    //if (is_list(rhythm)) {
    //     return accumulate(append, null, rhythm);
    // } else {
    //     return rhythm;
    // }
    
    
    // start with is number, then is_number(tail)
}

// Test
const my_rhythm = pair(list(pair(list(1,2,0,1), 2), list(1,3,0,1,3,1,0,3)), 3);
const my_simple_rhythm = simplify_rhythm(my_rhythm);
display_list(my_simple_rhythm);

const correct_simple_rhythm = list(1,2,0,1,1,2,0,1,1,3,0,1,3,1,0,3,1,2,0,1,1,
        2,0,1,1,3,0,1,3,1,0,3,1,2,0,1,1,2,0,1,1,3,0,1,3,1,0,3);
equal(my_simple_rhythm, correct_simple_rhythm);





























































































































































































