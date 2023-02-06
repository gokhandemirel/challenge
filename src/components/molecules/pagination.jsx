import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Pagination({ data, pagePer, page, setPage }) {

  const [pageCount, setPageCount] = useState(0);

  const changePage = (item) => {
    if (item !== 0 && item <= Math.ceil(data.length / pagePer)) {
      setPage(item);
    }
  }

  useEffect(() => {
    setPageCount(Math.ceil(data.length / pagePer));
  }, [data]);

  return (
    <List>
      {data.length > pagePer &&
        <>
          <li>
            <a onClick={() => changePage(page - 1)}>
              <i className="ets-icon-arrow-left"></i>
            </a>
          </li>
          {[...Array(pageCount)].map((item, index) => {
            const pItem = index + 1;
            return (
              <li key={pItem}>
                <a className={page === pItem ? 'active' : ''} onClick={() => changePage(pItem)}>{pItem}</a>
              </li>
            )
          })}
          <li>
            <a onClick={() => changePage(page + 1)}>
              <i className="ets-icon-arrow-right"></i>
            </a>
          </li>
        </>
      }
    </List>
  );
}

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin: 10px 0px;

  & > li > a {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }
  & > li > a.active {
    font-weight: 600;
  }

`;
