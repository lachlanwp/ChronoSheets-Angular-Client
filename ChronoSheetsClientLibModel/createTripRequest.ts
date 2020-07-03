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


/**
 * Contains fields for creating a Trip
 */
export interface CreateTripRequest { 
    /**
     * The associated Timesheet record Id.  The Trip will be linked to the Timesheet with this TimesheetId
     */
    TimesheetId?: number;
    /**
     * The associated Vehicle Id.  The Trip will show that this Vehicle was used
     */
    VehicleId?: number;
    /**
     * A CSV of GPS path co-ordinates.  Format example: -37.8433562,144.7226188;[Lat1],[Long1];........[LatN],[LongN]
     */
    PathCoordsStringCsv?: string;
    /**
     * The total distance of the Trip
     */
    DistanceMeters?: number;
    /**
     * The Mobile platform that the Trip was recorded on
     */
    MobilePlatform?: CreateTripRequest.MobilePlatformEnum;
}
export namespace CreateTripRequest {
    export type MobilePlatformEnum = 'Unknown' | 'iOS' | 'Android';
    export const MobilePlatformEnum = {
        Unknown: 'Unknown' as MobilePlatformEnum,
        IOS: 'iOS' as MobilePlatformEnum,
        Android: 'Android' as MobilePlatformEnum
    };
}

