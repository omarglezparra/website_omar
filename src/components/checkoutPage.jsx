import React from "react";

const formatPrice = (price) => `$${price.toFixed(2)}`;

export const CheckoutPage = ({
  products,
  cart,
  cartItems,
  cartItemCount,
  cartSubtotal,
  confirmationMessage,
  onUpdateQuantity,
  onNavigateToProducts,
  onPlaceOrder,
  onClearCart,
}) => {
  // Only show products the user has actually added to the cart
  const cartProducts = products.filter(
    (p) => (cart[p.product_id] || 0) > 0
  );

  return (
    <main className="checkout-page">
      <section className="page-hero page-hero--checkout">
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Demo checkout</span>
            <h1>Checkout</h1>
            <p>
              Update quantities for any Frankie's Bakery product, review the
              running total, and place a sample order for the demo.
            </p>
          </div>
        </div>
      </section>

      <section className="checkout-layout">
        <div className="container">
          <div className="checkout-grid">
            <div className="checkout-products">
              <div className="checkout-products__header">
                <h2>Your order</h2>
                <button
                  type="button"
                  className="checkout-link-button"
                  onClick={onNavigateToProducts}
                >
                  ← Browse products
                </button>
              </div>

              {cartProducts.length > 0 ? (
                cartProducts.map((product) => {
                  const quantity = cart[product.product_id] || 0;
                  const lineTotal = product.price * quantity;

                  return (
                    <article className="checkout-item" key={product.product_id}>
                      <img
                        className="checkout-item__image"
                        src={product.localImage}
                        alt={product.name}
                      />

                      <div className="checkout-item__details">
                        <p className="checkout-item__eyebrow">
                          {product.product_id} • {product.category}
                        </p>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                      </div>

                      <div className="checkout-item__controls">
                        <span className="checkout-item__price">
                          {formatPrice(product.price)}
                        </span>
                        <div
                          className="quantity-picker quantity-picker--compact"
                          aria-label={`${product.name} quantity`}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(product.product_id, quantity - 1)
                            }
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min="0"
                            value={quantity}
                            onChange={(event) =>
                              onUpdateQuantity(
                                product.product_id,
                                event.target.value
                              )
                            }
                          />
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(product.product_id, quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <span className="checkout-item__line-total">
                          {quantity > 0 ? formatPrice(lineTotal) : "—"}
                        </span>
                      </div>
                    </article>
                  );
                })
              ) : (
                <div className="checkout-empty">
                  <p>
                    Your cart is empty. Browse products and add items to get
                    started.
                  </p>
                  <button
                    type="button"
                    className="btn btn-custom"
                    onClick={onNavigateToProducts}
                  >
                    Browse Products
                  </button>
                </div>
              )}
            </div>

            <aside className="checkout-summary">
              <h2>Order summary</h2>
              <div className="checkout-summary__stats">
                <div>
                  <span>Items</span>
                  <strong>{cartItemCount}</strong>
                </div>
                <div>
                  <span>Subtotal</span>
                  <strong>{formatPrice(cartSubtotal)}</strong>
                </div>
              </div>

              <div className="checkout-summary__list">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div className="checkout-summary__row" key={item.product_id}>
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <strong>{formatPrice(item.lineTotal)}</strong>
                    </div>
                  ))
                ) : (
                  <p className="checkout-summary__empty">
                    Your demo cart is empty. Add products or set quantities to
                    begin.
                  </p>
                )}
              </div>

              <button
                type="button"
                className="btn btn-custom btn-block"
                onClick={onPlaceOrder}
                disabled={cartItemCount === 0}
              >
                Place Demo Order
              </button>

              <button
                type="button"
                className="checkout-clear-button"
                onClick={onClearCart}
                disabled={cartItemCount === 0}
              >
                Remove All Items
              </button>

              {confirmationMessage ? (
                <div className="checkout-summary__confirmation" role="status">
                  {confirmationMessage}
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};
