import * as React from 'react';
import { Text, View, Image } from '@react-pdf/renderer';
import { styles } from './Styles';
import avatar01 from '../../images/pdf-assets/avatar01.png';
import avatar02 from '../../images/pdf-assets/avatar02.png';
import avatar03 from '../../images/pdf-assets/avatar03.png';
import avatar04 from '../../images/pdf-assets/avatar04.png';
import avatar05 from '../../images/pdf-assets/avatar05.png';
import avatar06 from '../../images/pdf-assets/avatar06.png';
import avatar07 from '../../images/pdf-assets/avatar07.png';
import avatar08 from '../../images/pdf-assets/avatar08.png';
import avatar09 from '../../images/pdf-assets/avatar09.png';
import avatar10 from '../../images/pdf-assets/avatar10.png';
import avatar11 from '../../images/pdf-assets/avatar11.png';
import avatar12 from '../../images/pdf-assets/avatar12.png';
import avatar13 from '../../images/pdf-assets/avatar13.png';
import avatar14 from '../../images/pdf-assets/avatar14.png';
import avatar15 from '../../images/pdf-assets/avatar15.png';

const profilePic = {
  avatar01,
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  avatar06,
  avatar07,
  avatar08,
  avatar09,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
};

const ProfileCard = ({ profile }) => (
  <View style={styles.section}>
    <View>
      <Text style={styles.styledH2}>Ideal Rep Profile</Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        display: 'flex',
      }}
    >
      <View style={{ marginRight: '20px' }}>
        <Image
          src={profilePic[`avatar${profile.avatar_id.id}`]}
          style={{ width: '100px' }}
        />
      </View>
      <View>
        <Text style={styles.styledSpanLabel}>NAME</Text>
        <Text style={styles.styledH3}>{profile.name}</Text>
        <Text style={styles.styledSpanLabel}>JOB TITLE</Text>
        <Text style={styles.styledP}>{profile.role_id.name}</Text>
        <Text style={styles.styledSpanLabel}>GOALS</Text>
        {profile.qualities.map((quality) => (
          <Text style={styles.styledP} key={quality.id}>
            {quality.name}
          </Text>
        ))}
        {profile.new_goals.map((goal) => (
          <Text style={styles.styledP} key={goal.id}>
            {goal.name}
          </Text>
        ))}
      </View>
    </View>
  </View>
);

export default ProfileCard;
