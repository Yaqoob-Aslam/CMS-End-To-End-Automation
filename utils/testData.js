export function generateTestData() {
    const firstNames = ['Ali', 'Sara', 'Usman', 'Ayesha', 'Omar', 'Fatima', 'Bilal', 'Hira', 'Zain', 'Zara'];
    const lastNames = ['Khan', 'Malik', 'Sheikh', 'Qureshi', 'Butt', 'Raza', 'Shah', 'Chaudhry', 'Hussain', 'Mirza'];
    const getRandomName = arr => arr[Math.floor(Math.random() * arr.length)];
    const groupNumber = Math.floor(Math.random() * 100000);

    return {
        groupName: `Group U${groupNumber}`,
        subGroupName: `Subgroup U${groupNumber}`,
        subSubGroupName: `Sub Subgroup U${groupNumber}`,
        playerName: `Player U${groupNumber}`,
        videoFileName: `test__${groupNumber}.mp4`,
        scenarioName: `Scenario U${groupNumber}`,
        timetableName: `Timetable U${groupNumber}`,
        scheduleName: `Schedule U${groupNumber}`,
        uniqueFirstName: getRandomName(firstNames),
        uniqueLastName: getRandomName(lastNames),
        uniqueEmail: `${getRandomName(firstNames).toLowerCase()}.${getRandomName(lastNames).toLowerCase()}${groupNumber}@mailinator.com`
    };
}
