import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Chanuka',
      email: 'chanuka@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'JNaveen',
      email: 'Naveen@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Carrot',
      slug: 'Carrot',
      category: 'Vegetables',
      image: '/images/carrot.png',
      price: 130,
      countInStock: 50,
      brand: 'local',
      rating: 2.5,
      numReviews: 300,
      description:
        'Organic cultivated carrot for whole sale and retail prices.',
    },
    {
      //_id: '2',
      name: 'Pumpkin',
      slug: 'Pumpkin',
      category: 'Vegetables',
      image: '/images/Pumpkin.jpg',
      price: 430,
      countInStock: 20,
      brand: 'local',
      rating: 4.8,
      numReviews: 1000,
      description:
        'Organic cultivated Pumpkin for whole sale and retail prices.',
    },
    {
      //_id: '3',
      name: 'Beans',
      slug: 'Beans',
      category: 'Vegetables',
      image: '/images/Beans.jpg',
      price: 130,
      countInStock: 800,
      brand: 'local',
      rating: 3.5,
      numReviews: 50,
      description: 'Organic cultivated Beans for whole sale and retail prices.',
    },
    {
      //_id: '4',
      name: 'Cabbage',
      slug: 'Cabbage',
      category: 'Vegetables',
      image: '/images/Cabbage.jpg',
      price: 130,
      countInStock: 0,
      brand: 'local',
      rating: 1.5,
      numReviews: 50,
      description:
        'Organic cultivated Cabbage for whole sale and retail prices.',
    },
  ],
};
export default data;
