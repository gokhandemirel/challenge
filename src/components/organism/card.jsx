import styled from 'styled-components';
import Button from '../atoms/button';
import modalService from '../../services/modalService';
import hotelService from '../../services/hotelService';

export default function Card({ data, setHotel }) {

  const deleteHotel = (item) => {
    modalService.confirm('Oteli Sil', `<b>${item.title}</b>'i silmek istediğinizden emin misiniz?`, ['OTELİ SİL', 'VAZGEÇ'])
      .then(() => {
        const hotel = hotelService.getHotel()
        const filteredHotel = hotel.filter((x) => x.id !== item.id);
        setHotel(filteredHotel);
      });
  };

  return (
    <Wrapper>
      <Image>
        <img src="/images/hotel-image.jpg" alt="" />
      </Image>
      <Information>
        <span>{data.title}</span>
        <p>{data.rate.toFixed(1)} Puan</p>
        <Buttons>
          <Button className="s outline" onClick={() => hotelService.updateRate(data, 'plus', setHotel)}>PUAN ARTIR</Button>
          <Button className="s outline" onClick={() => hotelService.updateRate(data, 'minus', setHotel)}>PUAN AZALT</Button>
          <Delete className="delete" onClick={() => deleteHotel(data)}><i className="ets-icon-times"></i></Delete>
        </Buttons>
      </Information>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 7px;
  border-radius: 3px;
  box-shadow: 0px 0px 5px 0px rgba(000, 000, 000, 0.15);
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }

  &:hover .delete {
    display: flex;
  }
`;

const Image = styled.div`
  width: 110px;
  height: 103px;
  border-radius: 3px;
  overflow: hidden;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;
  width: calc(100% - 110px);

  & span {
    font-weight: 500;
  }

  & > p {
    padding: 5px 10px;
    background-color: #f6f9fd;
    border-radius: 5px;
    color: #82dfdc;
    font-size: 13px;
    line-height: 15px;
    font-weight: 500;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Delete = styled.a`
  display: none;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #da1e28;
  color: #fff;
  position: absolute;
  right: -12px;
  top: -12px;
`;
