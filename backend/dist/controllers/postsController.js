"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostHandler = exports.getPosts = void 0;
const postsRepository_1 = require("../repositories/postsRepository");
const getPosts = async (req, res) => {
    try {
        const posts = await (0, postsRepository_1.findAllPosts)();
        res.status(200).json(posts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};
exports.getPosts = getPosts;
const createPostHandler = async (req, res) => {
    try {
        const { title, content, authorId } = req.body;
        const post = await (0, postsRepository_1.createPost)({ title, content, authorId });
        res.status(201).json(post);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create post' });
    }
};
exports.createPostHandler = createPostHandler;
