/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="24" stroke="#000000" fill="#00ff00"/>
</svg>
`

const IconNormal = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconNormal.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconNormal) : IconNormal;
