/**
 * ChronoSheets API
 * <div style=\'font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;\'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target=\'_BLANK\' href=\'http://tsheets.xyz/signup\'>http://tsheets.xyz/signup</a>.  </p></div><div id=\'cs-extra-info\'></div>
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UsualHoursDay } from './usualHoursDay';


/**
 * A standard API response
 */
export interface ApiResponseListUsualHoursDay { 
    /**
     * The main Data of the response
     */
    Data?: Array<UsualHoursDay>;
    /**
     * The API response status. Indicates if the request was successful, failed or was unauthorised.
     */
    Status?: ApiResponseListUsualHoursDay.StatusEnum;
    /**
     * A message to accompany the response status.  If the Status is failed, this message will hint why it failed and what you need to do.
     */
    Message?: string;
}
export namespace ApiResponseListUsualHoursDay {
    export type StatusEnum = 'Succeeded' | 'FatalException' | 'GeneralError' | 'ValidationError' | 'UnAuthorized' | 'SessionExpired';
    export const StatusEnum = {
        Succeeded: 'Succeeded' as StatusEnum,
        FatalException: 'FatalException' as StatusEnum,
        GeneralError: 'GeneralError' as StatusEnum,
        ValidationError: 'ValidationError' as StatusEnum,
        UnAuthorized: 'UnAuthorized' as StatusEnum,
        SessionExpired: 'SessionExpired' as StatusEnum
    };
}


