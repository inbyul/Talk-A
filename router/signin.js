const router = require('express').Router();

module.exports = db => {

    router.post('/', async (req, res) => {

        const { email, password } = req.body;
        if (req.session.email !== undefined) return;

        const user = await db.getUSER(email);
        
        if (user.password === password) {

            user.session.email = email;

            let message = 'login success';
            res.json({ err: 0, message });

        }

        else {
            let message = 'login failed';
            res.json({ err: 1, message });
        }

    });

    return router;

};