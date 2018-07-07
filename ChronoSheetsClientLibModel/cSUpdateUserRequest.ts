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
 * Fields for updating an employee User Account
 */
export interface CSUpdateUserRequest {
    /**
     * The Id of the User that is to be updated
     */
    userId?: number;
    /**
     * The Email Address of the employee
     */
    emailAddress?: string;
    /**
     * The First Name of the employee
     */
    firstName?: string;
    /**
     * The Last Name of the employee
     */
    lastName?: string;
    /**
     * Whether or not the employee is subscribed to ChronoSheets newsletters
     */
    isSubscribedToNewsletter?: boolean;
    /**
     * Whether or not the employee account is active
     */
    isAccountActive?: boolean;
    /**
     * A BIT field designating which Roles/Permissions the employee will have when they sign in.  See the {timesheets.types.Enums.UserRoles} Enum for more details
     */
    roles?: number;
    /**
     * A BIT field designating which Alerts the employee will receive.  See the {timesheets.types.Enums.AlertSettings} Enum for more details
     */
    alertSettings?: number;
}
