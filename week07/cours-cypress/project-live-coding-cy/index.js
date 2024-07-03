document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      id: 1,
      title: "Produit 1",
      description: "Description du produit 1",
      image:
        "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHByb2R1Y3R8fDB8fHx8MTY4ODY2NTk1OQ&ixlib=rb-1.2.1&q=80&w=200",
      views: 10,
      addedDate: "2023-07-01",
    },
    {
      id: 2,
      title: "Produit 2",
      description: "Description du produit 2",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHByb2R1Y3R8fDB8fHx8MTY4ODY2NTk1OQ&ixlib=rb-1.2.1&q=80&w=200",
      views: 20,
      addedDate: "2023-07-02",
    },
    {
      id: 3,
      title: "Produit 3",
      description: "Description du produit 3",
      image:
        "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHByb2R1Y3R8fDB8fHx8MTY4ODY2NTk1OQ&ixlib=rb-1.2.1&q=80&w=200",
      views: 30,
      addedDate: "2023-07-03",
    },
    {
      id: 4,
      title: "Produit 4",
      description: "Description du produit 4",
      image:
        "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHByb2R1Y3R8fDB8fHx8MTY4ODY2NTk1OQ&ixlib=rb-1.2.1&q=80&w=200",
      views: 40,
      addedDate: "2023-07-04",
    },
    {
      id: 5,
      title: "Produit 5",
      description: "Description du produit 5",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxwcm9kdWN0fHx8MHx8fDE2ODg2NjU5NTk&ixlib=rb-1.2.1&q=80&w=200",
      views: 50,
      addedDate: "2023-07-05",
    },
    {
      id: 6,
      title: "Produit 6",
      description: "Description du produit 6",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxwcm9kdWN0fHx8MHx8fDE2ODg2NjU5NTk&ixlib=rb-1.2.1&q=80&w=200",
      views: 60,
      addedDate: "2023-07-06",
    },
  ];

  let recentlyAdded = [...products]
    .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
    .slice(0, 6);
  let mostViewed = [...products].sort((a, b) => b.views - a.views).slice(0, 6);
  let lastViewed = [...products].slice().reverse().slice(0, 6); // Assuming products are viewed in the order they are added

  function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear previous content
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
                <div class="product-image" style="background-image: url(${product.image})"></div>
                <div class="product-details">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-views">Vues: <span class="views-count">${product.views}</span></p>
                </div>
            `;
      productCard.addEventListener("click", () => {
        product.views++;
        updateViewsCount(productCard, product.views);
        updateMostViewed();
        updateLastViewed(product);
      });
      container.appendChild(productCard);
    });
  }

  function updateViewsCount(card, views) {
    const viewsCount = card.querySelector(".views-count");
    viewsCount.textContent = views;
  }

  function updateMostViewed() {
    mostViewed = [...products].sort((a, b) => b.views - a.views).slice(0, 6);
    renderProducts(mostViewed, "most-viewed");
  }

  function updateLastViewed(product) {
    lastViewed = lastViewed.filter((p) => p.id !== product.id);
    lastViewed.unshift(product);
    lastViewed = lastViewed.slice(0, 6);
    renderProducts(lastViewed, "last-viewed");
  }

  renderProducts(recentlyAdded, "recently-added");
  renderProducts(mostViewed, "most-viewed");
  renderProducts(lastViewed, "last-viewed");
});
