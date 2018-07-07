/**
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * Fields for inserting a new set of Pay Rates for a user.  Archiving of the previous Pay Rate is done for you automatically
 */
export interface CSInsertUserHourlyRateRequest {
    /**
     * The Id of the User that is getting the new set of Pay Rates
     */
    userId?: number;
    /**
     * The Hourly Rate the employee should receive during their usual rostered hours
     */
    hourlyRate?: number;
    /**
     * The Hourly Rate the employee should receive during outside of their usual rostered hours
     */
    hourlyOvertimeRate?: number;
    /**
     * The current date time
     */
    currentDate?: Date;
}
