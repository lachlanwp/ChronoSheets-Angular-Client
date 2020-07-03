/**
 * ChronoSheets API
 * <div style=\'font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;\'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target=\'_BLANK\' href=\'http://tsheets.xyz/signup\'>http://tsheets.xyz/signup</a>.  </p></div><div id=\'cs-extra-info\'></div>
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { ApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence } from '../model/models';
import { ApiResponseInt32 } from '../model/models';
import { CreateAutomationStepRequest } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class TimesheetAutomationService {

    protected basePath = 'https://api.chronosheets.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Creates an automation step.  Timesheet automation is determined by looking at steps taken by the user.  Create a step to log some automation action, such as entering a geofence or tapping on an NFC badge.  Requires the \&#39;SubmitTimesheets\&#39; permission.
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timesheetAutomationCreateAutomationStep(xChronosheetsAuth: string, request: CreateAutomationStepRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseInt32>;
    public timesheetAutomationCreateAutomationStep(xChronosheetsAuth: string, request: CreateAutomationStepRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseInt32>>;
    public timesheetAutomationCreateAutomationStep(xChronosheetsAuth: string, request: CreateAutomationStepRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseInt32>>;
    public timesheetAutomationCreateAutomationStep(xChronosheetsAuth: string, request: CreateAutomationStepRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling timesheetAutomationCreateAutomationStep.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling timesheetAutomationCreateAutomationStep.');
        }

        let headers = this.defaultHeaders;
        if (xChronosheetsAuth !== undefined && xChronosheetsAuth !== null) {
            headers = headers.set('x-chronosheets-auth', String(xChronosheetsAuth));
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'text/json',
                'application/xml',
                'text/xml',
                'multipart/form-data'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
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
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<ApiResponseInt32>(`${this.configuration.basePath}/TimesheetAutomation/CreateAutomationStep`,
            request,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve the timesheet automation / alerts for geofences activities or NFC tap on/off.  Requires the \&#39;ManageGeofencing\&#39; permission.
     * @param geofenceId The ID of the Geofence
     * @param userId 
     * @param sort 
     * @param order 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param skip Skip this many records
     * @param take Take this many records
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timesheetAutomationGetTimesheetAutomationAuditTrail(geofenceId: number, userId: number, sort: 'UserName' | 'AutomationActionType' | 'ClientDateTime' | 'IsProcessed', order: 'Ascending' | 'Descending', xChronosheetsAuth: string, skip?: number, take?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence>;
    public timesheetAutomationGetTimesheetAutomationAuditTrail(geofenceId: number, userId: number, sort: 'UserName' | 'AutomationActionType' | 'ClientDateTime' | 'IsProcessed', order: 'Ascending' | 'Descending', xChronosheetsAuth: string, skip?: number, take?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence>>;
    public timesheetAutomationGetTimesheetAutomationAuditTrail(geofenceId: number, userId: number, sort: 'UserName' | 'AutomationActionType' | 'ClientDateTime' | 'IsProcessed', order: 'Ascending' | 'Descending', xChronosheetsAuth: string, skip?: number, take?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence>>;
    public timesheetAutomationGetTimesheetAutomationAuditTrail(geofenceId: number, userId: number, sort: 'UserName' | 'AutomationActionType' | 'ClientDateTime' | 'IsProcessed', order: 'Ascending' | 'Descending', xChronosheetsAuth: string, skip?: number, take?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (geofenceId === null || geofenceId === undefined) {
            throw new Error('Required parameter geofenceId was null or undefined when calling timesheetAutomationGetTimesheetAutomationAuditTrail.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling timesheetAutomationGetTimesheetAutomationAuditTrail.');
        }
        if (sort === null || sort === undefined) {
            throw new Error('Required parameter sort was null or undefined when calling timesheetAutomationGetTimesheetAutomationAuditTrail.');
        }
        if (order === null || order === undefined) {
            throw new Error('Required parameter order was null or undefined when calling timesheetAutomationGetTimesheetAutomationAuditTrail.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling timesheetAutomationGetTimesheetAutomationAuditTrail.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (geofenceId !== undefined && geofenceId !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>geofenceId, 'GeofenceId');
        }
        if (userId !== undefined && userId !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>userId, 'UserId');
        }
        if (sort !== undefined && sort !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>sort, 'Sort');
        }
        if (order !== undefined && order !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>order, 'Order');
        }
        if (skip !== undefined && skip !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>skip, 'Skip');
        }
        if (take !== undefined && take !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>take, 'Take');
        }

        let headers = this.defaultHeaders;
        if (xChronosheetsAuth !== undefined && xChronosheetsAuth !== null) {
            headers = headers.set('x-chronosheets-auth', String(xChronosheetsAuth));
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'text/json',
                'application/xml',
                'text/xml',
                'multipart/form-data'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<ApiResponseForPaginatedListTimesheetAutomationWithOrgAndGeofence>(`${this.configuration.basePath}/TimesheetAutomation/GetTimesheetAutomationAuditTrail`,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
