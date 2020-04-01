class ArgumentsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ArgumentsError';
  }
}
module.exports = ArgumentsError;
