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

import { ApiResponseForPaginatedListTrip } from '../model/models';
import { ApiResponseInt32 } from '../model/models';
import { ApiResponseTrip } from '../model/models';
import { CreateTripRequest } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class TripsService {

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
     * Create a new trip.  Important: create a timesheet record before calling this, passing in the new timesheet record id as a reference.    Requires the \&#39;SubmitTimesheets\&#39; permission.
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param request A Create Trip Request object containing values for the new Trip to create
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tripsCreateTrip(xChronosheetsAuth: string, request: CreateTripRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseInt32>;
    public tripsCreateTrip(xChronosheetsAuth: string, request: CreateTripRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseInt32>>;
    public tripsCreateTrip(xChronosheetsAuth: string, request: CreateTripRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseInt32>>;
    public tripsCreateTrip(xChronosheetsAuth: string, request: CreateTripRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling tripsCreateTrip.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling tripsCreateTrip.');
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

        return this.httpClient.post<ApiResponseInt32>(`${this.configuration.basePath}/Trips/CreateTrip`,
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
     * Get trip by Id.    Requires the \&#39;ViewMyTrips\&#39; permission.
     * @param tripId The ID of the Trip you want to get
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tripsGetMyTripById(tripId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseTrip>;
    public tripsGetMyTripById(tripId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseTrip>>;
    public tripsGetMyTripById(tripId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseTrip>>;
    public tripsGetMyTripById(tripId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (tripId === null || tripId === undefined) {
            throw new Error('Required parameter tripId was null or undefined when calling tripsGetMyTripById.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling tripsGetMyTripById.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (tripId !== undefined && tripId !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>tripId, 'TripId');
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

        return this.httpClient.get<ApiResponseTrip>(`${this.configuration.basePath}/Trips/GetMyTripById`,
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

    /**
     * Get my trips.  Get the GPS trips you\&#39;ve recorded and submitted.    Requires the \&#39;ViewMyTrips\&#39; permission.
     * @param startDate The Start date of the date range.  Trips after this date will be obtained.
     * @param endDate The End date of the date range.  Trips before this date will be obtained.
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param skip Skip this many Trips
     * @param take Take this many Trips
     * @param vehicleId Filter by a particular Vehicle (get trips made with a particular vehicle), specified by VehicleId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tripsGetMyTrips(startDate: string, endDate: string, xChronosheetsAuth: string, skip?: number, take?: number, vehicleId?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseForPaginatedListTrip>;
    public tripsGetMyTrips(startDate: string, endDate: string, xChronosheetsAuth: string, skip?: number, take?: number, vehicleId?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseForPaginatedListTrip>>;
    public tripsGetMyTrips(startDate: string, endDate: string, xChronosheetsAuth: string, skip?: number, take?: number, vehicleId?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseForPaginatedListTrip>>;
    public tripsGetMyTrips(startDate: string, endDate: string, xChronosheetsAuth: string, skip?: number, take?: number, vehicleId?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling tripsGetMyTrips.');
        }
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling tripsGetMyTrips.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling tripsGetMyTrips.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (startDate !== undefined && startDate !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>startDate, 'StartDate');
        }
        if (endDate !== undefined && endDate !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>endDate, 'EndDate');
        }
        if (skip !== undefined && skip !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>skip, 'Skip');
        }
        if (take !== undefined && take !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>take, 'Take');
        }
        if (vehicleId !== undefined && vehicleId !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>vehicleId, 'VehicleId');
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

        return this.httpClient.get<ApiResponseForPaginatedListTrip>(`${this.configuration.basePath}/Trips/GetMyTrips`,
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
