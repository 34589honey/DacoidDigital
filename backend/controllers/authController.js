import jwt from 'jsonwebtoken';
const USER = { email: 'intern@dacoid.com', password: 'Test123' };

export const login = (req, res) => {
  const { email, password } = req.body;
  if (email === USER.email && password === USER.password) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
