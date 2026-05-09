const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const DB_FILE = 'users.json';
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

function safeUser(user) {
    const { password, ...rest } = user;
    return rest;
}

app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (password.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    const users = JSON.parse(fs.readFileSync(DB_FILE));

    if (users.find(u => u.email === email)) {
        return res.status(400).json({ error: 'Email already registered' });
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        phone: '',
        dob: '',
        country: '',
        devices: [{
            name: 'Registration',
            time: new Date().toISOString()
        }],
        orders: []
    };

    users.push(newUser);
    fs.writeFileSync(DB_FILE, JSON.stringify(users));
    res.json(safeUser(newUser));
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const users = JSON.parse(fs.readFileSync(DB_FILE));
    const idx = users.findIndex(u => u.email === email && u.password === password);

    if (idx === -1) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    if (!users[idx].devices) users[idx].devices = [];
    const ua = req.headers['user-agent'] || 'Unknown';
    const deviceName = ua.includes('Chrome') ? 'Chrome Browser'
        : ua.includes('Firefox') ? 'Firefox Browser'
        : ua.includes('Safari') ? 'Safari Browser'
        : ua.includes('Edge') ? 'Edge Browser'
        : 'Unknown Browser';

    users[idx].devices.push({
        name: deviceName,
        time: new Date().toISOString()
    });

    fs.writeFileSync(DB_FILE, JSON.stringify(users));
    res.json(safeUser(users[idx]));
});

app.post('/api/change-password', (req, res) => {
    const { email, currentPassword, newPassword } = req.body;

    if (!newPassword || newPassword.length < 8) {
        return res.status(400).json({ error: 'New password must be at least 8 characters' });
    }

    const users = JSON.parse(fs.readFileSync(DB_FILE));
    const idx = users.findIndex(u => u.email === email && u.password === currentPassword);

    if (idx === -1) {
        return res.status(401).json({ error: 'Current password is incorrect' });
    }

    users[idx].password = newPassword;
    fs.writeFileSync(DB_FILE, JSON.stringify(users));
    res.json({ success: true });
});

app.put('/api/update-profile', (req, res) => {
    const { id, name, dob, country, phone } = req.body;
    const users = JSON.parse(fs.readFileSync(DB_FILE));
    const idx = users.findIndex(u => u.id === id);

    if (idx === -1) return res.status(404).json({ error: 'User not found' });

    if (name !== undefined) users[idx].name = name;
    if (dob !== undefined) users[idx].dob = dob;
    if (country !== undefined) users[idx].country = country;
    if (phone !== undefined) users[idx].phone = phone;

    fs.writeFileSync(DB_FILE, JSON.stringify(users));
    res.json(safeUser(users[idx]));
});

app.post('/api/add-order', (req, res) => {
    const { userId, order } = req.body;
    const users = JSON.parse(fs.readFileSync(DB_FILE));
    const idx = users.findIndex(u => u.id === userId);

    if (idx === -1) return res.status(404).json({ error: 'User not found' });

    if (!users[idx].orders) users[idx].orders = [];
    users[idx].orders.push(order);
    fs.writeFileSync(DB_FILE, JSON.stringify(users));
    res.json(safeUser(users[idx]));
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});