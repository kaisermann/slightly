function SlightlyExample() {
  const Example = this;
  
  // Collection of private methods and properties
  const _private = {};

  // Default options for this module
  Example.defaultOptions = {};

  // Static methods to be mergerd with the Slightly Class
  Example.static = {};

  // Public (Privileged to this file) methods to be merged with the Slightly.prototype object
  Example.public = {};

  // Module Initial/Constructor method
  Example.init = function () {};
}

export default new SlightlyExample();
