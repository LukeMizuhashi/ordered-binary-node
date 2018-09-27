const BinaryNode = require('binary-node');

module.exports = class OrderedBinaryNode extends BinaryNode {
  constructor(options) {
    options = options || {};
    super(options);

    if (options.comparator) {
      this.compare = options.comparator;
      this.compare.bind(this);
    }
    this.key = options.key; // Defaults to undefined
  }

  compare(key) {
    if (key < this.key) {
      return -1;
    } else if (key == this.key) {
      return 0;
    } else if (key > this.key) {
      return 1;
    } else {
      throw new Error(
        `${key} is neither less than, greater than, nor equal to ${this.key}`
      );
    }
  }
};

