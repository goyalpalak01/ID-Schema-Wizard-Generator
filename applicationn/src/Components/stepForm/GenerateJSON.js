export function generateJSON_fullName(data){
    var obj ={};
    obj[data.attid]={};
    obj[data.attid]['bioAttributes']=[];
    if(data.valid_name==="true"){
        obj[data.attid]['validators']=[];
        obj[data.attid]['validators'].push({
            "arguments": [],
			"type": "regex"
        });
    }
    obj[data.attid]['fieldCategory']="pvt";
    obj[data.attid]['format']="none";
    obj[data.attid]['fieldType']="default";
    if(data.lang==="true"){
        obj[data.attid]['$ref']="#/definitions/simpleType";
    }
    return JSON.stringify(obj);
};