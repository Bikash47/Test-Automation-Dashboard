export default class Common {
  static func_createEntityList(ClassType, DataList) {
    debugger
    let fnlArr = [];
    DataList.map(obj => {
      let classType = new ClassType(obj);
      fnlArr.push(classType);
    });
    debugger;
    return fnlArr;
  }
}

