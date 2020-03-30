import React from 'react';
import { render, fireEvent, cleanup, configure } from '@testing-library/react';

import App from './App';
import { createSdk } from './utils/sdk-mock';

configure({
  testIdAttribute: 'data-test-id'
});

const sdk = createSdk(jest.fn);

function renderComponent(sdk) {
  return render(<App sdk={sdk} />);
}

describe('App', () => {

  afterEach(cleanup);

  it('should read a value from field.getValue() and subscribe for external changes', () => {
    const { getByTestId } = renderComponent(sdk);

    expect(sdk.field.getValue).toHaveBeenCalled();
    expect(sdk.field.onValueChanged).toHaveBeenCalled();
    // expect(getByTestId('my-field').value).toEqual(initialValue.title);
  });

  it('should call starstartAutoResizer', () => {
    renderComponent(sdk);
    expect(sdk.window.startAutoResizer).toHaveBeenCalled();
  });

  it('should call setValue on every change in input and removeValue when input gets empty', () => {
    const { getByTestId } = renderComponent(sdk);

    // fireEvent.change(getByTestId('my-field'), {
    //   target: { value: 'new-value' }
    // });

    // expect(sdk.field.setValue).toHaveBeenCalledWith({ title: 'new-value' });

    // fireEvent.change(getByTestId('my-field'), {
    //   target: { value: '' }
    // });

    // expect(sdk.field.setValue).toHaveBeenCalledTimes(1);
    // expect(sdk.field.removeValue).toHaveBeenCalledTimes(1);
  });
});
