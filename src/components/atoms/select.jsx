import ReactSelect, { components } from 'react-select';
import styled from 'styled-components';

export default function Select(props) {

  const ValueContainer = ({ children, ...props }) => {
    return (
      components.ValueContainer && (
        <components.ValueContainer {...props}>
          <SelectValContainer>
            <i className="ets-icon-sort" />
            {children}
          </SelectValContainer>
        </components.ValueContainer>
      )
    );
  };

  return (
    <SelectWrapper>
      <ReactSelect
        components={{
          IndicatorSeparator: false,
          ValueContainer
        }}
        isSearchable={false}
        {...props}
      />
    </SelectWrapper>
  );
}

const SelectWrapper = styled.div`
  & [class*="-control"]{
    outline: none !important;
    border: none !important;
    box-shadow: 0px 0px 5px 0px rgba(000, 000, 000, 0.15);
  }
`;

const SelectValContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 5px;

  & > i {
    font-size: 18px;
    color: #61656e;
  }
`;