import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMW.js'

dotenv.config()
const app = express();
connectDB();

app.get('/', (req, res) => {
    res.send('API IS RUNNING');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));