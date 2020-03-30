import React from 'react';
import * as styled from './Order.styled';

import { Card } from '@contentful/forma-36-react-components';

const Order = ({ order, onSelect, selectedInd }) => {
  const handleClick = ind => () => {
    onSelect(ind);
  };
  return (
    <styled.Container>
      <ul>
        {order.map((item, ind) => (
          <Card key={`${ind}-${item}`} onClick={handleClick(ind)}>
            {item}
          </Card>
        ))}
      </ul>
    </styled.Container>
  );
};

export default Order;
