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


export interface CsApiSaveVehicleRequest {
    id?: number;
    name?: string;
    costPerKilometer?: number;
    make?: string;
    model?: string;
    year?: string;
    licencePlateNumber?: string;
    isDeleted?: boolean;
    linkedOrgGroupIds?: Array<number>;
}