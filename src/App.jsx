export default function App() {
  return <></>;
}

const [cart, setCart] = useState([]);

const addToCart = (plant) => {
  setCart(prevCart => {
    const existingItem = prevCart.find(item => item.id === plant.id);
    if (existingItem) {
      return prevCart.map(item =>
        item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...prevCart, { ...plant, quantity: 1 }];
  });
};

const incrementQuantity = (id) => {
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decrementQuantity = (id) => {
  setCart(prevCart =>
    prevCart
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
  );
};
