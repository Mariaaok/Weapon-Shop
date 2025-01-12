import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(135deg, #1a1a66, #000000); 
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  background-color: #0d0d33;
  border: 2px solid white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ProductImage = styled.img`
  width: 300px; 
  height: 300px; 
  object-fit: cover; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  background-color: #f0f0f0; 
  margin-top: 50px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  margin-top: 20px;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #555;
  padding-bottom: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Label = styled.span`
  font-weight: bold;
  color: #ffffff;
`;

export const Value = styled.span`
  color: #cccccc;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #222;
  color: white;
  width: 100%;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;


  &:hover {
    background-color: #003d80;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

export const CityRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  
`;

export const ComprarRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  justify-content: flex-end;
`;



