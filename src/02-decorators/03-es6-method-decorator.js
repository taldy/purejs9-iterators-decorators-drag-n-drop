class Post {
  constructor(text) {
    this.text = text;
  }

  @log
  update(value) {
    this.text = value;
  }
}

function log(descriptor) {
  const original = descriptor.descriptor.value;

  if (descriptor.kind === 'method') {
    descriptor.descriptor.value = function(...args) {
      console.log(`@log called with params: `, ...args);

      const result = original.apply(this, args);

      console.log(`@log result: `, result);

      return result;
    }
  }
  return descriptor;
}

// function log(target, name, descriptor) {
//   const original = descriptor.value;
//
//   if (typeof original === 'function') {
//     descriptor.value = function(...args) {
//       console.log(`"${name}" called with params: `, ...args);
//
//       const result = original.apply(this, args);
//
//       console.log(`"${name}" result: `, result);
//
//       return result;
//     }
//   }
//
//   return descriptor;
// }

let post;

function create() {
  post = new Post('initial text');
  console.log('created post', post);
}

function update() {
  post.update('some new text');
  console.log('updated post', post);
}

document.querySelector('#container3 .create').addEventListener('click', create);
document.querySelector('#container3 .update').addEventListener('click', update);
