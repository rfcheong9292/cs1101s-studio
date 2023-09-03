









function pasca1(row, position) {
    return row === 0
    ? 1
    : position === 0
    ? pasca1(row - 1, position)
    : position === row
    ? pasca1(row - 1, position -1)
    : pasca1(row - 1, position) + pasca1(row -1, position -1);
}

display(pasca1(4, 2));














