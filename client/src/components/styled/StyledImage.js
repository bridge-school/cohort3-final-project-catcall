import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const StyledImage = styled(Image) `
    background-color: ${props => props["data-highlight"] ? "#337ab7" : "white"}
    border-radius: ${props => props["data-circle"] && "20px"};
    padding: ${props => props["data-circle"] && "4px"}
`

export default StyledImage