// Import stylesheets

const app = {
  name: {
    user: 'bimkumar',
    age: 30,
  },
  lang: 'JavaScript',
};

function test(arg) {
  for (let i in arg) {
    if (typeof arg[i] == 'object') {
      test(arg[i]);
    } else {
      console.log(i, arg[i]);
    }
  }
}

test(app);
