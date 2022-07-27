import React from 'react';

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => (
  <Box>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;