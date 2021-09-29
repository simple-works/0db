//==============================================================================
// ■ CRUD-Provider (crud/index.js)
//------------------------------------------------------------------------------
//     CRUD operations.
//==============================================================================
const $create = require("./create");
const $read = require("./read");
const $update = require("./update");
const $delete = require("./delete");

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = $crud;

//------------------------------------------------------------------------------
// ● CRUD-Main
//------------------------------------------------------------------------------
function $crud(collection) {
  return {
    async create(item, options) {
      return $create(collection, item, options);
    },
    async read(query, options) {
      return $read(collection, query, options);
    },
    async update(query, item, options) {
      return $update(collection, query, item, options);
    },
    async delete(query, options) {
      return $delete(collection, query, options);
    },
    async clear() {
      collection.splice(0, collection.length);
      collection.save();
    },
    async drop() {
      collection.dataObj[collection.name] = undefined;
      collection.save();
    }
  };
}