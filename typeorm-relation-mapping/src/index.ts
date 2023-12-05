import { AppDataSource } from "./data-source"
import { IdCard } from "./entity/IdCard";
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    const user = new User();
    user.firstName = 'guang';
    user.lastName = 'guang';
    user.age = 20;
    
    const idCard = new IdCard();
    idCard.cardName = '1111111';
    idCard.user = user;
    
    await AppDataSource.manager.save(user);
    await AppDataSource.manager.save(idCard);

}).catch(error => console.log(error))
