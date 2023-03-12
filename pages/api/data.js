import { createData, getData, deleteData } from '../../libs/redis';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = await createData(req.body);
    res.status(200).json({ data });
  } else if (req.method === 'GET') {
    const getD = await getData(req);
    res.status(200).json({ getD });
  } else if (req.method === 'DELETE') {
    const getD = await deleteData(req);
    res.status(200).json(null);
  }
}
