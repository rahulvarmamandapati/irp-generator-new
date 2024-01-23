import * as React from 'react';
import styled from 'styled-components';
import lottie from 'lottie-web';

const StyledBg = styled.div`
  background-color: #10069f;
  background-position: top left;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

function LottieBg({ lottieData, fallback }) {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (lottieData && element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: lottieData,
        container: element.current,
        loop: true,
        autoplay: true,
        prerender: true,
        animType: 'svg',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      });
    }
  }, [lottieData]);

  return (
    <StyledBg
      className="lottie"
      ref={element}
      style={{ backgroundImage: `url(${fallback})` }}
    />
  );
}

export default LottieBg;
