/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "an79yrkfmwf7pqo",
    "created": "2026-06-12 08:28:47.133Z",
    "updated": "2026-06-12 08:28:47.133Z",
    "name": "apk",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tgpcitif",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("an79yrkfmwf7pqo");

  return dao.deleteCollection(collection);
})
