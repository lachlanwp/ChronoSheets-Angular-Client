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


export interface CsApiRawReportItem {
    organisationId?: number;
    userId?: number;
    username?: string;
    emailAddress?: string;
    jobCode?: string;
    taskName?: string;
    clientName?: string;
    projectName?: string;
    startDate?: Date;
    endDate?: Date;
    spanSeconds?: number;
    description?: string;
    payAmount?: number;
    payOvertimeAmount?: number;
    tripCost?: number;
    tripDistanceMeters?: number;
}