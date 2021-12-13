const router = require('express').Router();

module.exports = db => {

    router.post('/', async (req, res) => {

        const { name, email, password } = req.body;
        if (req.session.email !== undefined) return;
        
        const user = await db.getUSER(email);
        
        if (user) {
            let message = "account already exists!";
            res.json({ err: 1, message: message });
        }

        else {

            db.addUSER(name, email, password)
                .then(()  => res.json({ err: 0 }))
                .catch(() => res.json({ err: 1 }));
            
            req.session.email = email;
            
        }

    });

    return router;

};