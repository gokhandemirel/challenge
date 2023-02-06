import styled from "styled-components"

export default function ValidationFor({ name, errors }) {
    return (
        <Wrapper>
            {errors[name] && errors[name].message &&
                (<span>{errors[name].message}</span>)
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
   font-size: 12px;
   line-height: 16px;
   color: #DA3749;
   margin-top: 4px;
`