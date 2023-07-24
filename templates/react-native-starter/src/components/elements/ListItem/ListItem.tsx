import React from 'react';
import { Text, View } from 'react-native-ui-lib';
import VectorIcon, { VectorIconProps } from '../VectorIcon/VectorIcon';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export type ListItemProps = TouchableOpacityProps & {
  label?: string;
  description?: string;
  iconProps?: VectorIconProps;
};

const ListItem: React.FC<ListItemProps> = ({
  label = 'Label',
  description,
  iconProps,
  ...props
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      <View
        row
        centerV
        style={{
          minHeight: 54,
        }}
      >
        <View width={42}>
          <VectorIcon name="home" color="c1" {...iconProps} />
        </View>
        <View flex-1>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            {label}
          </Text>
          {!!description && (
            <Text c3 sm>
              {description}
            </Text>
          )}
        </View>
        <VectorIcon name="chevron-forward" />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
