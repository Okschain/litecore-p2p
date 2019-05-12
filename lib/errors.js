'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on okschain-p2p Module {0}'
};

module.exports = require('okschain-lib').errors.extend(spec);
