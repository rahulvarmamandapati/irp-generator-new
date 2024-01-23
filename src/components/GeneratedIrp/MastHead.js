import * as React from 'react';
import {
  Text,
  View,
  Image,
} from '@react-pdf/renderer';
import { styles } from './Styles';
import logo from '../../images/logo-mindtickle-color@2x.png';

const MastHead = () => (
  <View
    fixed
    style={[
      styles.section,
      {
        marginTop: '30px',
        paddingBottom: '10px',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      },
    ]}
  >
    <View style={{ width: '50%' }}>
      <Image src={logo} style={styles.logo} />
    </View>
    <View style={{ width: '50%', textAlign: 'right' }}>
      <Text
        style={{
          fontSize: '8px',
          fontWeight: 700,
          color: '#10069F',
          fontFamily: 'Montserrat',
        }}
      >
        IDEAL REP PROFILE GENERATOR
      </Text>
    </View>
  </View>
);

export default MastHead;
