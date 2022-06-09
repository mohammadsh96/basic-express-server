'use strict';
module.exports = (error, req, res, next) => {
  if (req.query.name === '') {
    res.status(500).send({
      code: 500,
      route: req.path,
      message: `Server Error:${error} and you entered an empty name please don't do it again`,
    })
  } else if (req.query.name === 'wrong Name') {
    res.status(500).send({
      code: 500,
      route: req.path,
      message: `Server Error:${error} and  you enterd a number `,
    })
  };
};



// 'use strict';
// module.exports = (error, req, res, next) => {
//     res.status(500).send({
//         code: 500,
//         route: req.path,
//         message: `Server Error:${error.message}`,
//     });
// };