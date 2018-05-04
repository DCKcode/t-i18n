// Messages functions have replacement/pluralization logic baked in
// Use a tool like MessageFormat to generate these from strings
//
// const mFunc = (name) => "Hello, " + name
// mFunc("Mitch") // "Hello, Mitch"
//
export type MFunc =  (replacements?: IcuReplacements) => string;
// Function to compile strings into message functions during runtime
export type Compiler = (message: string) => MFunc;



// Message functions are grouped by locale and keyed to IDs
//
// {
// 	 en: {
//		 "greeting": (name) => "Hello, " + name
//	 }
// }
//
export interface Messages {
	[s: string]: {[s: string]: string|MFunc}
}

export interface SetupOptions {
	messages?: Messages;
	locale?: string;
	idGenerator?: (message: string) => string;
	compiler?: Compiler;
}

export type Mutable<T> = {
	[P in keyof T]: T[P];
}

// { name: "Mitch", age: 10 }
export interface IcuReplacements {
	readonly [s: string]: string | number;
}

// { strong: (txt) => $.strong({}, txt) }
export interface XmlReplacements<T> {
	readonly [s: string]: (...children: (T | string)[]) => T;
}

export interface AnyReplacements<T> {
	readonly [s: string]: string | number | ((...children: (T | string)[]) => T);
}
