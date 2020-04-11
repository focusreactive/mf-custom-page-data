import careersMock from './careers.mock.json'

const defaultFn = (title = 'SDK', cb = () => {}) => (...args) => {
  const result = cb(...args);
  // console.log(`SDK - ${title}:\n`, ...args, 'return\n', result);
  return result;
};

export const initialValue = careersMock;

export const createSdk = fn => {
  const fnOr = (title, cb) => (fn ? fn() : defaultFn(title, cb));
  const sdk = {
    field: {
      getValue: fnOr('getValue', () => initialValue),
      onValueChanged: fnOr('onValueChanged'),
      setValue: fnOr('setValue'),
      removeValue: fnOr('removeValue')
    },
    window: {
      startAutoResizer: fnOr('startAutoResizer')
    }
  };
  return sdk;
};
