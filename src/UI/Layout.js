import React from 'react';

import * as styled from './Layout.styled';

const ORDER = 'ORDER';
const VIEW = 'VIEW';
const EDIT = 'EDIT';

const Layout = ({ renderOrder, renderComponent, renderEditor }) => {
  const [expanded, setExpanded] = React.useState(null);

  const expandComponent = componennt => () => {
    if (expanded) {
      setExpanded(null);
      return;
    }
    setExpanded(componennt);
  };

  if (expanded) {
    const render = {
      [ORDER]: () => renderOrder(expandComponent(ORDER)),
      [VIEW]: () => renderComponent(expandComponent(VIEW)),
      [EDIT]: () => renderEditor(expandComponent(EDIT))
    }[expanded];
    return <styled.Container data-full>{render()}</styled.Container>;
  }

  return (
    <styled.Container>
      <styled.ComponensRow>
        {renderOrder(expandComponent(ORDER))}
        {renderComponent(expandComponent(VIEW))}
      </styled.ComponensRow>
      <styled.EditorHolder>{renderEditor(expandComponent(EDIT))}</styled.EditorHolder>
    </styled.Container>
  );
};

export default Layout;
