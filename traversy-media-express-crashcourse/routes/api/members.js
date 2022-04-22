const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

const idFilter = req => member => member.id === parseInt(req.params.id);

//Api service

// app.get('/api/members', (req, res) => {
//     res.json(members);
// });

router.get('/', (req, res) => {
    res.json(members);
});

//Api service for single members
router.get('/:id', (req, res) => {
    const found = members.some(idFilter(req));

    if (found) {
        res.json(members.filter(idFilter(req)));
    } 
    else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});

//API for creation of a new member
router.post('/', (req, res) => {
    const newMember = {
        ...req.body,
        id: uuid.v4(),
        status: 'active'
    };
    
    if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
    }

    members.push(newMember);
    res.json(members);
});

//API for updating an existing member
router.put('/:id', (req, res) => {
    const found = members.some(idFilter(req));
    if (found) {
        members.forEach((member, i) => {
            if (idFilter(req)(member)) {
        
                const updMember = {...member, ...req.body};
                members[i] = updMember
                res.json({ msg: 'Member updated', updMember });
            }
        });
    } 
    else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});

//API for deleting an existing member
router.delete('/:id', (req, res) => {
    const found = members.some(idFilter(req));
    if (found){
        res.json({
            msg: 'Member deleted ok',
            members: members.filter(member => !idFilter(req)(member))
        });
    }
    else{
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});
module.exports = router;