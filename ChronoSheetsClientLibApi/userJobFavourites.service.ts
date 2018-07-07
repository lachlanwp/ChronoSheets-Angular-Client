/**
 * The ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
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
import { CSCSApiResponseListUserJobFavourite } from '../ChronoSheetsClientLibModel/cSCSApiResponseListUserJobFavourite';
import { CSCSInsertUserJobFavouriteRequest } from '../ChronoSheetsClientLibModel/cSCSInsertUserJobFavouriteRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UserJobFavouritesService {

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
     * Create a job favourite.    Requires the &#39;SubmitTimesheets&#39; permission.
     * 
     * @param request An Insert UserJobFavourite Request object containing values for the new UserJobFavourite to create
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userJobFavouritesCreateJobFavourite(request: CSInsertUserJobFavouriteRequest, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseInt32>;
    public userJobFavouritesCreateJobFavourite(request: CSInsertUserJobFavouriteRequest, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseInt32>>;
    public userJobFavouritesCreateJobFavourite(request: CSInsertUserJobFavouriteRequest, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseInt32>>;
    public userJobFavouritesCreateJobFavourite(request: CSInsertUserJobFavouriteRequest, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling userJobFavouritesCreateJobFavourite.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling userJobFavouritesCreateJobFavourite.');
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

        return this.httpClient.put<CSApiResponseInt32>(`${this.basePath}/api/UserJobFavourites/CreateJobFavourite`,
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
     * Delete a job favourite.    Requires the &#39;SubmitTimesheets&#39; permission.
     * 
     * @param jobId The ID of the Job for the Job Favourite you want to delete.
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userJobFavouritesDeleteJobFavourite(jobId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseBoolean>;
    public userJobFavouritesDeleteJobFavourite(jobId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseBoolean>>;
    public userJobFavouritesDeleteJobFavourite(jobId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseBoolean>>;
    public userJobFavouritesDeleteJobFavourite(jobId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (jobId === null || jobId === undefined) {
            throw new Error('Required parameter jobId was null or undefined when calling userJobFavouritesDeleteJobFavourite.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling userJobFavouritesDeleteJobFavourite.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (jobId !== undefined) {
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
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<CSApiResponseBoolean>(`${this.basePath}/api/UserJobFavourites/DeleteJobFavourite`,
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
     * Get your job favourites.    Requires the &#39;SubmitTimesheets&#39; permission.
     * 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userJobFavouritesGetJobFavourites(xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseListUserJobFavourite>;
    public userJobFavouritesGetJobFavourites(xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseListUserJobFavourite>>;
    public userJobFavouritesGetJobFavourites(xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseListUserJobFavourite>>;
    public userJobFavouritesGetJobFavourites(xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling userJobFavouritesGetJobFavourites.');
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

        return this.httpClient.get<CSApiResponseListUserJobFavourite>(`${this.basePath}/api/UserJobFavourites/GetJobFavourites`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
