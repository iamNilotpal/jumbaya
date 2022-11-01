import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import image from '../../assets/1.png';
import { Narration } from '../../types/narration';
import { ComingSoonOverlay } from '../ComingSoon';
import styles from './styles';

const NarrationTile: React.FC<{ narration: Narration }> = ({ narration }) => {
  return (
    <View style={styles.container}>
      <View style={styles.book}>
        <LinearGradient
          colors={['#D8CE78', '#43976C']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.firstPage}>
          <Image
            source={image as ImageSourcePropType}
            style={[
              StyleSheet.absoluteFillObject,
              { width: '100%', height: '100%' },
            ]}
            resizeMode="cover"
          />
        </LinearGradient>
        <View style={styles.secondPage} />
        <View style={styles.thirdPage} />
        {/* {narration.scenes.length === 0 && (
          <ComingSoonOverlay
            containerStyle={{
              width: '102%',
              height: '103.5%',
              zIndex: 1000,
              left: -5,
              borderRadius: 2,
              borderTopRightRadius: 40,
              borderBottomRightRadius: 50,
            }}
          />
        )} */}
        <View style={styles.bar} />
      </View>
    </View>
  );
};

export default NarrationTile;
