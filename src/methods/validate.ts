export const validate = async (data: {
    validatorIdentity: string,
    userIdentity: string,
    loginToken: string,
    secret: string,
    algorithm: string
}) => {
    return data.secret === (data.loginToken + "_sign");
}
