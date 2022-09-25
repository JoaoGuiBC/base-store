import { useEffect, useState } from "react";
import { X } from "phosphor-react";
import Image from "next/future/image";

import { useCheckoutBag } from "../hooks/useCheckoutBag";

import {
  ModalContainer,
  ModalWrapper,
  ProductsContainer,
  Footer,
  ImageContainer,
  Product,
} from "../styles/components/modal";

interface ModalProps {
  isModalHidden: boolean;
  changeModalVisibility: () => void;
}

export function Modal({ isModalHidden, changeModalVisibility }: ModalProps) {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState('R$ 00,00');

  const { products, removeProductFromBag } = useCheckoutBag();

  useEffect(() => {
    if (products.length > 0) {
      const itemsQuantity = products.map(product => product.quantity).reduce((acc, cur) => {
        return acc + cur;
      });
      const price = products.map(product => product.priceRaw * product.quantity).reduce((acc, cur) => {
        return acc + cur;
      });

      const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(Number(price) / 100)
      
      setTotalItems(itemsQuantity);
      setTotalPrice(formattedPrice);
    } else {
      setTotalItems(0);
      setTotalPrice('R$ 00,00');
    }
  }, [products]);

  return (
    <ModalWrapper off={isModalHidden}>
      <ModalContainer off={isModalHidden} onClick={() => console.log()}>
        <button onClick={changeModalVisibility}>
          <X size={24} />
        </button>

        <strong>Sacola de compras</strong>

        <ProductsContainer>
          {products && products.map(product => (
            <Product key={product.priceId}>
              <ImageContainer>
                <Image
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  placeholder="blur"
                  blurDataURL={product.placeholderImage}
                  width={94}
                  height={94}
                />
              </ImageContainer>

              <div>
                <span>{product.name}</span>
                <span>Quantidade: {product.quantity}</span>
                <strong>{product.price}</strong>

                <button
                  onClick={() => removeProductFromBag(product.priceId)}
                >
                  Remover
                </button>
              </div>
            </Product>
          ))}
        </ProductsContainer>

        <Footer>
          <div>
            <span>Quantidade</span>
            <span>{totalItems} itens</span>
          </div>
          <div>
            <strong>Valor total</strong>
            <strong>{totalPrice}</strong>
          </div>

          <button>Finalizar compra</button>
        </Footer>
      </ModalContainer>
    </ModalWrapper>
  );
}