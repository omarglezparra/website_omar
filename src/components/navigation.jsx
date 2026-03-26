import React from "react";

export const Navigation = ({ currentPage, cartItemCount }) => {
  const primaryLinks = [
    { href: "#/", label: "Home", page: "home" },
    { href: "#/products", label: "Products", page: "products" },
  ];

  const showCheckoutLink = currentPage !== "home" || cartItemCount > 0;

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Frankie's Bakery
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {primaryLinks.map((link) => (
              <li
                key={link.page}
                className={currentPage === link.page ? "active" : ""}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            {showCheckoutLink ? (
              <li className={currentPage === "checkout" ? "active" : ""}>
                <a href="#/checkout">
                  Checkout
                  {cartItemCount > 0 ? ` (${cartItemCount})` : ""}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};
