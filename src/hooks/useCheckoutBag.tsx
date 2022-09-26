import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Product {
  name: string,
  price: string,
  priceId: string;
  quantity: number;
  imageUrl: string,
  imageAlt: string,
  priceRaw: number,
  placeholderImage: string,
}

interface CheckoutContextData {
  products: Product[];
  totalProducts: number;
  removeProductFromBag(priceId: string): void;
  addProductToBag(newProduct: Omit<Product, "quantity">): void;
};

interface CheckoutProviderProps {
  children: ReactNode;
};

export const CheckoutContext = createContext({} as CheckoutContextData);

function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);

  function addProductToBag(newProduct: Omit<Product, "quantity">) {
    const isAlreadyStored = products.find(product => product.priceId === newProduct.priceId);

    if (isAlreadyStored) {
      const newStorage = products.map(product => {
        if (product.priceId !== newProduct.priceId) {
          return product;
        }

        return {
          ...product,
          quantity: product.quantity + 1,
        };
      });

      setProducts(newStorage);
    } else {
      setProducts([...products, { ...newProduct, quantity: 1 }]);
    }
  }

  function removeProductFromBag(priceId: string) {
    const removedProduct = products.find(product => product.priceId === priceId);
    const filteredProducts = products.filter(product => product.priceId !== priceId);

    if (!removedProduct) {
      return alert('Erro, produto inexistente.');
    }

    if (removedProduct.quantity > 1) {
      setProducts([...filteredProducts, {...removedProduct, quantity: removedProduct.quantity - 1}]);
    } else {
      setProducts([...filteredProducts]);
    }
  }

  useEffect(() => {
    const itemsQuantity = products.map(product => product.quantity).reduce((acc, cur) => acc + cur, 0);
    setTotalProducts(itemsQuantity);
  }, [products]);

  return (
    <CheckoutContext.Provider value={{ products, totalProducts, addProductToBag, removeProductFromBag }}>
      {children}
    </CheckoutContext.Provider>
  );
}

function useCheckoutBag() {
  const context = useContext(CheckoutContext);

  return context;
}

export { CheckoutProvider, useCheckoutBag };
