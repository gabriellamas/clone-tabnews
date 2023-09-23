function Status(request, response) {
  response.status(200).send({ message: "Alguma coisa" });
}

export default Status;
