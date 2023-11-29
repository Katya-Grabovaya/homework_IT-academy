type Mapper<T, R> = (value: T, index: number, array: T[]) => R;
type Predicate<T> = (value: T, index: number, array: T[]) => boolean;

export function map<T, R>(mapper: Mapper<T, R>, input?: T[]): R[] | Function {
  if (arguments.length === 0) {
    return map;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: T[]): R[] | Function {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.map(mapper);
    };
  }
  return input!.map(mapper);
}


export function filter<T>(filterer: Predicate<T>, input?: T[]): T[] | Function {
  if (arguments.length === 0) {
    return filter;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: T[]): T[] | Function {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.filter(filterer);
    };
  }
  return input!.filter(filterer);
}

type AddFunction = (a: number, b?: number) => number | AddFunction;

export function add(a?: number, b?: number): number | AddFunction {
  if (arguments.length === 0) {
    return add;
  }
  if (arguments.length === 1) {
    return function subFunction(subB: number): number | AddFunction {
      if (arguments.length === 0) {
        return subFunction;
      }
      return a! + subB;
    };
  }
  return a! + b!;
}
