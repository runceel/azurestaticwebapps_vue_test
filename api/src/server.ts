import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const router = express.Router();
router.get('/getMessage', (req, res) => {
    res.json({ message: `Hello ${req.query.name} from express`});
});

app.use(router);

const PORT = process.env.FUNCTIONS_HTTPWORKER_PORT ?? 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
