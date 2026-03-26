import React from "react";

const formatPrice = (price) => `$${price.toFixed(2)}`;

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const ProductsPage = ({
  products,
  cart,
  cartItemCount,
  cartSubtotal,
  onUpdateQuantity,
  onNavigateToCheckout,
}) => {
  const groupedProducts = products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }

    groups[product.category].push(product);
    return groups;
  }, {});

  return (
    <main className="products-page">
      <section className="page-hero page-hero--products">
        <div className="container">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Frankie's Bakery catalog</span>
            <h1>Products</h1>
            <p>
              Browse every bread, brownie, and cookie from the Frankie's Bakery
              product data set. Adjust quantities as you scroll, then continue
              to the demo checkout.
            </p>
          </div>
        </div>
      </section>

      <section className="products-overview">
        <div className="container">
          <div className="products-overview__panel">
            <div>
              <p className="products-overview__label">Demo cart</p>
              <h2>{cartItemCount} item(s) selected</h2>
              <p>
                Live subtotal: <strong>{formatPrice(cartSubtotal)}</strong>
              </p>
            </div>
            <button
              type="button"
              className="btn btn-custom"
              onClick={onNavigateToCheckout}
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </section>

      <section className="products-catalog">
        <div className="container">
          {Object.entries(groupedProducts).map(([category, items]) => (
            <section className="product-category" key={category}>
              <div className="section-title product-category__title">
                <h2>{category}</h2>
                <p>{items.length} bakery favorites in this collection.</p>
              </div>

              <div className="product-list">
                {items.map((product) => {
                  const quantity = cart[product.product_id] || 0;

                  return (
                    <article className="product-card" key={product.product_id}>
                      <div className="product-card__image-wrap">
                        <img
                          className="product-card__image"
                          src={product.localImage}
                          alt={product.name}
                        />
                      </div>

                      <div className="product-card__content">
                        <div className="product-card__header-row">
                          <div>
                            <p className="product-card__eyebrow">
                              {product.product_id} • {product.availability}
                            </p>
                            <h3>{product.name}</h3>
                          </div>
                          <div className="product-card__price-block">
                            <span className="product-card__price">
                              {formatPrice(product.price)}
                            </span>
                            <span className="product-card__rating">
                              {product.rating.toFixed(1)} ★
                            </span>
                          </div>
                        </div>

                        <p className="product-card__description">
                          {product.description}
                        </p>

                        <div className="product-card__meta-grid">
                          <div>
                            <span className="product-card__meta-label">
                              Release Date
                            </span>
                            <p>{formatDate(product.release_date)}</p>
                          </div>

                        </div>

                        <div className="product-card__ingredients">
                          <span className="product-card__meta-label">
                            Ingredients
                          </span>
                          <p>{product.ingredients}</p>
                        </div>

                        <div className="product-card__tags">
                          {product.tags.map((tag) => (
                            <span className="product-tag" key={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="product-card__footer">
                          <div className="quantity-picker" aria-label={`${product.name} quantity`}>
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

                          <p className="product-card__cart-note">
                            {quantity > 0
                              ? `${quantity} in demo cart`
                              : "Add any quantity for checkout"}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};
