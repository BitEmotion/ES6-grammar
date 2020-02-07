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
    }; // <- 참고로 세미콜론(;) 안 쓰면 에러난다
    [...iterable];
}

/*
    iterator protocol
    반복의 형식 순서에 대한 규약
*/
{
    const iterator = () => {
        const arr = [1,2,3,4,5];
        let i = 0;
        let value = '';
        let isBoolean = false;
        return {
            next: () => {
                if(i == (arr.length -1)){
                    isBoolean = true;
                }
                value = arr[i];
                i++;
                return {
                    value,
                    done: isBoolean
                }
            }
        }
    }
    const iter = iterator()
    iter.next();
}