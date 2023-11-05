function status(request, response) {
  response.status(200).json({ status: "Rota de status funciona." });
}

export default status;
