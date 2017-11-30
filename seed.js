const db = require('./server/db');
const User = require('./server/db/models/user');
const Product = require('./server/db/models/product');
const Order = require('./server/db/models/order');
const Purchase = require('./server/db/models/purchase');
const Review = require('./server/db/models/review');
const ShippingAddress = require('./server/db/models/shippingAddress');

const users = [
  {
    fullName: 'Cody',
    email: 'cody@cody.cody',
    password: 'pass',
    billingAddress: '1234 Maple St. Chicago, IL 60657',
    permissions: 'admin'
  },
  {
    fullName: 'Kevin',
    email: 'kevin@k.com',
    password: 'pass',
    billingAddress: '567 Maple St. Chicago, IL 60657',
    permissions: 'authenticated'
  }
];

const products = [
  {
    title: 'Uniqlo Broadcloth Shirt',
    description: 'Limited Edition Flannel',
    inventoryQuantity: 500,
    price: 29.99,
    size: 'M',
    category: 'shirt',
    image: 'https://uniqlo.scene7.com/is/image/UNIQLO/goods_17_400326?$prod$'
  },
  {
    title: 'Land\'s End Flannel Shirt',
    description: 'Made in India',
    inventoryQuantity: 100,
    price: 48.99,
    size: 'L',
    category: 'shirt',
  },
  {
    title: 'Levi\'s Rugged Wear',
    description: 'Original Levi\'s craftmenship, since 1858',
    inventoryQuantity: 100,
    price: 99.99,
    size: 'S',
    category: 'shirt',
    image: 'http://www.greatlakesprep.com/wp-content/uploads/2012/09/Lands-End-Canvas-Plaid-Poplin-Shirt.jpg'
  },
  {
    title: 'AEO',
    description: 'American Eagle Outfitters',
    inventoryQuantity: 100,
    price: 45.99,
    size: 'M',
    category: 'shirt',
    image: 'https://s7d2.scene7.com/is/image/aeo/2153_9826_309_of?$PDP_78_Main$'
  },
  {
    title: 'Rugged Wear',
    description: 'Wrangler\'s Cut',
    inventoryQuantity: 100,
    price: 95.99,
    size: 'L',
    category: 'shirt',
    image: 'http://lsco1.scene7.com/is/image/lsco/Levi/clothing/211980025-front-pdp.jpg?$2500x2000$'
  },
  {
    title: 'Slim-Fit Check-Print Classic ',
    description: 'Old Navy',
    inventoryQuantity: 100,
    price: 20.99,
    size: 'M',
    category: 'shirt',
    image: 'http://www.oldnavy.com/products/res/thumbimg/slim-fit-check-print-classic-shirt-for-men-red-all-over.jpg'
  },
  {
    title: 'Cotton Wool Elbow Patch',
    description: 'J Crew',
    inventoryQuantity: 100,
    price: 84,
    size: 'L',
    category: 'shirt',
    image: 'https://cdnd.lystit.com/photos/8acf-2015/11/10/jcrew-old-forest-cotton-wool-elbow-patch-shirt-in-clark-plaid-green-product-1-826370856-normal.jpeg'
  }
];

const orders = [
  {
    quantityOrdered: 2,
    completed: true,
    userId: 1
  },
  {
    quantityOrdered: 1,
    completed: false,
    userId: 1
  },
  {
    quantityOrdered: 5,
    completed: true,
    userId: 1
  },
  {
    quantityOrdered: 5,
    completed: false,
    userId: 2
  }
];

const purchases = [
  {
    price: 1.95,
    orderId: 1,
    productId: 2
  },
  {
    price: 2.3,
    orderId: 2,
    productId: 1
  }
];

const reviews = [
  {
    rating: 1,
    content: 'Not so great :(',
    userId: 2,
    productId: 1
  },
  {
    rating: 5,
    content: 'Fantastic!',
    userId: 1,
    productId: 2
  }
];

const shippingAddresses = [
  {
    recipient: 'Cody',
    streetAddress1: '999 Main st.',
    city: 'Orlando',
    state: 'FL',
    zip: 09098,
    userId: 1,
    orderId: 1
  },
  {
    recipient: 'Kevin',
    streetAddress1: '5454 Arbor',
    city: 'Anchorage',
    state: 'AK',
    zip: 98765,
    userId: 2,
    orderId: 2
  }
];

const seed = () =>
  Promise.all(users.map(user => User.create(user)))
    .then(() => Promise.all(products.map(product => Product.create(product))))
    .then(() => Promise.all(orders.map(order => Order.create(order))))
    .then(() => Promise.all(purchases.map(purchase => Purchase.create(purchase))))
    .then(() => Promise.all(reviews.map(review => Review.create(review))))
    .then(() => Promise.all(shippingAddresses.map(address => ShippingAddress.create(address))));

const main = () => {
  console.log('Syncing db...');
  db
    .sync({ force: true })
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
