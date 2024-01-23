import * as React from 'react';
import {
  Page,
  Image,
  View,
  Link,
} from '@react-pdf/renderer';
import thirdPageAd from '../../images/pdf-third-page-ad.jpg';
import { styles } from './Styles';

const Page1 = () => (
  <Page wrap={false} size="A4" style={styles.page}>
    <View>
      <Link
        src="https://www.mindtickle.com/demo/?utm_source=organic &utm_medium=website&utm_campaign=IRP-Generator&utm_content=&utm_term="
        href="https://www.mindtickle.com/demo/?utm_source=organic &utm_medium=website&utm_campaign=IRP-Generator&utm_content=&utm_term="
        target="_blank"
      >
        <Image
          src={thirdPageAd}
          style={{
            width: '492px',
            height: '691px',
            margin: '60px',
            display: 'block',
          }}
        />
      </Link>
    </View>
  </Page>
);

export default Page1;
