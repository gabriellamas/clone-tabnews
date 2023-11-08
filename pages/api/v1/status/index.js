import database from "../../../../infra/database"

async function Status(request, response) {
  const result = await database.query('SELECT 1+1 as sum;')
  console.log(result.rows)
  response.status(200).send({ message: "Alguma coisa" });
}

export default Status;
