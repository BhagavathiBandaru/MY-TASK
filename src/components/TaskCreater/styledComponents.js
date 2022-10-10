import styled from 'styled-components'

export const TagButtonElement = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f1f5f9;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 800;
  color: #f1f5f9;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
`
