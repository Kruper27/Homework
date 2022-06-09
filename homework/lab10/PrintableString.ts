
function addToEnd(str: string) {
  return function (target: Object, method: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (args: string) {
      return originalMethod.apply(args + str);
    };
  };
}

function addToStart(str: string) {
  return function (target: Object, method: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (args: string) {
      return originalMethod.apply(str + args);
    };
  };
}

export class PrintableString {

  @addToEnd('.')
  @addToStart('World')
  @addToEnd('!')
  @addToEnd('Hello')
  print(str: string): string {
    return str;
  }
}
