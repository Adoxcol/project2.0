"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = void 0;
const profileRepository_1 = require("../repositories/profileRepository");
const getProfile = async (req, res) => {
    try {
        if (!req.user) {
            res.status(401).json({ error: 'Unauthorized - User not found in request' });
            return;
        }
        const userId = req.user.id;
        const profile = await (0, profileRepository_1.findProfileByUserId)(userId);
        res.status(200).json(profile);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
};
exports.getProfile = getProfile;
