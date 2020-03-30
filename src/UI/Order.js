import React from 'react';
import { Card } from '@contentful/forma-36-react-components';

import * as styled from './Order.styled';
import Toolbar from './Toolbar';
import Button from './Button';

const Order = ({ order, onSelect, selectedName, toggleExpand }) => {
  const handleClick = ({ ind, name }) => () => {
    onSelect({ ind, name });
  };
  return (
    <styled.Container>
      <div className="toolbar-holder">
        <Toolbar>
          <h3>Components Order</h3>
          <Button onClick={toggleExpand}>Expand</Button>
        </Toolbar>
      </div>
      <div className="list-holder">
        <ul>
          {order.map((item, ind) => (
            <li key={`${ind}-${item}`}>
              <Card
                className="component-card"
                onClick={handleClick({ ind, name: item })}
                selected={selectedName === item}>
                {item}
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </styled.Container>
  );
};

export default Order;
