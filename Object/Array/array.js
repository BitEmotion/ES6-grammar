// 프로퍼티

/*
    length
*/
{
    const arr = [1,2,3];
    console.log("arr.length : ", arr.length);
}

//static 메서드

/*
    from

    MDN INFO
    ES2015 이후, 클래스 구문은 내장 및 새 클래스의 상속을 가능케 했습니다. 
    그 결과로 Array.from과 같은 정적 메서드는 Array의 서브클래스에 의해 상속되며, 
    Array 대신 자신의 인스턴스를 만듭니다.
*/
{
    const arr = Array.from({length: 5}, (_, i) => i);
    console.log("Array.from", arr);
    //-> (5) [0, 1, 2, 3, 4]

    const arr2 = [1,2,3];
    arr2.from([1,2,3]);
    //-> Uncaught TypeError: arr.from is not a function at <anonymous>:1:5
}

/* 
    isArray
*/
{
    const arr = [1,2,3,4,5];
    console.log("Array.isArray", Array.isArray(arr));
}

/* 
    of
*/
{
    console.log("Array.of", Array.of(7));
}

// 프로토타입 메소드

/*
    concat
    기존배열을 변경하지 않습니다. 
    추가된 새로운 배열을 반환합니다.
*/

{
    const arr = [1,2,3];
    const arr2 = arr.concat([4,5,6]);
    console.log("concat",arr2);
}

/*
    entries
    entries() 메서드는 배열의 각 인덱스에 대한 키/값 쌍을 가지는 
    새로운 Array Iterator 객체를 반환합니다.
*/
{
    const arr = ['a', 'b', 'c'];
    const iter = arr.entries();
    iter.next().value;
    iter.next().value;
}
/*
    every
    if return false, iteration stop;
*/
{
    const arr = ['a', 'b', 'c'];
    const arr2 = arr.every(el => {
        if(el == 'b'){
            return false;
        }
        console.log("el", el);
        return true;
    });
    console.log("arr2 every", arr2);
}

/*
    some
    if return true, iteration stop;
*/
{
    const arr = ['a', 'b', 'c'];
    const arr2 = arr.some(el => {
        if(el == 'b'){
            return false;
        }
        console.log("el", el);
        return true;
    });
    console.log("arr2 some", arr2);
}

/*
    forEach
    for문의 상위호환
*/

{
    const arr = [1,2,3,4,5];
    arr.forEach((el,index) => {
        console.log(`el${i}`,el);
    });
}

/*
    map
    A -> B 
    배열 A를 배열 B로 mapping하는 함수
    A가 B로 가는 과정의 사상, 화살, 함수, 치역
*/

{
    const arr = [1,2,3,4,5];
    const ret_arr = arr.map((el,index) => {
        return el * el;
    });
    console.log("map",ret_arr);
}

/*
    reduce
    배열을 다른 구조로 변형시키는 메소드

    스칼라로 만들거나, 2차 3차 n차 배열로 바꾸거나
    객체로 변형할 수 있다.
    reduce로 map, some, every 등을 구현할 수 있다.
*/

{
    const arr = [1,2,3,4,5];
    arr.reduce((sum,el,index) => {
        return sum += el;
    },0);
}

/*
    filter
    배열요소를 이터레이션 돌면서
    true를 리턴하면, 요소를 남기고
    false를 리턴하면, 요소를 제거한
    새로운 배열을 리턴한다.

    for iteration
    if return false, delete 
       return true
*/
{
    const arr = [1,2,3,4,5];
    const ret_arr = arr.filter(el => {
        if((el % 2) != 0){
            return false;
        }
        return true;
    });
    console.log("filter",ret_arr);
}

/*
    push

    배열을 스택과 연결리스트로 본다면,
    스택의 추가와
<<<<<<< HEAD
    연결리스트의 삽입으로 볼 수 있습니다.
=======
    연결리스트의 삽입과 같습니다.
>>>>>>> 198135929b2344dc8cf3db91b2f1e612e5e15cd2
*/

{
    const arr = [1,2,3,4,5];
    arr.push(6);
    console.log("arr",arr);
}

/*
    pop

    배열을 스택과 연결리스트로 본다면,
    스택의 삭제와
<<<<<<< HEAD
    연결리스트의 제거로 볼 수 있습니다.
=======
    연결리스트의 제거와 같습니다.    
>>>>>>> 198135929b2344dc8cf3db91b2f1e612e5e15cd2
*/
{
    const arr = [1,2,3,4,5];
    arr.pop();
    console.log("arr",arr);
}

/*
    unshift
    이름은 비트연산에서 따옴

    배열을 큐로 본다면
    큐의 추가와 같습니다.
*/
{
    const arr = [1,2,3,4,5];
    arr.unshift(0);
    console.log("arr",arr);
}

/*
    shift
    이름은 비트연산에서 따옴

    배열을 큐로 본다면
    큐의 삭제와 같습니다.
*/
{
    const arr = [1,2,3,4,5];
    arr.unshift(0);
    console.log("arr",arr);
}

/*
    slice

    배열을 자릅니다.
    기존의 배열의 요소를 변화시키지 않고,
    새 배열을 리턴합니다.
*/
{
    const arr = [1,2,3,4,5];
    const arr2 = arr.slice(0,2);
    const arr3 = arr.slice(2,5);
    const ret_arr = arr2.concat(arr3);
    console.log("arr",arr);
    console.log("ret_arr",ret_arr);
}

/*
    splice
*/
{
    const arr = [1,2,3,4,5];
    const arr2 = arr.splice(0,2);
    console.log("arr2",arr2);
}

/*
    sort
*/
{
    const arr = [1,2,3,4,5];
    const ret_arr = arr.sort((el1, el2) => {
        return el2 - el1;
    });
    console.log("ret_arr",ret_arr);
    //ret_arr (5) [5, 4, 3, 2, 1]
}

/*
    includes
*/

{
    const arr = [1,2,3,4,5];
    arr.includes(3);
}

/*
    indexOf
    인자로 들어온 요소가 배열 속에 위치한 offset을 리턴한다 
*/
{
    const arr = [1,2,3,4,5];
    arr.indexOf(3);
    //3요소가 위치한 offset을 리턴한다 
}

/*
    join
*/

/*
    find
*/

/*
    fill
*/
