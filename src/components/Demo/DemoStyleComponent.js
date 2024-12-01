import styled,{ keyframes } from "styled-components";

export const BackButton = styled.button`
    position: absolute; /* Position it absolutely within the container */
    top: 20px; /* Distance from the top */
    left: 20px; /* Distance from the left */
    z-index: 1; /* Ensure it's above other elements */
    background-color: #4CAF50; /* Green background */
    color: white; /* White text */
    padding: 10px 20px; /* Padding */
    border: none; /* No border */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Pointer cursor on hover */
    font-size: 16px; /* Font size */

    &:hover {
        background-color: #45a049; /* Darker green on hover */
    }
`;

// export const DemoContainer = styled.div`
//     background-color: ${({ theme }) => theme.bg}; /* Ensure this uses your theme background */
//     color: white; /* Make text color white to be visible against dark backgrounds */
//     min-height: 100vh; /* Ensure it takes full viewport height */
//     position: relative; /* Position relative for absolutely positioned children */
//     padding: 20px; /* Add some padding to the container */
// `;
export const DemoContainer = styled.div`
  width: 100vw;
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121212; /* Optional background color */
`;



export const ResumeButton = styled.a`
    flex: 1;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 10%;
    
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;