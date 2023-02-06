import styled from 'styled-components';
import Card from '../components/organism/card';
import useLocalStorage from '../hooks/useLocalStorage';
import data from '../data/hotel.json';
import sortList from '../data/sort.json';
import { useState } from 'react';
import Select from '../components/atoms/select';
import Pagination from '../components/molecules/pagination';
import ButtonIconLink from '../components/atoms/buttonIconLink';

export default function Hotel() {

  const [hotel, setHotel] = useLocalStorage('hotel', data);
  const [rateSortedType, setRateSortedType] = useState('');
  const [rateSorted, setRateSorted] = useState(false);
  const [page, setPage] = useState(1);
  const pagePer = 5;

  const paginate = (data, pageSize, pageNumber) => {
    const sliceStarted = Math.ceil(data.length / pagePer) >= pageNumber ? 1 : 2;
    return data.slice((pageNumber - sliceStarted) * pageSize, pageNumber * pageSize);
  }

  const sortCreatedDate = (x, y) => {
    return new Date(y.createdDate) - new Date(x.createdDate);
  };

  const sortUpdatedDate = (x, y) => {
    if (x.rate === y.rate) {
      return new Date(y.updatedDate) - new Date(x.updatedDate);
    }
  };

  const sortRate = (x, y) => {
    if (rateSorted) {
      if (rateSortedType === 1) {
        return x.rate - y.rate;
      } else {
        return y.rate - x.rate;
      }
    }
  };

  return (
    <Container>
      <ButtonIconLink to="/otel-ekle">
        <figure>
          <i className="ets-icon-plus"></i>
        </figure>
        <span>OTEL EKLE</span>
      </ButtonIconLink>
      <Select options={sortList} onChange={(item) => setRateSortedType(item.value) | setRateSorted(true)} placeholder="Sıralama" />
      <List>
        {paginate(
          hotel
            .sort(sortCreatedDate)
            .sort(sortRate)
            .sort(sortUpdatedDate)
            .map((item) => (
              <Card key={item.id} data={item} setHotel={setHotel} />
            )),
          pagePer,
          page
        )}
      </List>
      <Pagination data={hotel} pagePer={pagePer} page={page} setPage={setPage} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 20px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
