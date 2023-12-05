import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "yi";
    user.lastName = "can";
    user.age = 25;
    await AppDataSource.manager.save(User, [
      { firstName: "ccc", lastName: "ccc", age: 21 },
      { firstName: "ddd", lastName: "ddd", age: 22 },
      { firstName: "eee", lastName: "eee", age: 23 },
    ]);
  })
  .catch((error) => console.log(error));
