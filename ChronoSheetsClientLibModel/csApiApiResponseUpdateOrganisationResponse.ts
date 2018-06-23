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
import { CsApiUpdateOrganisationResponse } from './csApiCsApiUpdateOrganisationResponse';


export interface CsApiApiResponseUpdateOrganisationResponse {
    data?: CsApiUpdateOrganisationResponse;
    status?: CsApiApiResponseUpdateOrganisationResponse.CsApiStatusEnum;
    message?: string;
}
export namespace CsApiApiResponseUpdateOrganisationResponse {
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
