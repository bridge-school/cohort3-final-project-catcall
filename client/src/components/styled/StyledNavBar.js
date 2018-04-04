import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

const StyledNavBar = styled(Navbar) `
    @media (max-width: 500px) {
        .navbar-collapse.collapse {
            display: none !important;
        }
        .navbar-collapse.collapse.in {
            display: block !important;
        }
        .navbar-header .collapse, .navbar-toggle {
            display:block !important;
        }
        .navbar-header {
            float:none;
        }
    }    
    .navbar-brand {
        padding: 10px 15px;
        img {
            height: 30px;
            width: 40px;
            padding-right: 10px;
        }
        a {
            color: #000000;
            text-decoration: none !important
        }
    }
`

export default StyledNavBar