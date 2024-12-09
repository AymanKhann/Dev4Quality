// import { expect } from 'chai';
// import countBy from '../src/countBy.js';

// describe('countBy.js E-commerce Test Suite', () => {
//   // 1. Count users by role
//   it('should count users by role', () => {
//     const users = [
//       { name: 'Alice', role: 'admin' },
//       { name: 'Bob', role: 'user' },
//       { name: 'Charlie', role: 'admin' },
//     ];

//     const result = countBy(users, (user) => user.role);

//     // Log the result for debugging
//     console.log('Result:', result);

//     expect(result).to.eql({ admin: 2, user: 1 });
//   });

//   // 2. Count products by category
//   it('should count products by category', () => {
//     const products = [
//       { name: 'Laptop', category: 'electronics' },
//       { name: 'Shirt', category: 'clothing' },
//       { name: 'Headphones', category: 'electronics' },
//     ];
//     const result = countBy(products, (product) => product.category);
//     expect(result).to.eql({ electronics: 2, clothing: 1 });
//   });

//   // 3. Count products by stock status
//   it('should count products by stock status', () => {
//     const products = [
//       { name: 'Laptop', inStock: true },
//       { name: 'Shirt', inStock: false },
//       { name: 'Headphones', inStock: true },
//     ];
//     const result = countBy(products, (product) => (product.inStock ? 'inStock' : 'outOfStock'));
//     expect(result).to.eql({ inStock: 2, outOfStock: 1 });
//   });

//   // 4. Count items in cart by category
//   it('should count items in cart by category', () => {
//     const cartItems = [
//       { name: 'Laptop', category: 'electronics' },
//       { name: 'Shirt', category: 'clothing' },
//       { name: 'Headphones', category: 'electronics' },
//     ];
//     const result = countBy(cartItems, (item) => item.category);
//     expect(result).to.eql({ electronics: 2, clothing: 1 });
//   });

//   // 5. Count products by price range
//   it('should count products by price range', () => {
//     const products = [
//       { name: 'Laptop', price: 1200 },
//       { name: 'Shirt', price: 30 },
//       { name: 'Headphones', price: 150 },
//     ];
//     const result = countBy(products, (product) => {
//       if (product.price < 50) return 'below50';
//       if (product.price < 200) return '50-200';
//       return 'above200';
//     });
//     expect(result).to.eql({ below50: 1, '50-200': 1, above200: 1 });
//   });

//   // 6. Count orders by status
//   it('should count orders by status', () => {
//     const orders = [
//       { orderId: 1, status: 'pending' },
//       { orderId: 2, status: 'completed' },
//       { orderId: 3, status: 'pending' },
//     ];
//     const result = countBy(orders, (order) => order.status);
//     expect(result).to.eql({ pending: 2, completed: 1 });
//   });

//   // 7. Count vendors by location
//   it('should count vendors by location', () => {
//     const vendors = [
//       { name: 'Vendor1', location: 'New York' },
//       { name: 'Vendor2', location: 'California' },
//       { name: 'Vendor3', location: 'New York' },
//     ];
//     const result = countBy(vendors, (vendor) => vendor.location);
//     expect(result).to.eql({ 'New York': 2, California: 1 });
//   });

//   // 8. Count customer reviews by rating
//   it('should count customer reviews by rating', () => {
//     const reviews = [
//       { reviewId: 1, rating: 5 },
//       { reviewId: 2, rating: 4 },
//       { reviewId: 3, rating: 5 },
//     ];
//     const result = countBy(reviews, (review) => review.rating);
//     expect(result).to.eql({ 5: 2, 4: 1 });
//   });

//   // 9. Count products sold by each vendor
//   it('should count products sold by each vendor', () => {
//     const sales = [
//       { productId: 1, vendor: 'Vendor1' },
//       { productId: 2, vendor: 'Vendor2' },
//       { productId: 3, vendor: 'Vendor1' },
//     ];
//     const result = countBy(sales, (sale) => sale.vendor);
//     expect(result).to.eql({ Vendor1: 2, Vendor2: 1 });
//   });

//   // 10. Count items in cart by vendor
//   it('should count items in cart by vendor', () => {
//     const cartItems = [
//       { name: 'Laptop', vendor: 'Vendor1' },
//       { name: 'Shirt', vendor: 'Vendor2' },
//       { name: 'Headphones', vendor: 'Vendor1' },
//     ];
//     const result = countBy(cartItems, (item) => item.vendor);
//     expect(result).to.eql({ Vendor1: 2, Vendor2: 1 });
//   });
// });
