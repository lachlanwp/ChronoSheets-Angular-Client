/**
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * Fields for inserting a new Project
 */
export interface CSInsertProjectRequest { 
    /**
     * The Id of the Client that is associated with the new project
     */
    clientId?: number;
    /**
     * The name of the new Project
     */
    projectName?: string;
    /**
     * The estimated cost of work to complete the project.  This value is used in the Organisation Reports view 'Project Costs'
     */
    costEstimation?: number;
    /**
     * The start date of the project.  When the project is due to start
     */
    startDate?: Date;
    /**
     * The end date of the project.  When the project is due to end
     */
    endDate?: Date;
}
