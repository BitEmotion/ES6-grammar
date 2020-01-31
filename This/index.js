const arrowFunc = () => {
    console.log("this arrowFunc",this);
}

{
    function func1(){
        console.log("this func1",this);
        function func2(){
            console.log("this func2",this);
        }
        func2();
    }
    func1();
}

{
    function func(){
        console.log("this func",this);
        return function(){
            console.log("this inner func",this);
        }
    }
    func();
}

{
    function func(){
        console.log("this func",this);
        return function a(){
            console.log("this inner func",this);
            return function b(){
                a();
                console.log("this innerinner func",this);
            }
        }
    }
    func();
}

{
    const obj = {
        arrowFunc:() => {
            console.log("this arrowFunc",this);
        },
        func:function(){
            console.log("this func",this);
        }
    }

    obj.arrowFunc();
    obj.func();
}

{
    
}