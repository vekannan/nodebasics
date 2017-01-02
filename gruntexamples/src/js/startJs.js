

function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

a = 4;

obj.foo();
