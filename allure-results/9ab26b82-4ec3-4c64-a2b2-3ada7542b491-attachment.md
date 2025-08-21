# Test info

- Name: CMS Application Automation >> Create Timetable
- Location: /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:87:7

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('option') resolved to 271 elements:
    1) <div tabindex="-1" role="option" aria-disabled="false" aria-selected="false" class="css-1lsynny-option" id="react-select-9-option-0">Scenario Testing</div> aka getByRole('option', { name: 'Scenario Testing' })
    2) <div tabindex="-1" role="option" aria-disabled="false" aria-selected="false" class="css-tab8za-option" id="react-select-9-option-1">Test Scenario</div> aka getByRole('option', { name: 'Test Scenario', exact: true })
    3) <div tabindex="-1" role="option" aria-disabled="false" aria-selected="false" class="css-tab8za-option" id="react-select-9-option-2">Scenario A1</div> aka getByRole('option', { name: 'Scenario A1' })
    4) <div tabindex="-1" role="option" aria-disabled="false" aria-selected="false" class="css-tab8za-option" id="react-select-9-option-3">Scenario  W_1</div> aka getByRole('option', { name: 'Scenario W_1' })
    5) <div tabindex="-1" role="option" aria-disabled="false" aria-selected="false" class="css-tab8za-option" id="react-select-9-option-4">Sync test scenario 2 reverse vroom boom test 2</div> aka getByRole('option', { name: 'Sync test scenario 2 reverse' })
    6) <div tabindex="-1" role="option" aria-disabled="false" aria-selected="false" class="css-tab8za-option" id="react-select-9-option-5">Sync test scenario code update</div> aka getByRole('option', { name: 'Sync test scenario code update' })
    7) <div tabindex="-1" role="option" aria-disabled="false" aria-selected="false" class="css-tab8za-option" id="react-select-9-option-6">Sendo tester</div> aka getByRole('option', { name: 'Sendo tester' })
    8) <div tabindex="-1" role="option" aria-disabled="false" aria-selected="false" class="css-tab8za-option" id="react-select-9-option-7">Test Scenario 107</div> aka getByRole('option', { name: 'Test Scenario 107' })
    9) <div tabindex="-1" role="option" aria-disabled="false" aria-selected="false" class="css-tab8za-option" id="react-select-9-option-8">Test Scenario 108</div> aka getByRole('option', { name: 'Test Scenario 108' })
    10) <div tabindex="-1" role="option" aria-disabled="false" aria-selected="false" class="css-tab8za-option" id="react-select-9-option-9">Test Scenario 109</div> aka getByRole('option', { name: 'Test Scenario 109' })
    ...

Call log:
  - waiting for getByRole('option')

    at TimetablePage.createTimetable (/home/yaqoob/CMS-End-to-End-Automation-with-Playwright/pages/TimetablePage.js:41:23)
    at /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:89:5
```

# Page snapshot

```yaml
- dialog "Add New Time Table":
  - heading "Add New Time Table" [level=2]
  - text: Time Table Name *
  - textbox "Enter time table name": Timetable U83923
  - text: Scenario *
  - subscript
  - subscript
  - log: 271 results available.Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu, press Tab to select the option and exit the menu.
  - text: Select scenario
  - combobox [expanded]
  - text: Start Time *
  - textbox
  - text: End Time *
  - textbox
  - button "Cancel"
  - button "Add"
