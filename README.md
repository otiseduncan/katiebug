# Katie Bugs Country Kitchen - Ecommerce Website

Welcome to the Katie Bugs Country Kitchen ecommerce site! This is a fully functional online store for homemade jams, preserves, baked goods, and other country kitchen specialties.

## Features

? **Complete Ecommerce Functionality**
- Product catalog with filtering by category
- Shopping cart with quantity management
- Checkout system with order summary
- Responsive design for all devices

?? **Beautiful Design**
- Country kitchen themed styling
- Professional layout with smooth animations
- Mobile-friendly navigation
- Custom color scheme matching the brand

?? **Shopping Experience**
- Add/remove items from cart
- Adjust quantities
- Real-time cart updates
- Persistent cart (saved in browser)
- Order summary with tax and shipping

?? **Responsive**
- Works perfectly on desktop, tablet, and mobile
- Touch-friendly interface
- Optimized for all screen sizes

## Getting Started

Simply open `index.html` in your web browser to view the site!

### For Local Development:
1. Clone this repository
2. Open `index.html` in your browser
3. Start shopping!

### To Deploy:
You can deploy this site to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any web server

## File Structure

```
katiebug/
??? index.html      # Main HTML file
??? styles.css      # All styling
??? script.js       # JavaScript functionality
??? logo.png        # Your logo (add your actual logo here)
??? README.md       # This file
```

## Customization

### Adding Products
Edit the `products` array in `script.js`:
```javascript
{
    id: 16,
    name: "Your Product Name",
    category: "jams", // jams, baked, sauces, or seasonal
    price: 9.99,
    image: "image-url",
    description: "Product description"
}
```

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #8B4513;    /* Main brown */
    --accent-color: #D32F2F;     /* Red accent */
    --dark-green: #2F5233;       /* Dark green */
    /* ... more colors */
}
```

### Updating Contact Information
Edit the contact section in `index.html` to add your real email, phone, and address.

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Local Storage for cart persistence

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

Consider adding:
- Backend integration for real payment processing
- User accounts and order history
- Product reviews and ratings
- Email notifications
- Inventory management
- Admin panel
- Payment gateway (Stripe, PayPal, etc.)

## License

© 2025 Katie Bugs Country Kitchen. All rights reserved.

## Support

For questions or support, contact: orders@katiebugs.com

---

**Note:** This is a frontend-only implementation. To accept real payments, you'll need to integrate a backend system and payment processor.
