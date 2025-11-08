import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Product categories
  const categories = [
    'all', 'butter', 'fruit', 'garlic', 'jams', 'ketchup', 'misc', 'nuts', 
    'olives', 'pasta sauce', 'pickles', 'quail eggs', 'queso', 'relish', 
    'salad dressings', 'salsa', 'sauces', 'sauerkraut', 'seasoning', 'syrup', 'veggies'
  ]

  // Sample products
  const products = [
    {
      id: 1,
      name: "Homemade Apple Butter",
      category: "butter",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400",
      description: "Smooth and spiced apple butter, slow-cooked to perfection"
    },
    {
      id: 2,
      name: "Strawberry Jam",
      category: "jams",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400",
      description: "Sweet and delicious strawberry jam made with fresh berries"
    },
    // Add more products as needed
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id)
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <>
      <Head>
        <title>Katie Bugs Country Kitchen - Homemade Goodness</title>
        <meta name="description" content="Homemade jams, preserves, and country kitchen specialties" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://via.placeholder.com/100" alt="Katie Bugs Logo" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-error" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                  Lady Bugs Country Kitchen
                </h1>
                <p className="text-sm italic" style={{ color: '#8B4513' }}>
                  Homemade Goodness from Our Kitchen to Yours
                </p>
              </div>
            </div>
            
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">{cart.length}</span>
              <button className="btn btn-error">
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero min-h-[400px]" style={{
        backgroundImage: 'linear-gradient(rgba(47, 82, 51, 0.7), rgba(47, 82, 51, 0.7)), url(https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content text-center text-white">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Brush Script MT, cursive' }}>
              Welcome to Katie Bugs Country Kitchen
            </h2>
            <p className="text-xl mb-6">
              Discover our delicious homemade jams, preserves, baked goods, and more!
            </p>
            <button className="btn btn-error btn-lg">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8" style={{ color: '#8B4513', fontFamily: 'Brush Script MT, cursive' }}>
            Our Products
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn btn-sm ${selectedCategory === category ? 'btn-primary' : 'btn-outline'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                <figure>
                  <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
                </figure>
                <div className="card-body">
                  <div className="badge badge-outline text-xs">{product.category}</div>
                  <h3 className="card-title text-lg" style={{ color: '#8B4513' }}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <div className="card-actions justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-error">
                      ${product.price.toFixed(2)}
                    </span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="btn btn-sm btn-success"
                    >
                      <i className="fas fa-cart-plus mr-2"></i>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8" style={{ color: '#8B4513', fontFamily: 'Brush Script MT, cursive' }}>
            About Katie Bugs Country Kitchen
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Welcome to our family kitchen! We've been making homemade jams, preserves, and baked goods 
            using traditional recipes passed down through generations. Every jar and every loaf is made 
            with love and the finest ingredients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl text-error mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#8B4513' }}>Made with Love</h3>
              <p className="text-gray-600">Every product is handcrafted with care</p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-success mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#8B4513' }}>Natural Ingredients</h3>
              <p className="text-gray-600">No artificial preservatives or additives</p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-warning mb-4">
                <i className="fas fa-home"></i>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#8B4513' }}>Small Batch</h3>
              <p className="text-gray-600">Quality over quantity, every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <div>
          <p className="font-bold text-lg">Katie Bugs Country Kitchen</p>
          <p>© 2025 - All rights reserved</p>
        </div>
      </footer>
    </>
  )
}
