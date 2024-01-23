import * as React from 'react';
import {
  Page,
  Text,
  View,
} from '@react-pdf/renderer';
import ProfileCard from './ProfileCard';
import MastHead from './MastHead';
import ScoreCard from './ScoreCard';
import { styles } from './Styles';

const Page1 = ({ profile }) => (
  <Page size="A4" style={styles.page}>
    <MastHead />
    <ProfileCard profile={profile} />
    <View
      style={{
        marginTop: 0,
        marginRight: '30px',
        marginLeft: '30px',
        marginBottom: 0,
      }}
    >
      <Text style={[styles.styledH2, { marginBottom: '10px' }]}>Scorecard</Text>
    </View>
    <View style={styles.section}>
      <ScoreCard heading="Knowledge" categories={profile.categories} />
    </View>
    <View style={[styles.section, { borderBottom: 'none' }]}>
      <ScoreCard heading="Skills" categories={profile.categories} />
    </View>
    <View
      style={[styles.section, { borderBottom: 'none', paddingBottom: '0' }]}
    >
      <ScoreCard
        heading="Behaviors"
        categories={profile.categories}
        cssStyles="last"
      />
    </View>
  </Page>
);

export default Page1;
