import { useState } from "react";

// Cart item type definition
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function SimpleCart() {
  // Sample cart data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Premium Headphones",
      price: 129.99,
      image: "/placeholder.svg?height=80&width=80",
      quantity: 1,
    },
    {
      id: 2,
      name: "Wireless Mouse",
      price: 49.99,
      image: "/placeholder.svg?height=80&width=80",
      quantity: 2,
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 89.99,
      image: "/placeholder.svg?height=80&width=80",
      quantity: 1,
    },
  ]);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate tax (10%)
  const tax = subtotal * 0.1;

  // Calculate total
  const total = subtotal + tax;

  // Update quantity function
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item function
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-30 ">
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">
            Add some items to your cart to see them here.
          </p>
          <button className="btn btn-primary">Continue Shopping</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="hidden md:grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-gray-500">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>
                <div className="divider"></div>

                {cartItems.map((item) => (
                  <div key={item.id} className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="col-span-6 flex items-center">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4 flex flex-col">
                          <h3 className="text-base font-medium">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-error text-sm flex items-center mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="col-span-2 text-center md:text-center">
                        <span className="md:hidden font-medium mr-2">
                          Price:
                        </span>
                        ${item.price.toFixed(2)}
                      </div>

                      <div className="col-span-2 flex items-center justify-center">
                        <div className="join">
                          <button
                            className="btn btn-sm join-item"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span className="join-item px-3 py-1 border-y flex items-center justify-center">
                            {item.quantity}
                          </span>
                          <button
                            className="btn btn-sm join-item"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="col-span-2 text-right">
                        <span className="md:hidden font-medium mr-2">
                          Total:
                        </span>
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                    {cartItems.indexOf(item) !== cartItems.length - 1 && (
                      <div className="divider"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="divider my-2"></div>

                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <button className="btn btn-primary w-full">
                    Proceed to Checkout
                  </button>

                  <button className="btn btn-outline w-full">
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
