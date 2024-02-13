import ApiType from "./Utility/ApiType";


class RequestDTO {
    ApiType: ApiType;
    URL!: string;
    Data!: object;
    AccessToken!: string;

    constructor() {
        this.ApiType = ApiType.GET
    }
}