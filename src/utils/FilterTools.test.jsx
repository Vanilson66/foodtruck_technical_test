import { filterInput } from './FilterTools';

describe('filterInput', () => {
    const testData = [
        {
            "locationid": "1343454",
            "Applicant": "Esmeli Catering",
            "FacilityType": "Truck",
            "cnn": "7022000",
            "LocationDescription": "HOOPER ST: 07TH ST to 08TH ST (100 - 199)",
            "Address": "Assessors Block /Lot",
            "blocklot": "",
            "block": "",
            "lot": "",
            "permit": "19MFF-00110",
            "Status": "REQUESTED",
            "FoodItems": "tacos: burritos: quesadilla: tortas sodas",
            "X": "",
            "Y": "",
            "Latitude": "0",
            "Longitude": "0",
            "Schedule": "http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00110&ExportPDF=1&Filename=19MFF-00110_schedule.pdf",
        },
        {
            "locationid": "1334819",
            "Applicant": "tacos y pupusas los trinos",
            "FacilityType": "",
            "cnn": "9158000",
            "LocationDescription": "MISSION ST: AVALON AVE to COTTER ST (4368 - 4439)",
            "Address": "4384 MISSION ST",
            "blocklot": "6798004",
            "block": "6798",
            "lot": "004",
            "permit": "19MFF-00048",
            "Status": "REQUESTED",
            "FoodItems": "",
            "X": "6002680.03",
            "Y": "2093158.531",
            "Latitude": "37.727566537591706",
            "Longitude": "-122.4329697019889",
            "Schedule": "http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00048&ExportPDF=1&Filename=19MFF-00048_schedule.pdf",
        },
        {
            "locationid": "955616",
            "Applicant": "Santo Toribio",
            "FacilityType": "Truck",
            "cnn": "12628000",
            "LocationDescription": "TOLAND ST: NEWCOMB AVE to OAKDALE AVE (900 - 999)",
            "Address": "928 TOLAND ST",
            "blocklot": "5597A001",
            "block": "5597A",
            "lot": "001",
            "permit": "17MFF-0171",
            "Status": "REQUESTED",
            "FoodItems": "hotdog",
            "X": "6011869.691",
            "Y": "2098089.783",
            "Latitude": "37.74162368623527",
            "Longitude": "-122.4015472063967",
            "Schedule": "http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0171&ExportPDF=1&Filename=17MFF-0171_schedule.pdf",
        }
    ];

    it('should filter correctly', () => {
        const searchInput = 'tacos';
        const result = filterInput(testData, searchInput);
        const expected = [
            {
            "locationid": "1343454",
            "Applicant": "Esmeli Catering",
            "FacilityType": "Truck",
            "cnn": "7022000",
            "LocationDescription": "HOOPER ST: 07TH ST to 08TH ST (100 - 199)",
            "Address": "Assessors Block /Lot",
            "blocklot": "",
            "block": "",
            "lot": "",
            "permit": "19MFF-00110",
            "Status": "REQUESTED",
            "FoodItems": "tacos: burritos: quesadilla: tortas sodas",
            "X": "",
            "Y": "",
            "Latitude": "0",
            "Longitude": "0",
            "Schedule": "http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00110&ExportPDF=1&Filename=19MFF-00110_schedule.pdf",
        },
        {
            "locationid": "1334819",
            "Applicant": "tacos y pupusas los trinos",
            "FacilityType": "",
            "cnn": "9158000",
            "LocationDescription": "MISSION ST: AVALON AVE to COTTER ST (4368 - 4439)",
            "Address": "4384 MISSION ST",
            "blocklot": "6798004",
            "block": "6798",
            "lot": "004",
            "permit": "19MFF-00048",
            "Status": "REQUESTED",
            "FoodItems": "",
            "X": "6002680.03",
            "Y": "2093158.531",
            "Latitude": "37.727566537591706",
            "Longitude": "-122.4329697019889",
            "Schedule": "http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00048&ExportPDF=1&Filename=19MFF-00048_schedule.pdf",
        },
        ];
        expect(result).toEqual(expected);
    });

    it('should return an empty array if no items match the search input', () => {
        const searchInput = 'Nonexistent Food Truck 001';
        const result = filterInput(testData, searchInput);
        const expected = [];
        expect(result).toEqual(expected);
    });
});
