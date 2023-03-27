import { Flex } from '@mantine/core';

import { Outlet } from 'react-router-dom';

import { headerLinks } from '@/configs/links';

import ShellHeader from './Header';

export interface ShellProps {}
const Shell: React.FC<ShellProps> = () => {
  return (
    <Flex mih="100vh" direction="column">
      <ShellHeader height={64} links={headerLinks} />
      <Outlet />
    </Flex>
  );
};

export default Shell;
