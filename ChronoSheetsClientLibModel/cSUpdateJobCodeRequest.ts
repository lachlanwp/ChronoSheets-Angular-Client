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
 * Fields used to update an existing JobCode
 */
export interface CSUpdateJobCodeRequest { 
    /**
     * The Id of the JobCode to be updated
     */
    id?: number;
    /**
     * The new JobCode to be set
     */
    code?: string;
    /**
     * The Id of the Project to be associated to
     */
    projectId?: number;
    /**
     * The Id of the Client to be associated to
     */
    clientId?: number;
    /**
     * A collection of Task Ids to be available when choosing this JobCode
     */
    linkedTaskIds?: Array<number>;
    /**
     * Restrict the access to this JobCode by specifying which Organisation Groups can have access.  Only employees in these Organisation Groups will be able to access this JobCode
     */
    linkedOrgGroupIds?: Array<number>;
    /**
     * Whether or not this JobCode is to be marked as deleted
     */
    isDeleted?: boolean;
}
