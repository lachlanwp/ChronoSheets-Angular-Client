/**
 * ChronoSheets API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface CsApiApiResponseListInt32 {
    data?: Array<number>;
    status?: CsApiApiResponseListInt32.CsApiStatusEnum;
    message?: string;
}
export namespace CsApiApiResponseListInt32 {
    export type CsApiStatusEnum = 'Succeeded' | 'FatalException' | 'GeneralError' | 'ValidationError' | 'UnAuthorized' | 'SessionExpired';
    export const CsApiStatusEnum = {
        Succeeded: 'Succeeded' as CsApiStatusEnum,
        FatalException: 'FatalException' as CsApiStatusEnum,
        GeneralError: 'GeneralError' as CsApiStatusEnum,
        ValidationError: 'ValidationError' as CsApiStatusEnum,
        UnAuthorized: 'UnAuthorized' as CsApiStatusEnum,
        SessionExpired: 'SessionExpired' as CsApiStatusEnum
    }
}
