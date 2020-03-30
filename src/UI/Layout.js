import React from 'react';

import * as styled from './Layout.styled';
import { EditorToolbar, EditorToolbarButton } from '@contentful/forma-36-react-components';

const Layout = ({ renderOrder, renderComponent, renderEditor }) => {
  const [fullscreen, setFullscreen] = React.useState(false);
  const handleFullscreenClick = () => {
    setFullscreen(!fullscreen);
  };
  return (
    <styled.Container data-full={fullscreen}>
      <EditorToolbar>
        <EditorToolbarButton
          icon="ExternalLink"
          tooltip="Full Screen"
          label="FullScreen"
          isActive={true}
          onClick={handleFullscreenClick}
        />
      </EditorToolbar>
      <styled.ComponensRow>
        {renderOrder()}
        {renderComponent()}
      </styled.ComponensRow>
      <styled.EditorHolder>{renderEditor()}</styled.EditorHolder>
    </styled.Container>
  );
};

export default Layout;
