import * as React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from './Styles';

const ScoreCard = ({ heading, categories }) => (
  <View>
    <View>
      <Text style={[styles.styledH3, { marginBottom: '10px' }]}>{heading}</Text>
    </View>
    <View style={styles.styledScores}>
      <View style={styles.styledScoresHeader}>
        <View style={styles.headerScoreTag}>
          <Text style={styles.styledSpanLabel}>IRP Tags</Text>
        </View>
        <View>
          <Text style={styles.styledSpanLabel}>RANKING</Text>
        </View>
        <View>
          <Text style={styles.styledSpanLabel}>WEIGHTAGE</Text>
        </View>
      </View>
      {categories
        .filter(({ type }) => type.toLowerCase() === heading.toLowerCase())
        .map((cat, index) => (
          <View
            style={[
              styles.styledScoresRow,
              {
                backgroundColor: index % 2 ? 'transparent' : '#F5F6F7',
              },
            ]}
            key={cat.id}
          >
            <View style={styles.scoreLabel}>
              <Text>{cat.name}</Text>
            </View>
            <View>
              <Text>{cat.rank}</Text>
            </View>
            <View>
              <Text>{cat.value}</Text>
            </View>
          </View>
        ))}
    </View>
  </View>
);

export default ScoreCard;