- listbox:
  - option "Scenario Testing"
  - option "Test Scenario"
  - option "Scenario A1"
  - option "Scenario W_1"
  - option "Sync test scenario 2 reverse vroom boom test 2"
  - option "Sync test scenario code update"
  - option "Sendo tester"
  - option "Test Scenario 107"
  - option "Test Scenario 108"
  - option "Test Scenario 109"
  - option "Test Scenario 110"
  - option "Scenario A3"
  - option "Scenario 4"
  - option "Scenario U1"
  - option "Scenario U42473"
  - option "Scenario U68395"
  - option "Scenario U78979"
  - option "Scenario U3385"
  - option "Scenario U67702"
  - option "Scenario U50159"
  - option "Scenario U30136"
  - option "Test Scenario1"
  - option "Scenario U47981"
  - option "Scenario U21195"
  - option "Scenario U60973"
  - option "Scenario U78063"
  - option "Scenario U30453"
  - option "Scenario U49967"
  - option "Scenario U50514"
  - option "Scenario U4046"
  - option "Scenario U79920"
  - option "Scenario U25176"
  - option "Scenario U59927"
  - option "Scenario U39855"
  - option "Scenario U43666"
  - option "Scenario U74736"
  - option "Scenario U39374"
  - option "Scenario U36835"
  - option "Scenario U47886"
  - option "Scenario U91053"
  - option "Scenario U75934"
  - option "Scenario U77119"
  - option "Scenario U95856"
  - option "Scenario U78257"
  - option "Scenario U69386"
  - option "Scenario U142"
  - option "Scenario U30947"
  - option "Scenario U12469"
  - option "Test time Scenario"
  - option "Scenario U32269"
  - option "Scenario U7311"
  - option "Scenario U53710"
  - option "Scenario U92974"
  - option "Scenario U97371"
  - option "Scenario U97486"
  - option "Scenario U9718"
  - option "Scenario U71126"
  - option "Scenario U32168"
  - option "Scenario U74558"
  - option "Scenario U88638"
  - option "Scenario U33554"
  - option "Scenario U99800"
  - option "Scenario U94153"
  - option "Scenario U48214"
  - option "Scenario U58194"
  - option "Scenario U6324"
  - option "Scenario U81813"
  - option "Scenario U54441"
  - option "Scenario U5549"
  - option "Scenario U82975"
  - option "Scenario U19781"
  - option "Scenario U90396"
  - option "Scenario U65857"
  - option "Scenario U41423"
  - option "Scenario U70616"
  - option "Scenario U43337"
  - option "Scenario U60598"
  - option "Scenario U130"
  - option "Scenario U22643"
  - option "Scenario U46975"
  - option "Scenario U75148"
  - option "Scenario U72054"
  - option "Scenario U92441"
  - option "Scenario U85192"
  - option "Scenario U96487"
  - option "Scenario U18433"
  - option "Scenario U50628"
  - option "Scenario U5881"
  - option "Scenario U76239"
  - option "Scenario U91501"
  - option "Scenario U81265"
  - option "Scenario U95641"
  - option "Scenario U34259"
  - option "Scenario U61567"
  - option "Scenario U58849"
  - option "Scenario U69396"
  - option "Scenario U6299"
  - option "Scenario U72560"
  - option "Scenario U22567"
  - option "Scenario U51106"
  - option "Scenario U59758"
  - option "Scenario U86940"
  - option "Scenario U54422"
  - option "Scenario U3313"
  - option "Scenario U92075"
  - option "Scenario U25358"
  - option "Scenario U25851"
  - option "Scenario U15956"
  - option "Scenario U32195"
  - option "Scenario U97838"
  - option "Scenario U57148"
  - option "Scenario U22333"
  - option "Scenario U65509"
  - option "Scenario U25004"
  - option "Scenario U27962"
  - option "Scenario U29612"
  - option "Scenario U5422"
  - option "Scenario U36439"
  - option "Scenario U38969"
  - option "Scenario U51385"
  - option "Scenario U70867"
  - option "Scenario U57569"
  - option "Scenario U1123"
  - option "Scenario U97450"
  - option "Scenario U52122"
  - option "Scenario U20398"
  - option "Scenario U43591"
  - option "Scenario U17759"
  - option "Scenario U65213"
  - option "Scenario U4253"
  - option "Scenario U18231"
  - option "Scenario U51781"
  - option "Scenario U48701"
  - option "Scenario U63538"
  - option "Scenario U32567"
  - option "Scenario U2435"
  - option "Scenario U52796"
  - option "Scenario U17761"
  - option "Scenario U56898"
  - option "Scenario U14717"
  - option "Scenario U15557"
  - option "Scenario U66580"
  - option "Scenario U23962"
  - option "Scenario U14516"
  - option "Scenario U74838"
  - option "Scenario U95741"
  - option "Scenario U28300"
  - option "Scenario U70325"
  - option "Scenario U51480"
  - option "Scenario U80519"
  - option "Scenario U68045"
  - option "Scenario U69407"
  - option "Scenario U92087"
  - option "Scenario U11330"
  - option "Scenario U20572"
  - option "Scenario U79318"
  - option "Scenario U87261"
  - option "Scenario U34163"
  - option "Scenario U40675"
  - option "Scenario U76577"
  - option "Scenario U65046"
  - option "Scenario U75132"
  - option "Scenario U57164"
  - option "Scenario U91421"
  - option "Scenario U51964"
  - option "Scenario U93287"
  - option "Scenario U57790"
  - option "Scenario U24519"
  - option "Scenario U5629"
  - option "Scenario U4370"
  - option "Scenario U7503"
  - option "Scenario U33588"
  - option "Scenario U72043"
  - option "Scenario U952"
  - option "Scenario U88226"
  - option "Scenario U14590"
  - option "Scenario U59854"
  - option "Scenario U66267"
  - option "Scenario U91593"
  - option "Scenario U54435"
  - option "Scenario U42555"
  - option "Scenario U79777"
  - option "Scenario U3528"
  - option "Scenario U74702"
  - option "Scenario U85704"
  - option "Scenario U16015"
  - option "Scenario U30170"
  - option "Scenario U18967"
  - option "Scenario U96313"
  - option "Scenario U62334"
  - option "Scenario U50406"
  - option "Scenario U74793"
  - option "Scenario U41077"
  - option "Scenario U72088"
  - option "Scenario U63078"
  - option "Scenario U84492"
  - option "Scenario U86640"
  - option "Scenario U17386"
  - option "Scenario U18953"
  - option "Scenario U22842"
  - option "Scenario U24620"
  - option "Scenario U76263"
  - option "Scenario U11875"
  - option "Scenario U79798"
  - option "Scenario U68687"
  - option "Scenario U84928"
  - option "Scenario U72012"
  - option "Scenario U69754"
  - option "Scenario U73138"
  - option "Scenario U42170"
  - option "Scenario U97991"
  - option "Scenario U74385"
  - option "Scenario U98145"
  - option "Scenario U52046"
  - option "Scenario U2134"
  - option "Scenario U4403"
  - option "Scenario U47008"
  - option "Scenario U38351"
  - option "Scenario U35511"
  - option "Scenario U35547"
  - option "Scenario U193"
  - option "Scenario U51606"
  - option "Scenario U20058"
  - option "Scenario U29680"
  - option "Scenario U96843"
  - option "Scenario U85439"
  - option "Scenario U49971"
  - option "Scenario U816"
  - option "Scenario U28027"
  - option "Scenario U33424"
  - option "Scenario U16037"
  - option "Scenario U16165"
  - option "Scenario U47559"
  - option "Scenario U26170"
  - option "Scenario U86473"
  - option "Scenario U66066"
  - option "Scenario U21357"
  - option "Scenario U54271"
  - option "Scenario U48062"
  - option "Scenario W_3"
  - option "Sceario 12 ho"
  - option "Scenario U11837"
  - option "Scenario U25061"
  - option "Scenario U25981"
  - option "Scenario U3988"
  - option "Scenario U22247"
  - option "Scenario U55236"
  - option "Scenario U15700"
  - option "Scenario U67470"
  - option "Scenario U64349"
  - option "Scenario U97061"
  - option "Scenario U81656"
  - option "Scenario U85724"
  - option "Scenario U20111"
  - option "Scenario U60629"
  - option "Scenario U58551"
  - option "Scenario U57518"
  - option "Scenario U70131"
  - option "Scenario U80088"
  - option "Scenario U10248"
  - option "Scenario U45296"
  - option "Scenario U35986"
  - option "Scenario U13677"
  - option "Scenario U30317"
  - option "Scenario U25470"
  - option "Scenario U51763"
  - option "Scenario U79887"
  - option "Scenario U36747"
  - option "Scenario U5846"
  - option "Scenario U75289"
  - option "Scenario U83923"
