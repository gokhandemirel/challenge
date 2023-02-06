import styled from 'styled-components';

export default function Button({ icon, children, ...props }) {
  return (
    <Wrapper isIcon={icon} {...props}>
      {icon}
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  text-align: center;
  padding: ${props => props.isIcon ? '13px 25px 13px 40px' : '13px 25px'};
  background-color: #056bfd;
  color: #fff;
  border: solid 1px #056bfd;
  border-radius: 6px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  position: relative;

  & > i {
    position: absolute;
    left: 10px;
  }

  &.s{
    padding: 9px 12px;
    font-size: 12px;
    line-height: 16px;
  }

  &.outline{
    background: transparent;
    color: #056bfd;
  }

  &.green{
    background-color: #50c70a;
    border-color: #50c70a;
  }

  &:active{
    border: solid 1px #056bfd;
  }
`;
