/**
 * ChronoSheets API
 * ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.
 *
 * OpenAPI spec version: v1
 * Contact: lachlan@chronosheets.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CsApiUpdateUserResponse } from './csApiCsApiUpdateUserResponse';


export interface CsApiApiResponseUpdateUserResponse {
    data?: CsApiUpdateUserResponse;
    /**
     * 0 = Succeeded, 1 = FatalException, 2 = GeneralError, 3 = ValidationError, 4 = UnAuthorized, 5 = SessionExpired
     */
    status?: CsApiApiResponseUpdateUserResponse.CsApiStatusEnum;
    message?: string;
}
export namespace CsApiApiResponseUpdateUserResponse {
    export type CsApiStatusEnum = 0 | 1 | 2 | 3 | 4 | 5;
    export const CsApiStatusEnum = {
        NUMBER_0: 0 as CsApiStatusEnum,
        NUMBER_1: 1 as CsApiStatusEnum,
        NUMBER_2: 2 as CsApiStatusEnum,
        NUMBER_3: 3 as CsApiStatusEnum,
        NUMBER_4: 4 as CsApiStatusEnum,
        NUMBER_5: 5 as CsApiStatusEnum
    }
}
