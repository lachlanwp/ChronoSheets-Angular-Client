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
 * Fields for inserting a new Client
 */
export interface CSInsertClientRequest {
    /**
     * The name of the Client
     */
    clientName?: string;
    /**
     * Address line 1 of the Client
     */
    clientAddressLine1?: string;
    /**
     * Address line 2 of the Client
     */
    clientAddressLine2?: string;
    /**
     * The suburb of the Client's address
     */
    clientSuburb?: string;
    /**
     * The state of the Client's address
     */
    clientState?: string;
    /**
     * The post code of the Client's address
     */
    clientPostCode?: string;
    /**
     * The name of the contact working with the Client
     */
    personOfContact?: string;
    /**
     * The phone number of the Client
     */
    clientPhoneNumber?: string;
    /**
     * The mobile phone number of the Client
     */
    clientMobileNumber?: string;
    /**
     * The email address of the Client
     */
    clientEmailAddress?: string;
    /**
     * The Client's website URL
     */
    clientWebURL?: string;
}
