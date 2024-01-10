import axios from "axios";

const Get = (url: string) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    axios.get(url).then((res) => {
      method(res, {
        status: 200,
        success: true,
      }).catch((e: any) => {
        method(e, {
          status: 500,
          success: false,
        });
      });
    });
  };
};
class Controller {
  constructor() {
    // ...
  }
  @Get("https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10")
  getList(res: any, status: any) {
    console.log(res.data.result.list, status);
  }
}
