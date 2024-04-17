const app = require('./app');
const PORT = process.env.PORT || 3800;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
