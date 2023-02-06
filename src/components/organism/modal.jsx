import styled from 'styled-components';
import Button from '../atoms/button';

export default function Modal({ title, message, buttons, resolve, isClose }) {
  return (
    <Overlay>
      <Wrapper>
        <a onClick={() => isClose()}><i className="ets-icon-times"></i></a>
        <span>{title}</span>
        <p dangerouslySetInnerHTML={{ __html: message }} />
        <ul>
          {buttons.map((item, index) => (
            <li key={item}>
              <Button className={index !== 0 ? 'outline' : ''} onClick={() => (index === 0 ? resolve(true) | isClose() : isClose())}>
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Overlay>
  );
}

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.44);
  position: fixed;
  left: 0;
  top: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 300px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  position: relative;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    background-color: #ebf1fa;
    color: #636770;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    right: -17px;
    top: -17px;

    & > i {
      font-size: 30px;
    }

  }

  & > span {
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
  }

  & > p {
    text-align: center;
  }

  & > ul {
    display: flex;
    justify-content: center;
    gap: 12px;
    width: 100%;
  }
`;
