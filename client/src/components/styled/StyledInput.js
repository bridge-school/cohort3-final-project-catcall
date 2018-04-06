import styled from 'styled-components';
import { FormControl } from 'react-bootstrap';

const StyledInput = styled(FormControl) `
display: ${props => props.display ? props.display : 'visible'};
`

export default StyledInput