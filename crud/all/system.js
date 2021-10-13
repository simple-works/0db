//==============================================================================
// ■ ALL/System (all/system.js)
//------------------------------------------------------------------------------
//     Global system stuff.
//==============================================================================
const { matches } = require("../../utils/compare");

//------------------------------------------------------------------------------
// ► ALL/System-Task
//------------------------------------------------------------------------------
module.exports = {
  before(args) {
    const { query, options } = args;
    if (query) {
      args.queryFn = matches(query, options);
    }
  },
  async after({ collection, options }) {
    const { save = true } = options;
    if (save) {
      await collection.save();
    }
  }
}