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

import { ApiResponseBoolean } from '../model/models';
import { ApiResponseInt32 } from '../model/models';
import { ApiResponseListProject } from '../model/models';
import { ApiResponseProject } from '../model/models';
import { InsertProjectRequest } from '../model/models';
import { UpdateProjectRequest } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

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
     * Create a project.    Requires the \&#39;ManageClientsAndProjects\&#39; permission.
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param request An Insert Project Request object containing values for the new Project to create.  Make sure to specify a correct Client Id - this will be used to attach the new project under that client.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public projectsCreateProject(xChronosheetsAuth: string, request: InsertProjectRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseInt32>;
    public projectsCreateProject(xChronosheetsAuth: string, request: InsertProjectRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseInt32>>;
    public projectsCreateProject(xChronosheetsAuth: string, request: InsertProjectRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseInt32>>;
    public projectsCreateProject(xChronosheetsAuth: string, request: InsertProjectRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling projectsCreateProject.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling projectsCreateProject.');
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

        return this.httpClient.post<ApiResponseInt32>(`${this.configuration.basePath}/Projects/CreateProject`,
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
     * Get a project by its Id.    Requires the \&#39;ManageClientsAndProjects\&#39; or \&#39;ManageJobsAndTask\&#39; permissions.
     * @param projectId The ID of the Project you want to get
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public projectsGetProjectById(projectId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseProject>;
    public projectsGetProjectById(projectId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseProject>>;
    public projectsGetProjectById(projectId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseProject>>;
    public projectsGetProjectById(projectId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling projectsGetProjectById.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling projectsGetProjectById.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (projectId !== undefined && projectId !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>projectId, 'ProjectId');
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

        return this.httpClient.get<ApiResponseProject>(`${this.configuration.basePath}/Projects/GetProjectById`,
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
     * Get projects for a particular client.    Requires the \&#39;ManageClientsAndProjects\&#39; or \&#39;ManageJobsAndTask\&#39; permissions.
     * @param clientId The ID of the client
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public projectsGetProjectsForClient(clientId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseListProject>;
    public projectsGetProjectsForClient(clientId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseListProject>>;
    public projectsGetProjectsForClient(clientId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseListProject>>;
    public projectsGetProjectsForClient(clientId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling projectsGetProjectsForClient.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling projectsGetProjectsForClient.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (clientId !== undefined && clientId !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>clientId, 'ClientId');
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

        return this.httpClient.get<ApiResponseListProject>(`${this.configuration.basePath}/Projects/GetProjectsForClient`,
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
     * Update a project.    Requires the \&#39;ManageClientsAndProjects\&#39; permission.
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param request An Update Project Request object containing updated fields.  Make sure to specify the Project Id in the request object so that ChronoSheets knows which Project to update
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public projectsUpdateProject(xChronosheetsAuth: string, request: UpdateProjectRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseBoolean>;
    public projectsUpdateProject(xChronosheetsAuth: string, request: UpdateProjectRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseBoolean>>;
    public projectsUpdateProject(xChronosheetsAuth: string, request: UpdateProjectRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseBoolean>>;
    public projectsUpdateProject(xChronosheetsAuth: string, request: UpdateProjectRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling projectsUpdateProject.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling projectsUpdateProject.');
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

        return this.httpClient.put<ApiResponseBoolean>(`${this.configuration.basePath}/Projects/UpdateProject`,
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

}
