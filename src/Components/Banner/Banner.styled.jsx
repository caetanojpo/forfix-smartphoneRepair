import styled from "styled-components";

export const BannerContainer = styled.div`
height: 50vh;
width: 100vw;

display: flex;

@media screen and (min-width: 768px) {
    height: 80vh;
background-image: url('/cool-background.png');
background-position: right;
background-repeat: no-repeat;
background-size: cover;
}
@media screen and (min-width: 1024px) {
    height: 100vh;
}

    h1{
        font-weight: 700;
    }

    .btn{
        transition: 0.4s;
        text-decoration: none;
        border:2px solid black;
    }
    .btn:hover{
        background-color: white;
        color: black;
        
    }


`

