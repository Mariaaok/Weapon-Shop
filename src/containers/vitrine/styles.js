import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(135deg, #1a1a66, #000000); 
  color: white; 
  min-height: 100vh; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Title = styled.h1`
  font-size: 3.5rem;
  color: #ffffff;
  margin-bottom: 30px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

export const ProductCard = styled.div`
  background-color: #001a4d; 
  color: white;
  padding: 15px;
  border-radius: 8px;
  border: 2px solid white; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  }

  cursor: pointer;
`;


export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const ProductName = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: #cccccc; 
  margin-bottom: 15px;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #00ffcc; 
`;
