import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import Button from '../components/atoms/button';
import LabelFor from '../components/atoms/labelFor';
import Textarea from '../components/atoms/textarea';
import ValidationFor from '../components/atoms/validationFor';
import hotelService from '../services/hotelService';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import ButtonIconLink from '../components/atoms/buttonIconLink';

export default function AddHotel() {

  const schema = yup.object().shape({
    title: yup
      .string()
      .required('Otel adını boş bırakmayınız.')
  });

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });

  const [addCompleted, setAddCompleted] = useState(false);

  const onSubmit = (data) => {
    const item = {
      id: uuidv4(),
      title: data.title,
      rate: 0,
      createdDate: new Date(),
      updatedDate: new Date()
    }
    hotelService.setHotel(item);
    setAddCompleted(true);
  };

  return (
    <Container>
      <ButtonIconLink to="/">
        <figure>
          <i className="ets-icon-list" style={{ fontSize: "16px" }}></i>
        </figure>
        <span>OTEL LİSTESİ</span>
      </ButtonIconLink>
      <Form>
        <Fieldset>
          <LabelFor name="title" errors={errors}>Otel Adı</LabelFor>
          <Textarea register={register('title')} errors={errors} />
          <ValidationFor errors={errors} name="title" />
        </Fieldset>
        <Fieldset align="right">
          {!addCompleted ?
            (<Button onClick={handleSubmit(onSubmit)}>EKLE</Button>) :
            (<Button className="green" icon={<i className="ets-icon-check"></i>}>EKLENDİ</Button>)
          }
        </Fieldset>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 20px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 12px;
  width: 100%;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${props => props.align === 'right' ? 'flex-end' : 'baseline'};
`;
