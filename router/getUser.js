const router = require('express').Router();

module.exports = db => {

    router.post('/', async (req, res) => {
        
        const email = req.session.email;
        if (!req.session.email) return;

        const user = await db.getUSER(email);
        res.json({ err: 0, user: user });
        
    });

};