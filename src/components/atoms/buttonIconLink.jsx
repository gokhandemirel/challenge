import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ButtonIconLink({ children, ...props }) {
  return (
    <Wrapper>
      <Link {...props}>{children}</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    color: #1f2126;
    cursor: pointer;
    user-select: none;
  
    & > figure {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border: solid 1px #056bfd;
      border-radius: 4px;
      color: #056bfd;
      font-size: 14px;
      line-height: 18px;
      font-weight: 500;
  
      & > i {
        font-size: 24px;
      }
    }
  }
`;
