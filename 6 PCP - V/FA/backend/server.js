import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const port = 5000;
const baseurl = "https://t4e-testserver.onrender.com/api";
let dataset = [];

const loadData = async () => {
    const response = await axios.post(`${baseurl}/public/token`, {
        studentId: "E0323033",
        password: "499528",
        set: "setA",
    });

    const { token, dataUrl } = response.data;
    const dataResponse = await axios.get(`${baseurl}${dataUrl}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    // fix the dataset fetching logic (assignment to constant variable)
    dataset = dataResponse.data
    console.log("Data loaded successfully");
};

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    loadData();
}); 

app.get('/', (req, res) => {
    res.json({message: 'api running'});
});

app.get('/dataset', (req, res) => {
    if (dataset.length === 0) {
        return res.status(503).json({ message: "Data not loaded yet" });
    }
    res.json(dataset);
});