import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo} from './Data';


function Services() {
  return (
    <>
      <Pricing />
    
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;
