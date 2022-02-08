import * as React from 'react';
import Card from '../Card';
import { LayoutContent } from './styles';

interface ILayoutProps {
}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
      <LayoutContent>
        <Card/>
      </LayoutContent>
  );
};

export default Layout;
