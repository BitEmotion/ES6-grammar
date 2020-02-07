/*
    iterable protocol
    반복가능?한지 여부
*/
{
    const iterable =  {};
    iterable[Symbol.iterator] = function*() {
        yield 1;
        yield 2;
        yield 3;
    };
    [...iterable];
}
