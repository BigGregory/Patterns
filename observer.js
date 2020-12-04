// Observer - is where you define one-to-many dependancy relationship
//          from one object(Subject) to many other objects(Observers)

function Subject() {
  this.observers = []; // array of observer functions
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },

  unsubscribe: function (fnToRemove) {
    // this.observers.splice(this.observers.indexOf(fnToRemove), 1);
    this.observers = this.observers.filter((fn) => fn !== fnToRemove);
  },

  fire: function () {
    this.observers.forEach((fn) => {
      fn.call();
    });
  },
};

const subject = new Subject();

function Observer1() {
  console.log('Observer 1 firing');
}
function Observer2() {
  console.log('Observer 2 firing');
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unsubscribe(Observer1);

subject.fire();
