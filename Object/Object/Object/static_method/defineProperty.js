/*
    defineProperty
    3번째 인자(descriptor)를 명시적으로 설정하지 않을 시 
    코드만보고 오브젝트의 프로퍼티가
    열거가 가능한지, 변경이 가능한지 알 수 없다.
    
    자바스크립트는 확실히
    강타입이 아닌 언어
    헷갈림을 유발하는 언어
    명시적인 강제를 허용하지 않는 언어다

    javascript Object 레퍼런스 보면
    왜 c# 개발자가
    타입스크립트를 만들었는지 알 수 있다.
*/

/*
    mdn 예제 1
*/
// __proto__ 사용
var obj = {};
var descriptor = Object.create(null); // 상속받은 속성 없음
// 기본으로 열거 불가, 설정 불가, 변경 불가
descriptor.value = 'static';
Object.defineProperty(obj, 'key', descriptor);

/*
    mdn 예제 2
    // 명시적
*/
   
Object.defineProperty(obj, 'key', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'static'
});


const object = {};
Object.defineProperty(object, 'property1', {
    value: 1,
    writable: true
});

Object.defineProperty(object, 'a', {
    value: 37,
    writable: true,
    enumerable: true,
    configurable: true
});

console.log("object",object);
/*
    속성
    value, get, set, enumerable, writable, configurable
*/
