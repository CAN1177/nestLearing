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

class A {
	name: string
	constructor(name: string) {
			this.name = name
	}
}


class C {
	name: string
	constructor(name: string) {
			this.name = name
	}
}
//中间件用于解耦
class Container {
	modeuls: any
	constructor() {
			this.modeuls = {}
	}
	provide(key: string, modeuls: any) {
			this.modeuls[key] = modeuls
	}
	get(key) {
			return this.modeuls[key]
	}
}

const mo = new Container()
mo.provide('a', new A('小满1'))
mo.provide('c', new C('小满2'))

class B {
	a: any
	c: any
	constructor(container: Container) {
			this.a = container.get('a')
			this.c = container.get('c')
	}
}

const res = new B(mo)
console.log("%c Line:70 🍪 res", "color:#f5ce50", res);

