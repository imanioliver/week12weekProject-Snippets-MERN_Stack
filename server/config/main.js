module.exports = {
  // Secret key for JWT signing and encryption
  'secret': 'merner burner',
  // Database connection information
  'database': 'mongodb://localhost:27017/mernsnips',
  // Setting port for server
  'port': process.env.PORT || 3000
}
