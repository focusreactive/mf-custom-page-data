const defaultFn = (title = 'SDK', cb = () => {}) => (...args) => {
  const result = cb(...args);
  console.log(`${title}\n`, ...args, 'return\n', result);
  return result;
};

export const initialValue = {
  order: ['component1', 'Separator', 'component2'],
  components: {
    component1: {
      data: 'info'
    },
    component2: {
      data: 'info'
    }
  }
};

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
