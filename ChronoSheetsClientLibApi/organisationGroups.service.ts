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
import { CSCSApiResponseInt32 } from '../ChronoSheetsClientLibModel/cSCSApiResponseInt32';
import { CSCSApiResponseListOrganisationGroup } from '../ChronoSheetsClientLibModel/cSCSApiResponseListOrganisationGroup';
import { CSCSApiResponseOrganisationGroup } from '../ChronoSheetsClientLibModel/cSCSApiResponseOrganisationGroup';
import { CSCSInsertOrganisationGroupRequest } from '../ChronoSheetsClientLibModel/cSCSInsertOrganisationGroupRequest';
import { CSCSSaveOrganisationGroupRequest } from '../ChronoSheetsClientLibModel/cSCSSaveOrganisationGroupRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class OrganisationGroupsService {

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
     * Create an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.
     * 
     * @param request An Insert OrganisationGroup Request object containing values for the new OrganisationGroup to create
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organisationGroupsCreateOrganisationGroup(request: CSInsertOrganisationGroupRequest, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseInt32>;
    public organisationGroupsCreateOrganisationGroup(request: CSInsertOrganisationGroupRequest, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseInt32>>;
    public organisationGroupsCreateOrganisationGroup(request: CSInsertOrganisationGroupRequest, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseInt32>>;
    public organisationGroupsCreateOrganisationGroup(request: CSInsertOrganisationGroupRequest, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling organisationGroupsCreateOrganisationGroup.');
        }

        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling organisationGroupsCreateOrganisationGroup.');
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

        return this.httpClient.post<CSApiResponseInt32>(`${this.basePath}/OrganisationGroups/CreateOrganisationGroup`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param organisationGroupId 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organisationGroupsDeleteOrganisationGroup(organisationGroupId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseBoolean>;
    public organisationGroupsDeleteOrganisationGroup(organisationGroupId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseBoolean>>;
    public organisationGroupsDeleteOrganisationGroup(organisationGroupId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseBoolean>>;
    public organisationGroupsDeleteOrganisationGroup(organisationGroupId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (organisationGroupId === null || organisationGroupId === undefined) {
            throw new Error('Required parameter organisationGroupId was null or undefined when calling organisationGroupsDeleteOrganisationGroup.');
        }

        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling organisationGroupsDeleteOrganisationGroup.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (organisationGroupId !== undefined && organisationGroupId !== null) {
            queryParameters = queryParameters.set('OrganisationGroupId', <any>organisationGroupId);
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

        return this.httpClient.delete<CSApiResponseBoolean>(`${this.basePath}/OrganisationGroups/DeleteOrganisationGroup`,
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
     * Get a particular organisation group.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
     * 
     * @param organisationGroupId The ID of the OrganisationGroup you want to get
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organisationGroupsGetOrganisationGroup(organisationGroupId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseOrganisationGroup>;
    public organisationGroupsGetOrganisationGroup(organisationGroupId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseOrganisationGroup>>;
    public organisationGroupsGetOrganisationGroup(organisationGroupId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseOrganisationGroup>>;
    public organisationGroupsGetOrganisationGroup(organisationGroupId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (organisationGroupId === null || organisationGroupId === undefined) {
            throw new Error('Required parameter organisationGroupId was null or undefined when calling organisationGroupsGetOrganisationGroup.');
        }

        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling organisationGroupsGetOrganisationGroup.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (organisationGroupId !== undefined && organisationGroupId !== null) {
            queryParameters = queryParameters.set('OrganisationGroupId', <any>organisationGroupId);
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

        return this.httpClient.get<CSApiResponseOrganisationGroup>(`${this.basePath}/OrganisationGroups/GetOrganisationGroup`,
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
     * Get a collection of organisation groups that are under your organisation.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
     * 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organisationGroupsGetOrganisationGroups(xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseListOrganisationGroup>;
    public organisationGroupsGetOrganisationGroups(xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseListOrganisationGroup>>;
    public organisationGroupsGetOrganisationGroups(xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseListOrganisationGroup>>;
    public organisationGroupsGetOrganisationGroups(xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling organisationGroupsGetOrganisationGroups.');
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

        return this.httpClient.get<CSApiResponseListOrganisationGroup>(`${this.basePath}/OrganisationGroups/GetOrganisationGroups`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get org groups for a particular job.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
     * 
     * @param jobId The ID of the job
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organisationGroupsGetOrganisationGroupsForJob(jobId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseListOrganisationGroup>;
    public organisationGroupsGetOrganisationGroupsForJob(jobId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseListOrganisationGroup>>;
    public organisationGroupsGetOrganisationGroupsForJob(jobId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseListOrganisationGroup>>;
    public organisationGroupsGetOrganisationGroupsForJob(jobId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (jobId === null || jobId === undefined) {
            throw new Error('Required parameter jobId was null or undefined when calling organisationGroupsGetOrganisationGroupsForJob.');
        }

        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling organisationGroupsGetOrganisationGroupsForJob.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (jobId !== undefined && jobId !== null) {
            queryParameters = queryParameters.set('JobId', <any>jobId);
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

        return this.httpClient.get<CSApiResponseListOrganisationGroup>(`${this.basePath}/OrganisationGroups/GetOrganisationGroupsForJob`,
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
     * Get org groups for a particular vehicle.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageFleet&#39; or &#39;ManageOrganisationUsers&#39; permissions.
     * 
     * @param vehicleId The ID of the vehicle
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organisationGroupsGetOrganisationGroupsForVehicle(vehicleId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseListOrganisationGroup>;
    public organisationGroupsGetOrganisationGroupsForVehicle(vehicleId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseListOrganisationGroup>>;
    public organisationGroupsGetOrganisationGroupsForVehicle(vehicleId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseListOrganisationGroup>>;
    public organisationGroupsGetOrganisationGroupsForVehicle(vehicleId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (vehicleId === null || vehicleId === undefined) {
            throw new Error('Required parameter vehicleId was null or undefined when calling organisationGroupsGetOrganisationGroupsForVehicle.');
        }

        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling organisationGroupsGetOrganisationGroupsForVehicle.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (vehicleId !== undefined && vehicleId !== null) {
            queryParameters = queryParameters.set('VehicleId', <any>vehicleId);
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

        return this.httpClient.get<CSApiResponseListOrganisationGroup>(`${this.basePath}/OrganisationGroups/GetOrganisationGroupsForVehicle`,
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
     * Update an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.
     * 
     * @param request A Save OrganisationGroup Request object containing updated fields.  Make sure to specify the OrganisationGroup Id in the request object so that ChronoSheets knows which OrganisationGroup to update
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public organisationGroupsUpdateOrganisationGroup(request: CSSaveOrganisationGroupRequest, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseBoolean>;
    public organisationGroupsUpdateOrganisationGroup(request: CSSaveOrganisationGroupRequest, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseBoolean>>;
    public organisationGroupsUpdateOrganisationGroup(request: CSSaveOrganisationGroupRequest, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseBoolean>>;
    public organisationGroupsUpdateOrganisationGroup(request: CSSaveOrganisationGroupRequest, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling organisationGroupsUpdateOrganisationGroup.');
        }

        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling organisationGroupsUpdateOrganisationGroup.');
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

        return this.httpClient.put<CSApiResponseBoolean>(`${this.basePath}/OrganisationGroups/UpdateOrganisationGroup`,
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
