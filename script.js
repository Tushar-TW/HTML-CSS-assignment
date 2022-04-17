const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: "hello",
    },
};

const obj2 = {
    a: 1,
    b: 2,
    c: {
        d: "hello",
    },
}
    

const compare = (func1, func2) => {
    console.log(typeof func1 === typeof func2);
    
}
compare(obj1,obj2);


