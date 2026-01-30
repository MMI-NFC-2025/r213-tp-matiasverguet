/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3458190115")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3730883410",
    "max": 0,
    "min": 0,
    "name": "nomMaison",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3277785110",
    "max": 0,
    "min": 0,
    "name": "adresse",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number4159695454",
    "max": null,
    "min": null,
    "name": "prix",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number3158417006",
    "max": null,
    "min": null,
    "name": "surface",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number4104937930",
    "max": null,
    "min": null,
    "name": "nbChambres",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number3185065863",
    "max": null,
    "min": null,
    "name": "nbSdb",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "bool4018512588",
    "name": "favori",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3458190115")

  // remove field
  collection.fields.removeById("text3730883410")

  // remove field
  collection.fields.removeById("text3277785110")

  // remove field
  collection.fields.removeById("number4159695454")

  // remove field
  collection.fields.removeById("number3158417006")

  // remove field
  collection.fields.removeById("number4104937930")

  // remove field
  collection.fields.removeById("number3185065863")

  // remove field
  collection.fields.removeById("bool4018512588")

  return app.save(collection)
})
