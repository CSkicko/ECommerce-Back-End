const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'products'}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  };
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'products'}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  };
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body);
  
    // If product ids are passed as part of the request body then add the ids to the ProductTag model/table
    if (req.body.products.length) {
      const prodTagArray = req.body.products.map((product_id) => {
        return {
          product_id,
          tag_id: tag.id,
        };
      });

      const createdLinks = await ProductTag.bulkCreate(prodTagArray);
      res.status(200).json([tag, createdLinks]);
    } else {
      res.status(200).json(tag);
    }

  } catch (err) {
    res.status(400).json(err);
  };
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
