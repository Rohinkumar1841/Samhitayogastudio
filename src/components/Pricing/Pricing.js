import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                
                </PricingCardIcon>
                <PricingCardPlan>Daily Yoga</PricingCardPlan>
               
                <PricingCardFeatures>
                  <PricingCardFeature> Pranayama</PricingCardFeature>
                  <PricingCardFeature> Restorative</PricingCardFeature>
                  <PricingCardFeature> Meditation</PricingCardFeature>
                  <PricingCardFeature> Music Yoga</PricingCardFeature>
                  <PricingCardFeature> Asanas</PricingCardFeature>
                  <PricingCardFeature> Suksmavyama</PricingCardFeature>
                
                </PricingCardFeatures>
                
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
               
                </PricingCardIcon>
                
                <PricingCardPlan>Online Yoga Classes</PricingCardPlan>
               
                <PricingCardFeatures>
                  <PricingCardFeature>Pranayama</PricingCardFeature>
                  <PricingCardFeature>Meditation</PricingCardFeature>
                  <PricingCardFeature>Asanas</PricingCardFeature>
                </PricingCardFeatures>
               
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
