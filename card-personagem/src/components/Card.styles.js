import styled from "styled-components"

//images
import bg_bb8 from '../assets/bg-card-bb8.svg'
import bg_finn from '../assets/bg-card-finn.svg'
import bg_rey from '../assets/bg-card-rey.svg'

export const Container = styled.div`
    display: flex;
    align-items: center;

    .cards {
        display: flex;
        align-items: center;
    }
`

export const CardBackContainer = styled.div`
    width: 348px;
    height: 486px;
    box-shadow: 0px 113px 45px rgba(0, 0, 0, 0.02), 0px 64px 38px rgba(0, 0, 0, 0.08), 0px 28px 28px rgba(0, 0, 0, 0.13), 0px 7px 16px rgba(0, 0, 0, 0.15), 0px 0px 0px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    font-size: 32px;
    font-weight: 700;

    color: #312D74;

    display: flex;
    justify-content: center;
    align-items: center;


    &:first-child {
        background: url(${bg_finn})
    }

    &:last-child {
        background: url(${bg_bb8});
    }

    h1 {
        //vazamento dentro da font
      -webkit-text-stroke: 1px;
      -webkit-text-fill-color: transparent;  
    }
`

export const CardCenter = styled.div`
    background: url(${bg_rey});
    width: 436px;
    height: 608px;
    border-radius: 20px;
    box-shadow: 0px 294px 118px rgba(0, 0, 0, 0.03), 0px 165px 99px rgba(0, 0, 0, 0.1), 0px 73px 73px rgba(0, 0, 0, 0.17), 0px 18px 40px rgba(0, 0, 0, 0.2), 0px 0px 0px rgba(0, 0, 0, 0.2); 
    position: relative;

    .character {
        position: absolute;
        right: 0;
        bottom: 0;
    }
`

export const CardInfoContainer = styled.div`
    padding: 48px 120px 60px 40px;

    header {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 300px;
        margin-bottom: 60px;
    }

    h2 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 2rem;
        line-height: 40px;
        text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.4);
        color: #ece4ef;
    }

    p{
        font-size: 14px;
        line-height: 18px;
        color: #d8cede;
    }

    main {
        width: 210px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .info h4{
        font-weight: 700;
        line-height: 130%;
        font-size: 14px;
        color: #ece4ef;
    }

    .info span{
        color: #9C83A7;
    }
`