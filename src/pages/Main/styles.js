import styled from "styled-components";
import "font-awesome/css/font-awesome.css";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`;

export const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;

    input {
        flex: 1;
        height: 55px;
        padding: 0 20px;
        background: #fff;
        border: #444;
        border-radius: 3px;
        font-size: 18px;
        /* Error message input value */
        border: ${props => (props.withError ? "3px solid #F00" : 0)};
    }

    button {
        width: 80px;
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #63f5b6;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;
        color: #fff;

        &:hover {
            background: #52d89f;
        }
    }
`;
