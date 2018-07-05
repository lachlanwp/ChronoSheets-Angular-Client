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
import { CSClientSeriesReportItem } from './cSCSClientSeriesReportItem';
import { CSClientTotalsReportItem } from './cSCSClientTotalsReportItem';
import { CSJobSeriesReportItem } from './cSCSJobSeriesReportItem';
import { CSJobTotalsReportItem } from './cSCSJobTotalsReportItem';
import { CSProjectSeriesReportItem } from './cSCSProjectSeriesReportItem';
import { CSProjectTotalsReportItem } from './cSCSProjectTotalsReportItem';
import { CSTaskSeriesReportItem } from './cSCSTaskSeriesReportItem';
import { CSTaskTotalsReportItem } from './cSCSTaskTotalsReportItem';


export interface CSCombinedReportsData {
    seriesJobCodes?: Array<CSJobSeriesReportItem>;
    seriesTasks?: Array<CSTaskSeriesReportItem>;
    seriesClients?: Array<CSClientSeriesReportItem>;
    seriesProjects?: Array<CSProjectSeriesReportItem>;
    totalsJobCodes?: Array<CSJobTotalsReportItem>;
    totalsTasks?: Array<CSTaskTotalsReportItem>;
    totalsClients?: Array<CSClientTotalsReportItem>;
    totalsProjects?: Array<CSProjectTotalsReportItem>;
}