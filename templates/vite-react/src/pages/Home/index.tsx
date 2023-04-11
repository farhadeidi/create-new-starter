import { Box, Center, Text } from '@mantine/core';

import Brand from '@/components/Brand/Brand';
import PageWrapper from '@/components/PageWrapper';

const Page = () => {
  return (
    <PageWrapper title="Home">
      <Center sx={{ flex: 1 }}>
        <Box>
          <Brand withSiteName isVertical logoSize={128} typoSize={24} mb="lg" />
          <Text>Edit this page in src/pages/Home</Text>
        </Box>
      </Center>
    </PageWrapper>
  );
};

export default Page;
