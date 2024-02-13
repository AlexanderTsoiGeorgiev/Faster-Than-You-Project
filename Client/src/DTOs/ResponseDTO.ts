class ResponseDTO {
    Result?: object[]
    IsSuccess!: boolean
    Message: string

    constructor() {
        this.Message = "";
    }
}

export default ResponseDTO;