import * as React from 'react';
import {
  Document,
  Font,
  PDFViewer,
} from '@react-pdf/renderer';
import { ThemeProvider } from 'styled-components';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { ReStyledButton } from './Styles';
import { theme1 } from '../../theme/globalStyle';
import MontserratRegular from '../../images/font/Montserrat-Regular.ttf';
import MontserratBold from '../../images/font/Montserrat-Bold.ttf';

Font.register({
  family: 'Montserrat',
  fonts: [
    {
      src: MontserratRegular,
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: MontserratBold,
      fontStyle: 'normal',
      fontWeight: 700,
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

let fontsLoaded = false;
let forceUpdate = null;

Promise.all([Font.load({ fontFamily: 'Montserrat' })]).then(() => {
  fontsLoaded = true;
  if (forceUpdate) forceUpdate();
});

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // eslint-disable-line no-unused-vars
  return () => setValue((value) => value + 1); // eslint-disable-line no-shadow
}

const MyDocument = ({ persona, profile }) => (
  <Document
    title="Your Ideal Rep Profile from Mindtickle"
    author="Mindtickle Inc."
    subject="Ideal Rep Profile"
    pdfVersion="1.0.0"
  >
    <Page1 profile={profile} />
    <Page2 persona={persona} profile={profile} />
    <Page3 />
  </Document>
);

export const PrintPdf = ({ persona, profile }) => {
  forceUpdate = useForceUpdate();
  if (!fontsLoaded) {
    return <div />;
  }
  return (
    <PDFViewer width="100%" height="800px">
      <MyDocument persona={persona} profile={profile} />
    </PDFViewer>
  );
};

export const BtnDownloadPdf = ({ persona, profile }) => (
  <ThemeProvider theme={theme1}>
    <ReStyledButton
      className="orange"
      document={<MyDocument persona={persona} profile={profile} />}
      fileName="Mindtickle-Ideal-Rep-Profile.pdf"
    >
      {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
    </ReStyledButton>
  </ThemeProvider>
);
