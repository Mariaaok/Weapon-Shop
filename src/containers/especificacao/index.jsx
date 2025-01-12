import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Title,
  ProductDetails,
  ProductImage,
  ProductInfo,
  InfoRow,
  Label,
  Value,
  Input,
  Button,
  CityRow,
  ComprarRow,
} from "./styles";

const ProductDetailsPage = () => {
  const location = useLocation();
  const product = location.state;

  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCepChange = (e) => {
    setCep(e.target.value);
    setCity(""); 
    setError(""); 
  };

  const isValidCep = (cep) => /^[0-9]{8}$/.test(cep);

  const fetchCity = async () => {
    if (!isValidCep(cep)) {
      setError("CEP inválido. Deve conter exatamente 8 números.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setCity("Cidade não encontrada");
      } else {
        setCity(data.localidade || "Cidade não especificada");
      }
    } catch (error) {
      console.error("Erro ao buscar cidade:", error);
      setCity("Erro ao buscar cidade");
    } finally {
      setLoading(false);
    }
  };

  if (!product) {
    return <Container>Produto não encontrado</Container>;
  }

  return (
    <Container>
      <Title>{product.name}</Title>
      <ProductDetails>
        <ProductImage src={product.image} alt={product.name} />
        <ProductInfo>
          <InfoRow>
            <Label>Descrição:</Label>
            <Value>{product.description || "Descrição não disponível"}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Preço:</Label>
            <Value>{product.price || "Preço não disponível"}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Especificação:</Label>
            <Value>{product.specification || "Não especificada"}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Fabricante:</Label>
            <Value>{product.manufacturer || "Fabricante não informado"}</Value>
          </InfoRow>
          <CityRow>
            <Label>CEP:</Label>
            <Input
              type="text"
              value={cep}
              onChange={handleCepChange}
              placeholder="Digite o CEP"
              maxLength="8"
            />
            <Button onClick={fetchCity} disabled={loading}>
              {loading ? "Buscando..." : "Buscar"}
            </Button>
          </CityRow>
          {error && (
            <InfoRow>
              <Value style={{ color: "red", fontSize: "0.9rem" }}>{error}</Value>
            </InfoRow>
          )}
          <CityRow>
            <Label>Cidade:</Label>
            <Value>{city || "-"}</Value>
          </CityRow>
          <ComprarRow>
            {/* Botão de Enfeite */}
            <Button
              style={{ cursor: "default" }}
              onClick={(e) => e.preventDefault()}
            >
              Comprar
            </Button>
          </ComprarRow>
        </ProductInfo>
      </ProductDetails>
    </Container>
  );
};

export default ProductDetailsPage;
