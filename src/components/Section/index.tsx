import React from 'react';

import {
  Container,
  HeaderWrapper,
  Header,
  DropboxLogo,
  Content,
  BannerImage,
  Buttons,
  ContentBeige,
  ContentInfo,
  Links,
} from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
  const buttonVariant = Math.round(Math.random());

  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          <Links>
            <a href='#'>For Teams</a>
            <a href='#'>For Individuals</a>
          </Links>

          <Buttons onClick={handleToggle}>
            {buttonVariant === 0 ? 'Learn More' : 'Login'}
          </Buttons>
        </Header>
      </HeaderWrapper>

      <Content>
        {variant === 'beige' ? (
          <ContentBeige>
            <BannerImage>
              <img
                className='image'
                src='https://cfl.dropboxstatic.com/static/images/index/zeus/home-hero-vflMv-jgR.jpg'
                alt=''
              />
            </BannerImage>
            <ContentInfo>
              <h2>{title}</h2>
              <p>{description}</p>
            </ContentInfo>
          </ContentBeige>
        ) : (
          <>
            <h2>{title}</h2>
            <p>{description}</p>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Section;
