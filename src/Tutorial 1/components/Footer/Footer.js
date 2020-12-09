import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  Footerlink,
  SocialMedia,
  SocialMediaWrapper,
  SocialIcon,
  SocialIconLink,
  SocialLogo,
  SocialIcons,
  WebsiteRights,
} from "./Footer.elements";
function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join Our Exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <Footerlink to='/sign-up'>How it Works</Footerlink>
            <Footerlink to='/'>Testimonials</Footerlink>
            <Footerlink to='/'>Careers</Footerlink>
            <Footerlink to='/'>Investors</Footerlink>
            <Footerlink to='/'>Terms of Service</Footerlink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <Footerlink to='/sign-up'>How it Works</Footerlink>
            <Footerlink to='/'>Testimonials</Footerlink>
            <Footerlink to='/'>Careers</Footerlink>
            <Footerlink to='/'>Investors</Footerlink>
            <Footerlink to='/'>Terms of Service</Footerlink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <Footerlink to='/sign-up'>How it Works</Footerlink>
            <Footerlink to='/'>Testimonials</Footerlink>
            <Footerlink to='/'>Careers</Footerlink>
            <Footerlink to='/'>Investors</Footerlink>
            <Footerlink to='/'>Terms of Service</Footerlink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <Footerlink to='/sign-up'>How it Works</Footerlink>
            <Footerlink to='/'>Testimonials</Footerlink>
            <Footerlink to='/'>Careers</Footerlink>
            <Footerlink to='/'>Investors</Footerlink>
            <Footerlink to='/'>Terms of Service</Footerlink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrapper>
          <SocialLogo to='/'>
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA @ 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href='https://youtube.com'
              target='_blank'
              aria-label='Youtube'
              rel='noopener noreferrer'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href='https://twitter.com'
              target='_blank'
              aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href='https://linkedin.com'
              target='_blank'
              aria-label='Linkedin'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrapper>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
