
const app = require("./app");
app.get("/", (req, res) => {
    res.status(200).send({ message: "Welcome to restaurant finder API" })
   
  });
  
  
  app.all('*', (req, res) => {
    res.status(404).send({
        message: "Not Found"
        })
  });

  const PORT =  3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });