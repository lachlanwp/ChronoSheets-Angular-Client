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
import { CsApiProjectCostingReportItem } from './csApiCsApiProjectCostingReportItem';


export interface CsApiApiResponseListProjectCostingReportItem {
    data?: Array<CsApiProjectCostingReportItem>;
    /**
     * 0 = Succeeded, 1 = FatalException, 2 = GeneralError, 3 = ValidationError, 4 = UnAuthorized, 5 = SessionExpired
     */
    status?: CsApiApiResponseListProjectCostingReportItem.CsApiStatusEnum;
    message?: string;
}
export namespace CsApiApiResponseListProjectCostingReportItem {
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
