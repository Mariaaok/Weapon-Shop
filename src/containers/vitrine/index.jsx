import React from "react";
import { useNavigate } from "react-router-dom";  
import {
  Container,
  Title,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductPrice,
} from "./styles";

const products = [
  { id: 1, name: "Buster Sword", description: "A large broadsword that inherited the hopes of those who fight.", price: "500 Gil", image: "/src/img/cloud1.png", specification: "For Cloud", manufacturer: "Maria Okubo"},
  { id: 2, name: "Leather Gloves", description: "Well-worn leather gloves that have seen their fair share of fights.", price: "450 Gil", image: "/src/img/tifa1.png", specification: "For Tifa", manufacturer: "Maria Okubo" },
  { id: 3, name: "Gatling Gun", description: "A custom-order gun comissioned specifically to take down Shinra forces.", price: "500 Gil", image: "/src/img/barret1.png", specification: "For Barret", manufacturer: "Maria Okubo" },
  { id: 4, name: "Guard Stick", description: "A vintage and well-cared-for staff. Also happens to be eco-friendly.", price: "600 Gil", image: "/src/img/aerith1.png", specification: "For Aerith", manufacturer: "Maria Okubo" },
  { id: 5, name: "Hardedge", description: "A mighty blade able to cleave in one stroke anything foolish enough to stand in the wielder's way.", price: "1000 Gil", image: "/src/img/cloud3.png", specification: "For Cloud", manufacturer: "Maria Okubo"},
  { id: 6, name: "4-Point Shuriken", description: "An oversized throwing star used by ninja from Wutai.", price: "500 Gil", image: "/src/img/yuffie1.png", specification: "For Yuffie", manufacturer: "Maria Okubo"},
  { id: 7, name: "Purple Pain", description: "Leather gloves made from the hide of a ferocious beast.", price: "1200 Gil", image: "/src/img/tifa2.png", specification: "For Tifa", manufacturer: "Maria Okubo"},
  { id: 8, name: "Golden Collar", description: "An opulent collar forged from gold found in a forest stream.", price: "1100 Gil", image: "/src/img/nanaki1.png", specification: "For Nanaki", manufacturer: "Maria Okubo"},
];

const Index = () => {
  const navigate = useNavigate();  

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product }); 
  };

  return (
    <Container>
      <Title>Weapon Shop</Title>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            onClick={() => handleProductClick(product)}
          >
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default Index;
