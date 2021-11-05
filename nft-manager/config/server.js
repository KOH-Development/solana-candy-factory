module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 9999),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '003a66e585c43a13eb3869d888415f53'),
    },
  },
});
