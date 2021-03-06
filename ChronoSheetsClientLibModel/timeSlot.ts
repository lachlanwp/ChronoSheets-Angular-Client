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


export interface TimeSlot { 
    DayType?: TimeSlot.DayTypeEnum;
    UsualHourId?: number;
    StartHour?: number;
    StartMinute?: number;
    EndHour?: number;
    EndMinute?: number;
    IsValid?: boolean;
}
export namespace TimeSlot {
    export type DayTypeEnum = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
    export const DayTypeEnum = {
        Monday: 'Monday' as DayTypeEnum,
        Tuesday: 'Tuesday' as DayTypeEnum,
        Wednesday: 'Wednesday' as DayTypeEnum,
        Thursday: 'Thursday' as DayTypeEnum,
        Friday: 'Friday' as DayTypeEnum,
        Saturday: 'Saturday' as DayTypeEnum,
        Sunday: 'Sunday' as DayTypeEnum
    };
}


