import styled from 'styled-components';

export default function LabelFor({ name, errors, children }) {
  return (
    <Wrapper validation={errors[name] ? true : false}>{children}</Wrapper>
  )
}

const Wrapper = styled.label`
 margin-bottom: 5px;
 color: ${props => props.validation ? '#DA3749' : ''}
`