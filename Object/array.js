//length
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
*/
{

}

/*
    some
*/
{

}