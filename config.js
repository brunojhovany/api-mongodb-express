module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongodb://localhost/api-rest-mongo',
  SECRET_TOKEN: 'mypasswordTOKENsIsaNotSimplePassword'
}
