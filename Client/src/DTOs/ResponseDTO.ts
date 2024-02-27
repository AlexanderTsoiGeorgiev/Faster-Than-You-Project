class ResponseDTO {
    result?: object[]
    isSuccess!: boolean
    message: string

    constructor() {
        this.message = "";
    }
}

export default ResponseDTO;