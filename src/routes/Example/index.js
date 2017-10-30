const Example = require(`../../libs/...`);
const ErrorHandler = require(`../../libs/ErrorHandler`);
const ResponseHandler = require(`../../libs/ResponseHandler`);
const BASE_URL = `/example`;

module.exports = server => {
  
  server.get(
    `${ BASE_URL }/id/:id`,
    async(req, res) => {
      try {
        const example = await Example.getById(req.params.id);
  
        ResponseHandler(
          res,
          `Successfully got example`, {
            example
          }
        );
      } catch (err) {
        ErrorHandler(res, err);
      }
    }
  );
};