import { app } from './server';

const port = process.env.port || 80;

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
