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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { CsApiCsApiApiResponseBoolean } from '../ChronoSheetsClientLibModel/csApiCsApiApiResponseBoolean';
import { CsApiCsApiApiResponseInt32 } from '../ChronoSheetsClientLibModel/csApiCsApiApiResponseInt32';
import { CsApiCsApiApiResponseListInt32 } from '../ChronoSheetsClientLibModel/csApiCsApiApiResponseListInt32';
import { CsApiCsApiApiResponseListTimesheet } from '../ChronoSheetsClientLibModel/csApiCsApiApiResponseListTimesheet';
import { CsApiCsApiBatchUpdateTimesheetRequest } from '../ChronoSheetsClientLibModel/csApiCsApiBatchUpdateTimesheetRequest';
import { CsApiCsApiTimesheet } from '../ChronoSheetsClientLibModel/csApiCsApiTimesheet';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TimesheetsService {

    protected basePath = 'https://www.chronosheets.com';
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
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Delete a timesheet
     * 
     * @param timesheetId The ID of the timesheet to delete
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timesheetsDeleteTimesheet(timesheetId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CsApiApiResponseBoolean>;
    public timesheetsDeleteTimesheet(timesheetId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CsApiApiResponseBoolean>>;
    public timesheetsDeleteTimesheet(timesheetId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CsApiApiResponseBoolean>>;
    public timesheetsDeleteTimesheet(timesheetId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (timesheetId === null || timesheetId === undefined) {
            throw new Error('Required parameter timesheetId was null or undefined when calling timesheetsDeleteTimesheet.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling timesheetsDeleteTimesheet.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (timesheetId !== undefined) {
            queryParameters = queryParameters.set('TimesheetId', <any>timesheetId);
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
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<CsApiApiResponseBoolean>(`${this.basePath}/api/Timesheets/DeleteTimesheet`,
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
     * Get timesheets between start and end dates
     * 
     * @param startDate The start date of the date range
     * @param endDate The end date of the date range
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timesheetsGetTimesheets(startDate: Date, endDate: Date, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CsApiApiResponseListTimesheet>;
    public timesheetsGetTimesheets(startDate: Date, endDate: Date, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CsApiApiResponseListTimesheet>>;
    public timesheetsGetTimesheets(startDate: Date, endDate: Date, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CsApiApiResponseListTimesheet>>;
    public timesheetsGetTimesheets(startDate: Date, endDate: Date, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling timesheetsGetTimesheets.');
        }
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling timesheetsGetTimesheets.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling timesheetsGetTimesheets.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (startDate !== undefined) {
            queryParameters = queryParameters.set('StartDate', <any>startDate.toISOString());
        }
        if (endDate !== undefined) {
            queryParameters = queryParameters.set('EndDate', <any>endDate.toISOString());
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
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<CsApiApiResponseListTimesheet>(`${this.basePath}/api/Timesheets/GetTimesheets`,
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
     * Inserts a single timesheet record
     * 
     * @param request The timesheet request object
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timesheetsInsertSingleTimesheet(request: CsApiTimesheet, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CsApiApiResponseInt32>;
    public timesheetsInsertSingleTimesheet(request: CsApiTimesheet, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CsApiApiResponseInt32>>;
    public timesheetsInsertSingleTimesheet(request: CsApiTimesheet, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CsApiApiResponseInt32>>;
    public timesheetsInsertSingleTimesheet(request: CsApiTimesheet, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling timesheetsInsertSingleTimesheet.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling timesheetsInsertSingleTimesheet.');
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
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded',
            'multipart/form-data'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<CsApiApiResponseInt32>(`${this.basePath}/api/Timesheets/InsertSingleTimesheet`,
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
     * Batch update timesheets
     * 
     * @param request The batch update timesheets request
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timesheetsUpdateTimesheets(request: CsApiBatchUpdateTimesheetRequest, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CsApiApiResponseListInt32>;
    public timesheetsUpdateTimesheets(request: CsApiBatchUpdateTimesheetRequest, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CsApiApiResponseListInt32>>;
    public timesheetsUpdateTimesheets(request: CsApiBatchUpdateTimesheetRequest, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CsApiApiResponseListInt32>>;
    public timesheetsUpdateTimesheets(request: CsApiBatchUpdateTimesheetRequest, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling timesheetsUpdateTimesheets.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling timesheetsUpdateTimesheets.');
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
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded',
            'multipart/form-data'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<CsApiApiResponseListInt32>(`${this.basePath}/api/Timesheets/UpdateTimesheets`,
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
