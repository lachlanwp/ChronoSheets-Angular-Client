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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { CSCSApiResponseBoolean } from '../ChronoSheetsClientLibModel/cSCSApiResponseBoolean';
import { CSCSApiResponseListUserForManagement } from '../ChronoSheetsClientLibModel/cSCSApiResponseListUserForManagement';
import { CSCSSetOrganisationGroupUsersRequest } from '../ChronoSheetsClientLibModel/cSCSSetOrganisationGroupUsersRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class OrganisationGroupUsersService {

    protected basePath = 'https://api.chronosheets.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Get a collection of organisation group users that belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; or &#39;ManageOrganisationUsers&#39; permissions.
     * 
     * @param orgGroupId An OrganisationGroup Id
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organisationGroupUsersGetOrganisationGroupUsers(orgGroupId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseListUserForManagement>;
    public organisationGroupUsersGetOrganisationGroupUsers(orgGroupId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseListUserForManagement>>;
    public organisationGroupUsersGetOrganisationGroupUsers(orgGroupId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseListUserForManagement>>;
    public organisationGroupUsersGetOrganisationGroupUsers(orgGroupId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgGroupId === null || orgGroupId === undefined) {
            throw new Error('Required parameter orgGroupId was null or undefined when calling organisationGroupUsersGetOrganisationGroupUsers.');
        }

        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling organisationGroupUsersGetOrganisationGroupUsers.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (orgGroupId !== undefined && orgGroupId !== null) {
            queryParameters = queryParameters.set('orgGroupId', <any>orgGroupId);
        }

        let headers = this.defaultHeaders;
        if (xChronosheetsAuth !== undefined && xChronosheetsAuth !== null) {
            headers = headers.set('x-chronosheets-auth', String(xChronosheetsAuth));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'multipart/form-data'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<CSApiResponseListUserForManagement>(`${this.basePath}/OrganisationGroupUsers/GetOrganisationGroupUsers`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Set the users who belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.
     * 
     * @param request A request object specifying which users belong to an organisation group.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update. CsvUserIds is a comma separated list of User Ids, e.g. 1,2,3,4
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organisationGroupUsersUpdateOrganisationGroupUsers(request: CSSetOrganisationGroupUsersRequest, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseBoolean>;
    public organisationGroupUsersUpdateOrganisationGroupUsers(request: CSSetOrganisationGroupUsersRequest, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseBoolean>>;
    public organisationGroupUsersUpdateOrganisationGroupUsers(request: CSSetOrganisationGroupUsersRequest, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseBoolean>>;
    public organisationGroupUsersUpdateOrganisationGroupUsers(request: CSSetOrganisationGroupUsersRequest, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling organisationGroupUsersUpdateOrganisationGroupUsers.');
        }

        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling organisationGroupUsersUpdateOrganisationGroupUsers.');
        }

        let headers = this.defaultHeaders;
        if (xChronosheetsAuth !== undefined && xChronosheetsAuth !== null) {
            headers = headers.set('x-chronosheets-auth', String(xChronosheetsAuth));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'multipart/form-data'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded',
            'multipart/form-data'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<CSApiResponseBoolean>(`${this.basePath}/OrganisationGroupUsers/UpdateOrganisationGroupUsers`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
