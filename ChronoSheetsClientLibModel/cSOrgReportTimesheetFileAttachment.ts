/**
 * The ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  </p>  <p>      First Steps:       <ol>          <li>Make sure you've <a href='/HomeV2/App/sign-up'>signed up to ChronoSheets</a> to get yourself a user account</li>          <li>Confirm your account by following the link sent to your email address.  This will activate your account</li>          <li>Use your username and password to obtain an Auth Token by using the DoLogin method inside the UserProfile section below.  Use the Auth Token as an argument to the other methods</li>          <li>Try different methods in the API Playground to learn about the API</li>          <li>If you're stuck, try the full getting started guide on the <a href='/Home/ApiDocs'>API Toolkit</a> page.</li>      </ol>  </p>  <p>      Further Steps:       <ul>          <li>Create a mobile app (iOS, Android or Windows) using one of the ChronoSheets Mobile SDKs</li>          <li>Create a custom integration with your app using one of the ChronoSheets API Client Libraries.</li>      </ul>      Read more about the API Toolkit on the <a href='/Home/ApiDocs'>API Toolkit</a> page.  </p></div>
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface CSOrgReportTimesheetFileAttachment {
    username?: string;
    emailAddress?: string;
    firstName?: string;
    lastName?: string;
    timesheetStart?: Date;
    timesheetEnd?: Date;
    timesheetId?: number;
    documentS3SignedUrl?: string;
    imageLargeS3SignedUrl?: string;
    imageMediumS3SignedUrl?: string;
    imageSmallS3SignedUrl?: string;
    fileAttachmentId?: number;
    userId?: number;
    orgId?: number;
    mobilePlatform?: CSOrgReportTimesheetFileAttachment.CSMobilePlatformEnum;
    attachmentType?: CSOrgReportTimesheetFileAttachment.CSAttachmentTypeEnum;
    notes?: string;
    nonImageFilePath?: string;
    imageLargeFilePath?: string;
    imageMediumFilePath?: string;
    imageSmallFilePath?: string;
    originalFileName?: string;
    latitude?: number;
    longitude?: number;
    dateUploaded?: Date;
    dateImageCaptured?: Date;
    storageAllocationBytes?: number;
}
export namespace CSOrgReportTimesheetFileAttachment {
    export type CSMobilePlatformEnum = 'Unknown' | 'iOS' | 'Android';
    export const CSMobilePlatformEnum = {
        Unknown: 'Unknown' as CSMobilePlatformEnum,
        IOS: 'iOS' as CSMobilePlatformEnum,
        Android: 'Android' as CSMobilePlatformEnum
    }
    export type CSAttachmentTypeEnum = 'Image' | 'WordDoc' | 'Pdf' | 'MSSpreadSheet' | 'MSPowerPoint' | 'RichTextFormat' | 'ZipFile' | 'Other';
    export const CSAttachmentTypeEnum = {
        Image: 'Image' as CSAttachmentTypeEnum,
        WordDoc: 'WordDoc' as CSAttachmentTypeEnum,
        Pdf: 'Pdf' as CSAttachmentTypeEnum,
        MSSpreadSheet: 'MSSpreadSheet' as CSAttachmentTypeEnum,
        MSPowerPoint: 'MSPowerPoint' as CSAttachmentTypeEnum,
        RichTextFormat: 'RichTextFormat' as CSAttachmentTypeEnum,
        ZipFile: 'ZipFile' as CSAttachmentTypeEnum,
        Other: 'Other' as CSAttachmentTypeEnum
    }
}
