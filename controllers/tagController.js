const tagService = require('../services/tagService');
const validation = require('../utilities/validation');

exports.createTag = async (req, res, next) => {
  try {
    const { error } = validation.tagSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });
    const tag = await tagService.createTag(req.body.name);
    res.status(201).json(tag);
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT') {
      return res.status(409).json({ error: 'Tag already exists' });
    }
    next(err);
  }
};

exports.getTags = async (req, res, next) => {
  try {
    const tags = await tagService.getAllTags();
    res.json(tags);
  } catch (err) {
    next(err);
  }
};

exports.getTag = async (req, res, next) => {
  try {
    const tag = await tagService.getTagById(req.params.id);
    if (!tag) return res.status(404).json({ error: 'Tag not found' });
    res.json(tag);
  } catch (err) {
    next(err);
  }
};

exports.updateTag = async (req, res, next) => {
  try {
    const { error } = validation.tagSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });
    const updated = await tagService.updateTag(req.params.id, req.body.name);
    if (!updated) return res.status(404).json({ error: 'Tag not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteTag = async (req, res, next) => {
  try {
    const deleted = await tagService.deleteTag(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Tag not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
