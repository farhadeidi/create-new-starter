import {
  Flex,
  FlexProps,
  Image,
  SpacingValue,
  SystemProp,
  Title,
} from '@mantine/core';

import { constants } from '@/configs/constants';

export interface BrandProps extends FlexProps {
  withSiteName?: boolean;
  isVertical?: boolean;
  logoSize?: number;
  typoSize?: number;
  spacing?: SystemProp<SpacingValue>;
}
const Brand: React.FC<BrandProps> = ({
  withSiteName,
  logoSize = 42,
  typoSize = 20,
  isVertical,
  spacing = 4,
  ...props
}) => {
  return (
    <Flex
      direction={isVertical ? 'column' : 'row'}
      align="center"
      gap={spacing}
      {...props}
    >
      <Image src={constants.logoUrl} width={logoSize} height={logoSize} />
      {withSiteName && <Title size={typoSize}>{constants.siteName}</Title>}
    </Flex>
  );
};

export default Brand;
