import * as React from 'react';
import {
  Page,
  Text,
  View,
} from '@react-pdf/renderer';
import MastHead from './MastHead';
import { styles } from './Styles';

const Page1 = ({
  persona: { firstName, lastName },
  profile: { categories },
}) => (
  <Page size="A4" style={styles.page}>
    <MastHead />
    <View
      style={{
        marginTop: 0,
        marginLeft: '30px',
        marginRight: '30px',
        marginBottom: '30px',
      }}
    >
      <Text style={[styles.styledH2, { marginBottom: '15px' }]}>
        Put your IRP into action
      </Text>
      <Text style={{ fontSize: '14px', marginBottom: '30px' }}>
        <Text style={{ color: '#FE5000', fontSize: '14px', fontWeight: 700 }}>
          {firstName}
          {' '}
          {lastName}
          ,
        </Text>
        {' '}
        now that you have your ideal rep profile, here's
        how you can start building the same knowledge,
        skills, and behaviors across your entire sales team.
        Below you'll find action items based on the
        profile you generated.
      </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginLeft: '-15px',
          marginRight: '-15px',
        }}
      >
        {categories.map((cat, index) => (
          <View
            key={cat.id}
            break={(index + 1) % 8 === 0}
            style={{
              width: '50%',
              marginBottom: '30px',
              paddingLeft: '15px',
              paddingRight: '15px',
            }}
          >
            <Text style={[styles.styledH3, { marginBottom: 0 }]}>
              {cat.name}
            </Text>
            <Text style={styles.styledSpanLabel}>ACTION ITEM</Text>
            <Text>{cat.action_item}</Text>
          </View>
        ))}
      </View>
    </View>
  </Page>
);

export default Page1;
