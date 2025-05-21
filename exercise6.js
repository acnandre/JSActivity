let record = [{
    "Name":"Gibo",
    "Age":16,
    "SkillSet" : [{
      "Skill":"SAP UI5"
    },{
      "Skill":"SAP HANA"
    }]
  }, {
    "Name":"Patrick",
    "Age":22,
    "SkillSet" : [{
      "Skill":"SAP UI5"
    }, {
      "Skill":"SAP HANA"
    }, {
      "Skill":"SAP ABAP"
    }]
  }, {
    "Name":"MJ",
    "Age":24,
    "SkillSet" : [{
      "Skill":"SAP HANA"
    }]
  }];

function highSkillset(record){
    let highest = 0;
    let highestName = '';
    let highestAge = 0;

    for (let count = 0; count < record.length; count++){
        if(record[count].SkillSet.length > highest){
            highest = record[count].SkillSet.length;
            highestName = record[count].Name;
            highestAge = record[count].Age;
        }
    }
    console.log('Name: ' + highestName);
    console.log('Age: ' + highestAge);
}

highSkillset(record);