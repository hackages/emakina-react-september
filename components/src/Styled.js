import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
`


export const Button = styled.button`
  padding: 22px 22px 22px 22px;
  font-family: Helvetica, sans-serif;
  line-height: 0;
  font-size: 1rem;
  color: white;
  margin: 2rem;
  background-color: ${props => (props.secondary ? 'tomato' : 'dodgerblue')};
  transition: 0.3s ease;
  border-radius: 50px;
  box-shadow: 6px 8px 19px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 6px 8px 12px 0 rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
  }
  &:focus {
    outline: none;
  }
`

export const StyledSidebar = styled.div`
  width: 25%;
`

export const Content = styled.div`
  margin-left: 25%;
`

export const InputArea = styled.input`
  height: 40px;
  width: 50%;
  border: 1px solid #b7bbba;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #717776;
  padding: 0.5625rem 0.75rem;
  //Fix box-shadow on iphone
  -webkit-appearance: none;
  &:focus {
    outline: none;
    border: 1px solid dodgerblue;
  }
  &::placeholder {
    color: #999e9d;
  }
`

export const Label = styled.label`
  font-size: 0.875rem;
  color: ${props => (props.danger ? 'tomato' : '#4b4f4e')};
`

export const Title = styled.h1`
  color: ${props => props.color || 'black'}
  font-size: ${props => (props.small ? '1rem' : '2rem')};
`
