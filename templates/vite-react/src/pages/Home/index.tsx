import { Center } from '@mantine/core';

import PageWrapper from '@/components/PageWrapper';

const Page = () => {
  return (
    <PageWrapper title="Home">
      <Center sx={{ flex: 1 }}>Hello from Home</Center>
    </PageWrapper>
  );
};

export default Page;
