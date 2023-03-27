import { Center } from '@mantine/core';

import PageWrapper from '@/components/PageWrapper';

const Page = () => {
  return (
    <PageWrapper title="About">
      <Center sx={{ flex: 1 }}>Hello from About</Center>
    </PageWrapper>
  );
};

export default Page;
