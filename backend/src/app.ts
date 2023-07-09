import express, {Express} from 'express';
import { PORT } from "./config/config";
import router from "./routes";
import cors from "cors";

const app: Express = express();

app.use(cors())
app.use(express.json());
app.use(router)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

