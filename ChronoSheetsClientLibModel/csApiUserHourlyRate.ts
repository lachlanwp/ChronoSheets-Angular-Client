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


export interface CsApiUserHourlyRate {
    rateId?: number;
    userId?: number;
    organisationId?: number;
    isCurrent?: boolean;
    hourlyRate?: number;
    hourlyOvertimeRate?: number;
    startDateTime?: Date;
    endDateTime?: Date;
}