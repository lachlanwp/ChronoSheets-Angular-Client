/**
 * ChronoSheets API
 * ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.
 *
 * OpenAPI spec version: v1
 * Contact: lachlan@chronosheets.com
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
import { CSCSApiResponseListTimesheetTask } from '../ChronoSheetsClientLibModel/cSCSApiResponseListTimesheetTask';
import { CSCSApiResponseTimesheetTask } from '../ChronoSheetsClientLibModel/cSCSApiResponseTimesheetTask';
import { CSCSInsertTaskRequest } from '../ChronoSheetsClientLibModel/cSCSInsertTaskRequest';
import { CSCSUpdateTaskRequest } from '../ChronoSheetsClientLibModel/cSCSUpdateTaskRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TasksService {

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
     * Create a task
     * 
     * @param request 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tasksCreateTask(request: CSInsertTaskRequest, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseInt32>;
    public tasksCreateTask(request: CSInsertTaskRequest, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseInt32>>;
    public tasksCreateTask(request: CSInsertTaskRequest, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseInt32>>;
    public tasksCreateTask(request: CSInsertTaskRequest, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling tasksCreateTask.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling tasksCreateTask.');
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

        return this.httpClient.put<CSApiResponseInt32>(`${this.basePath}/api/Tasks/CreateTask`,
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
     * Delete a task
     * 
     * @param taskId 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tasksDeleteTask(taskId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseBoolean>;
    public tasksDeleteTask(taskId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseBoolean>>;
    public tasksDeleteTask(taskId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseBoolean>>;
    public tasksDeleteTask(taskId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling tasksDeleteTask.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling tasksDeleteTask.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (taskId !== undefined) {
            queryParameters = queryParameters.set('TaskId', <any>taskId);
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

        return this.httpClient.delete<CSApiResponseBoolean>(`${this.basePath}/api/Tasks/DeleteTask`,
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
     * Get a particular task by id
     * 
     * @param taskId 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tasksGetTaskById(taskId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseTimesheetTask>;
    public tasksGetTaskById(taskId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseTimesheetTask>>;
    public tasksGetTaskById(taskId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseTimesheetTask>>;
    public tasksGetTaskById(taskId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling tasksGetTaskById.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling tasksGetTaskById.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (taskId !== undefined) {
            queryParameters = queryParameters.set('TaskId', <any>taskId);
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

        return this.httpClient.get<CSApiResponseTimesheetTask>(`${this.basePath}/api/Tasks/GetTaskById`,
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
     * Get tasks in your organisation
     * 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tasksGetTasks(xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseListTimesheetTask>;
    public tasksGetTasks(xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseListTimesheetTask>>;
    public tasksGetTasks(xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseListTimesheetTask>>;
    public tasksGetTasks(xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling tasksGetTasks.');
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

        return this.httpClient.get<CSApiResponseListTimesheetTask>(`${this.basePath}/api/Tasks/GetTasks`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get tasks for a particular job
     * 
     * @param jobId The ID of the job
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tasksGetTasksForJob(jobId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseListTimesheetTask>;
    public tasksGetTasksForJob(jobId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseListTimesheetTask>>;
    public tasksGetTasksForJob(jobId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseListTimesheetTask>>;
    public tasksGetTasksForJob(jobId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (jobId === null || jobId === undefined) {
            throw new Error('Required parameter jobId was null or undefined when calling tasksGetTasksForJob.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling tasksGetTasksForJob.');
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

        return this.httpClient.get<CSApiResponseListTimesheetTask>(`${this.basePath}/api/Tasks/GetTasksForJob`,
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
     * Update a task
     * 
     * @param request 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tasksUpdateTask(request: CSUpdateTaskRequest, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CSApiResponseBoolean>;
    public tasksUpdateTask(request: CSUpdateTaskRequest, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CSApiResponseBoolean>>;
    public tasksUpdateTask(request: CSUpdateTaskRequest, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CSApiResponseBoolean>>;
    public tasksUpdateTask(request: CSUpdateTaskRequest, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling tasksUpdateTask.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling tasksUpdateTask.');
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

        return this.httpClient.post<CSApiResponseBoolean>(`${this.basePath}/api/Tasks/UpdateTask`,
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
