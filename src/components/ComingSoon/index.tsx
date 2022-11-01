import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

type ComingSoonOverlayProps = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const ComingSoonOverlay: React.FC<ComingSoonOverlayProps> = ({
  containerStyle = {},
  textStyle = {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[, styles.comingSoon, textStyle]}>Coming</Text>
      <Text style={[, styles.comingSoon, textStyle]}>Soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  comingSoon: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
});
