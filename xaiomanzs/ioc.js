// class A {
// 	name: string
// 	// constructor() {
// 	// 	this.name = '21silva'
// 	// }
// 	constructor(name: string) {
// 		this.name = name
// 	}
// }
// class B {
// 	a: any
// 	constructor() {
// 		this.a = new A().name
// 	}
// }
// class C {
// 	a: any
// 	constructor() {
// 		this.a = new A().name
// 	}
// }
//  为了解决上面的报错问题（因为他们强耦合）：
// IOC 和 DI 
var A = /** @class */ (function () {
    function A(name) {
        this.name = name;
    }
    return A;
}());
var C = /** @class */ (function () {
    function C(name) {
        this.name = name;
    }
    return C;
}());
//中间件用于解耦
var Container = /** @class */ (function () {
    function Container() {
        this.modeuls = {};
    }
    Container.prototype.provide = function (key, modeuls) {
        this.modeuls[key] = modeuls;
    };
    Container.prototype.get = function (key) {
        return this.modeuls[key];
    };
    return Container;
}());
var mo = new Container();
mo.provide('a', new A('小满1'));
mo.provide('c', new C('小满2'));
var B = /** @class */ (function () {
    function B(container) {
        this.a = container.get('a');
        this.c = container.get('c');
    }
    return B;
}());
var res = new B(mo);
console.log("%c Line:70 🍪 res", "color:#f5ce50", res);
