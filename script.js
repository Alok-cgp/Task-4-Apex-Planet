const products = [
    {
      name: "Smartphone",
      category: "electronics",
      price: 500,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      name: "Laptop",
      category: "electronics",
      price: 900,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      name: "T-shirt",
      category: "clothing",
      price: 25,
      rating: 4.0,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      name: "Sofa",
      category: "home",
      price: 600,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    },
    {
      name: "Microwave",
      category: "home",
      price: 150,
      rating: 3.8,
      image: "https://tse4.mm.bing.net/th?id=OIP.2i4e_IHB2QMZFkwgfXFNoAHaE8&pid=Api&P=0&h=180"
    },
    {
      name: "Jeans",
      category: "clothing",
      price: 40,
      rating: 4.3,
      image: "https://lsco.scene7.com/is/image/lsco/A47500010-alt1-pdp-lse?fmt=jpeg&qlt=70&resMode=bisharp&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=1852"
},
    {
      name: "Headphones",
      category: "electronics",
      price: 120,
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX679_.jpg"    },
    {
        name: "Smartwatch",
        category: "electronics",
        price: 200,
        rating: 4.4,
        image: "https://tse4.mm.bing.net/th?id=OIP.z8FnZH-EdzeOPJLvW86V_QHaHa&pid=Api&P=0&h=180"
      },

      {
        name: "Wooden Chair",
        category: "furniture",
        price: 180,
        rating: 4.1,
        image: "https://dl.dropboxusercontent.com/s/jsz73zife54q0eh/sky2253LRG-1.jpg"
      },
      {
        name: "Wrist Bracelet",
        category: "accessories",
        price: 60,
        rating: 4.5,
        image: "https://cdn.shopify.com/s/files/1/1727/3009/products/HEAVYDUTYSolid925SterlingSilver12MMLinkMenBraceletSize8910VYJewelry_grande.jpg?v=1624615301"
      },
      {
        name: "Fiction Book",
        category: "books",
        price: 35,
        rating: 4.9,
        image: "https://imgix.bustle.com/scary-mommy/2020/01/best-fantasy-book-story-thieves.jpg?w=414&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2"
      }
      
      
  ];
  
  
  
  const productList = document.getElementById("products");
  const categoryFilter = document.getElementById("category");
  const priceFilter = document.getElementById("price");
  const priceValue = document.getElementById("priceValue");
  const sortSelect = document.getElementById("sort");
  
  function displayProducts(list) {
    productList.innerHTML = "";
    list.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        <p class="rating">Rating: ${product.rating} ★</p>
      `;
      productList.appendChild(card);
    });
  }
  
  
  function applyFilters() {
    let filtered = [...products];
  
    const selectedCategory = categoryFilter.value;
    const maxPrice = parseInt(priceFilter.value);
    const sortType = sortSelect.value;
  
    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
  
    filtered = filtered.filter(p => p.price <= maxPrice);
  
    if (sortType === "high") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "low") {
      filtered.sort((a, b) => a.rating - b.rating);
    }
  
    displayProducts(filtered);
  }
  
  categoryFilter.addEventListener("change", applyFilters);
  priceFilter.addEventListener("input", () => {
    priceValue.textContent = priceFilter.value;
    applyFilters();
  });
  sortSelect.addEventListener("change", applyFilters);
  
  // Initial load
  displayProducts(products);
  