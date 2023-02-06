import styled from 'styled-components';

export default function Textarea({ register, errors, props }) {
  return (
    <Wrapper
      {...register}
      {...props}
      validation={errors[register.name] ? true : false}
    />
  );
}

const Wrapper = styled.textarea`
   width: calc(100% - 20px);
   height: 70px;
   padding: 10px;
   border: solid 1px #ddd;
   border-color: ${props => props.validation ? '#DA3749' : '#ddd'};
   border-radius: 6px;
   resize: none;
   outline: none;
   font-family: 'Montserrat', sans-serif;
`