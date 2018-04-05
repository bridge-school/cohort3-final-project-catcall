import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

const StyledNavBar = styled(Navbar) `


    .navbar-link {
        float: right !important;
        padding: 15px 15px;
        line-height: 20px;
        display: block;
        color: #337ab7;
        text-decoration: none !important
    }

    .navbar-brand {
        padding: 10px 15px;
        line-height: 0px;

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
    nav .navbar {
        .navbar-default {
            line-height: 0px !important;
            margin-bottom: 0px !important;
        }
        line-height: 0px !important;
        margin-bottom: 0px !important;
        position: absolute;

    }
`

export default StyledNavBar