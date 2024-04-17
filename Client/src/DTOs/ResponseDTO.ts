class ResponseDTO<T> {
    result?: T
    isSuccess!: boolean
    message: string

    constructor() {
        this.message = "";
    }
}

export default ResponseDTO;