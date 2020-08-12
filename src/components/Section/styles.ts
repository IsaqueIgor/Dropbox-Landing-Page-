import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;
  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }
  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
  }
  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }
  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }
  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;
    /* Quando tiver pelo menos 1024px */
    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }
  }
  background: var(--bg-color);
  position: relative;
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 90px;
  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);
  }
  > p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
    line-height: 32px;
  }
  padding: var(--padding-top) 32px var(--padding-bottom);
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`
  z-index: 3;
  background: var(--bg-color);
  display: grid;
  grid-template-columns: 225px 1fr 1fr;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 62px;
  > h1 {
    display: flex;
    align-items: center;
    > span {
      color: var(--text-color);
      margin-left: 10px;
      font-size: 29px;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Links = styled.div`
  > a {
    color: var(--text-color);
    text-decoration: none;
    margin-right: 20px;
    font-size: 17px;
    font-weight: 400;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  > button {
    color: var(--text-color);
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 33px;
  fill: var(--logo-color);
`;

export const ContentBeige = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -150px;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
  }
`;

export const BannerImage = styled.div`
  > img {
    width: 100%;
    border-radius: 10px;
  }
  @media (min-width: 1024px) {
    > img {
      width: 85%;
    }
  }
`;

export const ContentInfo = styled.div`
  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);
    margin-top: 30px;
  }
  > p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
    line-height: 32px;
  }
  @media (min-width: 1024px) {
    > h2 {
      margin-top: 0;
    }
  }
`;
