import React from 'react';
import { Text, View } from 'react-native-ui-lib';

export type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <View flex-1>{children}</View>;
};

export default PageWrapper;
