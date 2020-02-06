/*
    Object.prototype.seal

    Object.seal() 메서드는 객체를 밀봉합니다.
    새로운 속성 추가 불가, 속성 설정 불가능
    그러나 쓰기 가능한 속성의 값은 밀봉 후에도 변경할 수 있습니다
*/

const object1 = {
    property1: 42
};
  
Object.seal(object1);