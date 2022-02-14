require('dotenv').config();

const all = {
  env: process.env.NODE_ENV,

  port: process.env.PORT || 8080,

  expiresIn: '48h',

  seddDB: process.env.NODE_ENV !== 'production',

  secrets: {
    session: process.env.SECRET_KEY || 's3cr3t_k3y@!!',
  },

  userRoles: [business]
};

module.exports = all;
