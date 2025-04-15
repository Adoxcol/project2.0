"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryHandler = void 0;
const categoryRepository_1 = require("../repositories/categoryRepository");
const createCategoryHandler = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await (0, categoryRepository_1.createCategory)({ name });
        res.status(201).json(category);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create category' });
    }
};
exports.createCategoryHandler = createCategoryHandler;
