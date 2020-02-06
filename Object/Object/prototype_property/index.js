/*
    JavaScript에서 거의 모든 객체는 Object의 인스턴스입니다. 
    일반적인 객체는 Object.prototype 에서 속성과 메서드를 상속받으며, 
    그 중 일부는 (오버라이드 등으로 인해) 숨겨질 수 있습니다. 
    그러나, 의도적으로 Object를 생성할 때 (Object.create(null) 처럼) 이를 피할 수도 있고, 
    Object.setPrototypeOf 등을 통해 나중에 무효화할 수도 있습니다.
*/