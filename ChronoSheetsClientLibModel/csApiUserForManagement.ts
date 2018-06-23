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
import { CsApiOrganisation } from './csApiCsApiOrganisation';


export interface CsApiUserForManagement {
    emailAddress?: string;
    isSubscribedToNewsletter?: boolean;
    isAccountActive?: boolean;
    id?: number;
    organisationId?: number;
    userName?: string;
    firstName?: string;
    lastName?: string;
    roles?: number;
    alertSettings?: number;
    setupWizardRequired?: boolean;
    organisation?: CsApiOrganisation;
}