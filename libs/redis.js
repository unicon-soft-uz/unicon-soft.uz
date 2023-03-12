import { Client, Entity, Schema, Repository } from 'redis-om';

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Data extends Entity {}
let schema = new Schema(
  Data,
  {
    name: { type: 'string' },
    photo: { type: 'string' },
    rol: { type: 'string' },
    skils: { type: 'string' },
    birthday: { type: 'string' },
  },
  { dataStructure: 'JSON' }
);

export async function createData(new_data) {
  await connect();

  // const repository = new Repository(schema, client);
  const repository = client.fetchRepository(schema, client);
  const data = repository.createEntity(new_data);
  await repository.dropIndex();
  const id = await repository.save(data);
  return data;
}

export async function getData() {
  await connect();
  const repository = client.fetchRepository(schema);
  await repository.dropIndex();
  await repository.createIndex();
  return await repository.search().return.all();
}

export async function deleteData(req) {
  const repository = client.fetchRepository(schema);
  await connect();
  await repository.remove(req.params.id);
}
