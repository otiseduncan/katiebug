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

  // Sample products - Add your Katie Bugs products here
  const products = [
    {
      id: 1,
      name: "Homemade Apple Butter",
      category: "butter",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400",
      description: "Smooth and spiced apple butter, slow-cooked to perfection - 19 OZ"
    },
    {
      id: 2,
      name: "Monkey Butter",
      category: "butter",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1587132117825-84eec8e00d5f?w=400",
      description: "Banana Pineapple Mango - 19 OZ"
    },
    {
      id: 3,
      name: "Pecan Apple Butter",
      category: "butter",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1599909533003-d0480d5f0632?w=400",
      description: "Contains 576 Pecans - 19 OZ"
    },
    {
      id: 4,
      name: "Strawberry Jam",
      category: "jams",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400",
      description: "Sweet and delicious strawberry jam made with fresh berries"
    },
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
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

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
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://via.placeholder.com/100?text=Logo" alt="Katie Bugs Logo" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  Lady Bugs Country Kitchen
                </h1>
                <p className="text-sm italic text-wood">
                  Homemade Goodness from Our Kitchen to Yours
                </p>
              </div>
            </div>
            
            <div className="indicator">
              <span className="indicator-item badge badge-primary text-white">{cartItemCount}</span>
              <button className="btn btn-primary">
                <i className="fas fa-shopping-cart text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero min-h-[500px] relative" style={{
        backgroundImage: 'linear-gradient(rgba(62, 142, 65, 0.7), rgba(62, 142, 65, 0.7)), url(https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg">
              Welcome to Katie Bugs Country Kitchen
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Discover our delicious homemade jams, preserves, baked goods, and more!
            </p>
            <a href="#products" className="btn btn-primary btn-lg text-white">
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white" id="products">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-wood">
            Our Products
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Every jar is handcrafted with love using the finest ingredients
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12 max-h-64 overflow-y-auto p-4 bg-accent/50 rounded-lg">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn btn-sm ${selectedCategory === category ? 'btn-primary text-white' : 'btn-outline btn-primary'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <figure className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                  />
                </figure>
                <div className="card-body">
                  <div className="badge badge-primary text-white text-xs">
                    {product.category}
                  </div>
                  <h3 className="card-title text-lg font-serif text-wood">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  <div className="card-actions justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="btn btn-sm btn-primary text-white"
                    >
                      <i className="fas fa-cart-plus mr-2"></i>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8 text-wood">
            About Katie Bugs Country Kitchen
          </h2>
          <p className="text-lg text-wood/80 mb-6 text-center leading-relaxed">
            Welcome to our family kitchen! We've been making homemade jams, preserves, and baked goods 
            using traditional recipes passed down through generations. Every jar and every loaf is made 
            with love and the finest ingredients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl text-primary mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-wood">Made with Love</h3>
              <p className="text-gray-600">Every product is handcrafted with care</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl text-leaf mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-wood">Natural Ingredients</h3>
              <p className="text-gray-600">No artificial preservatives or additives</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl text-secondary mb-4">
                <i className="fas fa-home"></i>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-wood">Small Batch</h3>
              <p className="text-gray-600">Quality over quantity, every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-wood text-white">
        <div>
          <p className="font-serif font-bold text-xl">Katie Bugs Country Kitchen</p>
          <p className="text-accent/90">© 2025 - All rights reserved</p>
        </div>
      </footer>

      {/* Syfernetics Badge */}
      <div className="syfernetics-badge">
        Built by Syfernetics
      </div>
    </>
  )
}
