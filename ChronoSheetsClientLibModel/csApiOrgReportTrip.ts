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
import { CsApiTripCoordinate } from './csApiCsApiTripCoordinate';


export interface CsApiOrgReportTrip {
    username?: string;
    emailAddress?: string;
    firstName?: string;
    lastName?: string;
    tripId?: number;
    timesheetId?: number;
    vehicleId?: number;
    userId?: number;
    orgId?: number;
    mobilePlatform?: CsApiOrgReportTrip.CsApiMobilePlatformEnum;
    startDate?: Date;
    endDate?: Date;
    vehicleName?: string;
    vehicleMake?: string;
    vehicleModel?: string;
    vehicleYear?: string;
    costPerKilometer?: number;
    tripTotalCost?: number;
    totalTripDistanceMeters?: number;
    startAddress?: string;
    endAddress?: string;
    pathCoordinates?: Array<CsApiTripCoordinate>;
    cacheExpiryDate?: Date;
}
export namespace CsApiOrgReportTrip {
    export type CsApiMobilePlatformEnum = 'Unknown' | 'iOS' | 'Android';
    export const CsApiMobilePlatformEnum = {
        Unknown: 'Unknown' as CsApiMobilePlatformEnum,
        IOS: 'iOS' as CsApiMobilePlatformEnum,
        Android: 'Android' as CsApiMobilePlatformEnum
    }
}
