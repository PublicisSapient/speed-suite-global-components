import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ps-table',
  templateUrl: './ps-table.component.html',
  styleUrls: ['./ps-table.component.scss']
})
export class PsTableComponent {
  @Input() tableData:any;
  @Input() columns:any;
  // columns:any;
  // products:any;
  constructor() { }
 
  ngOnInit() {
  //   this.products = [{
  //     'code':'f230fh0g3',
  //     'name':'Bamboo Watch',
  //     'category':'Accessories'
  //   }]
  //   this.columns = [
  //     { field: 'assessmentId', header: 'Id' },
  //     { field: 'cycle', header: 'Cycle' },
  //     { field: 'createdBy', header: 'Created By' },
  //     { field: 'dueDate', header: 'Due Date' }
  // ];
  //   this.assessmentsList = [{
  //     "assessmentId": 2379,
  //     "assessmentResponseId": 3396,
  //     "status": 1,
  //     "year": 2024,
  //     "assessmentTypeId": 15,
  //     "hierarchyId": 10328,
  //     "templateId": 27,
  //     "cycleId": 6,
  //     "cycle": "Jun",
  //     "createdBy": "Raja Guru (rajguru)",
  //     "modifiedBy": "Raja Guru (rajguru)",
  //     "dueDate": "2024-07-30",
  //     "submittedBy": "",
  //     "submittedDate": null,
  //     "createdDate": "2024-07-29",
  //     "score": null,
  //     "mandatoryQuestionsScore": null,
  //     "hierarchyNode": {
  //       "Vertical": "Financial Services",
  //       "Account": "Northwestern Mutual",
  //       "Account_id": "9521",
  //       "Root_id": "8976",
  //       "Project Context": null,
  //       "BU_id": "8977",
  //       "Engagement": "eFront",
  //       "Vertical_id": "8983",
  //       "BU": "North America",
  //       "updated_by": null,
  //       "Engagement_id": "9523",
  //       "Id": "10328",
  //       "remarks": null,
  //       "status": "ACTIVE"
  //     },
  //     "preFilledData": false,
  //     "hasUnscoredQue": false,
  //     "showMandatoryToggle": false,
  //     "reviewRequestId": null,
  //     "reviewApproveBypass": false,
  //     "showSummary": false,
  //     "formVersionId": null,
  //     "formSubmissionId": null,
  //     "reviewer": false
  //   },
  //   {
  //     "assessmentId": 2341,
  //     "assessmentResponseId": 3387,
  //     "status": 1,
  //     "year": 2024,
  //     "assessmentTypeId": 15,
  //     "hierarchyId": 9850,
  //     "templateId": 27,
  //     "cycleId": 7,
  //     "cycle": "Jul",
  //     "createdBy": "Karthick P (karp)",
  //     "modifiedBy": "Karthick P (karp)",
  //     "dueDate": "2024-07-30",
  //     "submittedBy": "",
  //     "submittedDate": null,
  //     "createdDate": "2024-07-25",
  //     "score": null,
  //     "mandatoryQuestionsScore": null,
  //     "hierarchyNode": {
  //       "Vertical": "Consumer Products",
  //       "Account": "BSN MEDICAL GMBH",
  //       "Account_id": "9053",
  //       "Root_id": "8976",
  //       "Project Context": null,
  //       "BU_id": "8994",
  //       "Engagement": "Actimov",
  //       "Vertical_id": "8978",
  //       "BU": "International",
  //       "updated_by": null,
  //       "Engagement_id": "9055",
  //       "Id": "9850",
  //       "remarks": null,
  //       "status": "ACTIVE"
  //     },
  //     "preFilledData": false,
  //     "hasUnscoredQue": false,
  //     "showMandatoryToggle": false,
  //     "reviewRequestId": null,
  //     "reviewApproveBypass": false,
  //     "showSummary": false,
  //     "formVersionId": null,
  //     "formSubmissionId": null,
  //     "reviewer": false
  //   },
  //   {
  //     "assessmentId": 2392,
  //     "assessmentResponseId": 3409,
  //     "status": 1,
  //     "year": 2024,
  //     "assessmentTypeId": 15,
  //     "hierarchyId": 10100,
  //     "templateId": 27,
  //     "cycleId": 7,
  //     "cycle": "Jul",
  //     "createdBy": "Raja Guru (rajguru)",
  //     "modifiedBy": "Raja Guru (rajguru)",
  //     "dueDate": "2024-08-03",
  //     "submittedBy": "",
  //     "submittedDate": null,
  //     "createdDate": "2024-07-31",
  //     "score": null,
  //     "mandatoryQuestionsScore": null,
  //     "hierarchyNode": {
  //       "Vertical": "Energy & Commodities",
  //       "Account": "Mabanaft GmbH & Co. KG",
  //       "Account_id": "9299",
  //       "Root_id": "8976",
  //       "Project Context": null,
  //       "BU_id": "8994",
  //       "Engagement": "ETRM Transformation",
  //       "Vertical_id": "9179",
  //       "BU": "International",
  //       "updated_by": null,
  //       "Engagement_id": "9300",
  //       "Id": "10100",
  //       "remarks": null,
  //       "status": "ACTIVE"
  //     },
  //     "preFilledData": false,
  //     "hasUnscoredQue": false,
  //     "showMandatoryToggle": false,
  //     "reviewRequestId": null,
  //     "reviewApproveBypass": false,
  //     "showSummary": false,
  //     "formVersionId": null,
  //     "formSubmissionId": null,
  //     "reviewer": false
  //   },
  //   {
  //     "assessmentId": 2388,
  //     "assessmentResponseId": 3405,
  //     "status": 1,
  //     "year": 2024,
  //     "assessmentTypeId": 15,
  //     "hierarchyId": 10111,
  //     "templateId": 27,
  //     "cycleId": 7,
  //     "cycle": "Jul",
  //     "createdBy": "Manoj Kumar Srivastava (mansriva0)",
  //     "modifiedBy": "Manoj Kumar Srivastava (mansriva0)",
  //     "dueDate": "2024-08-03",
  //     "submittedBy": "",
  //     "submittedDate": null,
  //     "createdDate": "2024-07-30",
  //     "score": null,
  //     "mandatoryQuestionsScore": null,
  //     "hierarchyNode": {
  //       "Vertical": "Financial Services",
  //       "Account": "Aldermore Bank Plc",
  //       "Account_id": "9309",
  //       "Root_id": "8976",
  //       "Project Context": null,
  //       "BU_id": "8994",
  //       "Engagement": "Apollo Transformation",
  //       "Vertical_id": "8983",
  //       "BU": "International",
  //       "updated_by": null,
  //       "Engagement_id": "9310",
  //       "Id": "10111",
  //       "remarks": null,
  //       "status": "ACTIVE"
  //     },
  //     "preFilledData": false,
  //     "hasUnscoredQue": false,
  //     "showMandatoryToggle": false,
  //     "reviewRequestId": null,
  //     "reviewApproveBypass": false,
  //     "showSummary": false,
  //     "formVersionId": null,
  //     "formSubmissionId": null,
  //     "reviewer": false
  //   },
  //   {
  //     "assessmentId": 2387,
  //     "assessmentResponseId": 3404,
  //     "status": 1,
  //     "year": 2024,
  //     "assessmentTypeId": 15,
  //     "hierarchyId": 10216,
  //     "templateId": 27,
  //     "cycleId": 7,
  //     "cycle": "Jul",
  //     "createdBy": "Manoj Kumar Srivastava (mansriva0)",
  //     "modifiedBy": "Manoj Kumar Srivastava (mansriva0)",
  //     "dueDate": "2024-08-03",
  //     "submittedBy": "",
  //     "submittedDate": null,
  //     "createdDate": "2024-07-30",
  //     "score": null,
  //     "mandatoryQuestionsScore": null,
  //     "hierarchyNode": {
  //       "Vertical": "Retail",
  //       "Account": "ALDI STORES LTD",
  //       "Account_id": "9414",
  //       "Root_id": "8976",
  //       "Project Context": "",
  //       "BU_id": "8994",
  //       "Engagement": "Aldi Support",
  //       "Vertical_id": "9041",
  //       "BU": "International",
  //       "updated_by": "Raja Guru (rajguru)",
  //       "Engagement_id": "9415",
  //       "Id": "10216",
  //       "remarks": "test cmnts",
  //       "status": "ON HOLD"
  //     },
  //     "preFilledData": false,
  //     "hasUnscoredQue": false,
  //     "showMandatoryToggle": false,
  //     "reviewRequestId": null,
  //     "reviewApproveBypass": false,
  //     "showSummary": false,
  //     "formVersionId": null,
  //     "formSubmissionId": null,
  //     "reviewer": false
  //   },
  //   {
  //     "assessmentId": 2386,
  //     "assessmentResponseId": 3403,
  //     "status": 1,
  //     "year": 2024,
  //     "assessmentTypeId": 15,
  //     "hierarchyId": 10343,
  //     "templateId": 27,
  //     "cycleId": 7,
  //     "cycle": "Jul",
  //     "createdBy": "Komal Shah (komshah)",
  //     "modifiedBy": "Komal Shah (komshah)",
  //     "dueDate": "2024-08-13",
  //     "submittedBy": "",
  //     "submittedDate": null,
  //     "createdDate": "2024-07-30",
  //     "score": null,
  //     "mandatoryQuestionsScore": null,
  //     "hierarchyNode": {
  //       "Vertical": "Automotive",
  //       "Account": "Bridgestone Asia Pacific Pte Ltd",
  //       "Account_id": "9537",
  //       "Root_id": "8976",
  //       "Project Context": null,
  //       "BU_id": "8994",
  //       "Engagement": "APAC AEM Development",
  //       "Vertical_id": "9006",
  //       "BU": "International",
  //       "updated_by": null,
  //       "Engagement_id": "9538",
  //       "Id": "10343",
  //       "remarks": null,
  //       "status": "ACTIVE"
  //     },
  //     "preFilledData": false,
  //     "hasUnscoredQue": false,
  //     "showMandatoryToggle": false,
  //     "reviewRequestId": null,
  //     "reviewApproveBypass": false,
  //     "showSummary": false,
  //     "formVersionId": null,
  //     "formSubmissionId": null,
  //     "reviewer": false
  //   },
  //   {
  //     "assessmentId": 2384,
  //     "assessmentResponseId": 3401,
  //     "status": 1,
  //     "year": 2024,
  //     "assessmentTypeId": 15,
  //     "hierarchyId": 10072,
  //     "templateId": 27,
  //     "cycleId": 6,
  //     "cycle": "Jun",
  //     "createdBy": "Raja Guru (rajguru)",
  //     "modifiedBy": "Raja Guru (rajguru)",
  //     "dueDate": "2024-08-13",
  //     "submittedBy": "",
  //     "submittedDate": null,
  //     "createdDate": "2024-07-30",
  //     "score": null,
  //     "mandatoryQuestionsScore": null,
  //     "hierarchyNode": {
  //       "Vertical": "Retails",
  //       "Account": "Grupo Coppel",
  //       "Account_id": "9271",
  //       "Root_id": "8976",
  //       "Project Context": null,
  //       "BU_id": "8977",
  //       "Engagement": "DBT Implementation",
  //       "Vertical_id": "9125",
  //       "BU": "North America",
  //       "updated_by": null,
  //       "Engagement_id": "9272",
  //       "Id": "10072",
  //       "remarks": null,
  //       "status": "ACTIVE"
  //     },
  //     "preFilledData": false,
  //     "hasUnscoredQue": false,
  //     "showMandatoryToggle": false,
  //     "reviewRequestId": null,
  //     "reviewApproveBypass": false,
  //     "showSummary": false,
  //     "formVersionId": null,
  //     "formSubmissionId": null,
  //     "reviewer": false
  //   },
  //   {
  //     "assessmentId": 2383,
  //     "assessmentResponseId": 3400,
  //     "status": 1,
  //     "year": 2024,
  //     "assessmentTypeId": 15,
  //     "hierarchyId": 10009,
  //     "templateId": 27,
  //     "cycleId": 6,
  //     "cycle": "Jun",
  //     "createdBy": "Razvan Georgescu (razgeorg)",
  //     "modifiedBy": "Razvan Georgescu (razgeorg)",
  //     "dueDate": "2024-08-13",
  //     "submittedBy": "",
  //     "submittedDate": null,
  //     "createdDate": "2024-07-29",
  //     "score": null,
  //     "mandatoryQuestionsScore": null,
  //     "hierarchyNode": {
  //       "Vertical": "Telecommunication",
  //       "Account": "OMAN TELECOMMUNICATIONS COMPANY SAOG",
  //       "Account_id": "9207",
  //       "Root_id": "8976",
  //       "Project Context": null,
  //       "BU_id": "8994",
  //       "Engagement": "Digital Workstream",
  //       "Vertical_id": "9206",
  //       "BU": "International",
  //       "updated_by": null,
  //       "Engagement_id": "9209",
  //       "Id": "10009",
  //       "remarks": null,
  //       "status": "ACTIVE"
  //     },
  //     "preFilledData": false,
  //     "hasUnscoredQue": false,
  //     "showMandatoryToggle": false,
  //     "reviewRequestId": null,
  //     "reviewApproveBypass": false,
  //     "showSummary": false,
  //     "formVersionId": null,
  //     "formSubmissionId": null,
  //     "reviewer": false
  //   },
  //   {
  //     "assessmentId": 2405,
  //     "assessmentResponseId": 3422,
  //     "status": 1,
  //     "year": 2024,
  //     "assessmentTypeId": 15,
  //     "hierarchyId": 9852,
  //     "templateId": 27,
  //     "cycleId": 7,
  //     "cycle": "Jul",
  //     "createdBy": "Raja Guru (rajguru)",
  //     "modifiedBy": "Anil Kumar Singh (anisingh4)",
  //     "dueDate": "2024-08-30",
  //     "submittedBy": "",
  //     "submittedDate": null,
  //     "createdDate": "2024-08-01",
  //     "score": null,
  //     "mandatoryQuestionsScore": null,
  //     "hierarchyNode": {
  //       "Vertical": "Consumer Products",
  //       "Account": "BSN MEDICAL GMBH",
  //       "Account_id": "9053",
  //       "Root_id": "8976",
  //       "Project Context": null,
  //       "BU_id": "8994",
  //       "Engagement": "Cutimed",
  //       "Vertical_id": "8978",
  //       "BU": "International",
  //       "updated_by": null,
  //       "Engagement_id": "9057",
  //       "Id": "9852",
  //       "remarks": null,
  //       "status": "ACTIVE"
  //     },
  //     "preFilledData": false,
  //     "hasUnscoredQue": false,
  //     "showMandatoryToggle": false,
  //     "reviewRequestId": null,
  //     "reviewApproveBypass": false,
  //     "showSummary": false,
  //     "formVersionId": null,
  //     "formSubmissionId": null,
  //     "reviewer": false
  //   }
  //   ]
  }

}