```

# Test source

```ts
   1 | import { expect } from '@playwright/test';
   2 |
   3 | export default class TimetablePage {
   4 |
   5 |   constructor(page) {
   6 |     this.page = page;
   7 |
   8 |     // Locators
   9 |     this.menuTimetable = page.getByRole('link', { name: 'Time Table' });
  10 |     this.addTimetableBtn = page.getByRole('button', { name: '+ Add Time Table' });
  11 |     this.timetableNameInput = page.getByRole('textbox', { name: 'Enter time table name' });
  12 |     this.scenarioDropdown = page.locator('.css-19bb58m');
  13 |
  14 |     this.startTimeInput = page.getByPlaceholder('Select start time');
  15 |     this.endTimeInput = page.getByPlaceholder('Select end time');
  16 |     this.addBtn = page.getByRole('button', { name: 'Add' });
  17 |     this.doneBtn = page.getByRole('button', { name: 'Done' });
  18 |   }
  19 |
  20 |   
  21 |    // Navigate to Timetable Page
  22 |    
  23 |   async goto() {
  24 |     await this.menuTimetable.click();
  25 |     await expect(this.page).toHaveURL(/.*timetable/);
  26 |   }
  27 |
  28 |  async createTimetable(timetableName, scenarioName) {
  29 |   const now = new Date();
  30 |   const startTime = now.toTimeString().slice(0, 5);
  31 |   const endTime = new Date(now.getTime() + 5 * 60000).toTimeString().slice(0, 5);
  32 |
  33 |   await this.goto();
  34 |   await this.addTimetableBtn.click();
  35 |   await this.timetableNameInput.fill(timetableName);
  36 |
  37 |   // Select scenario safely
  38 |   await this.scenarioDropdown.click();
  39 |   const optionLocator = this.page.getByRole('option', { name: scenarioName, exact: true });
  40 | //   await optionLocator.waitFor({ state: 'visible', timeout: 5000 });
> 41 |   await optionLocator.click();
     |                       ^ Error: locator.click: Error: strict mode violation: getByRole('option') resolved to 271 elements:
  42 |
  43 |   // Set time range
  44 |   await this.startTimeInput.fill(startTime);
  45 |   await this.endTimeInput.fill(endTime);
  46 |
  47 |   // Save
  48 |   await this.addBtn.click();
  49 |   await this.doneBtn.click();
  50 |  }
  51 | }
  52 |
```