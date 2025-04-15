"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const authUtils_1 = require("../utils/authUtils");
const authRepository_1 = require("../repositories/authRepository");
const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await (0, authUtils_1.hashPassword)(password);
        const user = await (0, authRepository_1.createUser)({ email, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully', user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.register = register;
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await (0, authRepository_1.findUserByEmail)(email);
        if (!user || !(await (0, authUtils_1.comparePassword)(password, user.password))) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        const token = (0, authUtils_1.generateToken)(user.id);
        res.status(200).json({ message: 'Login successful', token });
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
