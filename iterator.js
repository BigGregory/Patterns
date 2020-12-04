// Iterator - effectively loop through collection of objects with predefined rules
// Two methods must have --> hasNext, next
const items = [1, 'greg', false, 1.25];

function Iterator(items) {
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    // return this.hasNext() ? this.items[this.index++] : (this.index = 0);
    return this.items[this.index++];
  },
};

const iter = new Iterator(items);
