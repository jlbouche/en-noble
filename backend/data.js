import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'J',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
          isVendor: true,
          vendor: {
              name: 'Malus Minus',
              description: 'best seller',
              rating: 4.5,
              numReviews: 120,
          }
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
          isVendor: false,
        },
    ]
}

export default data;