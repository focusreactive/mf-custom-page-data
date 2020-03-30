import React from 'react';


import Order from './Order';
import { createSdk } from '../utils/sdk-mock';


export default {
  title: 'Order',
  component: Order,
};

const sdk = createSdk();
const value = sdk.field.getValue();

export const AppStory = () => <Order order={value.order} />;

AppStory.story = {
  name: 'Order'
};
