export const STATUS_SUCCESS = {
    success: true,
    failed: false
}

export const defaultAlertText = {
    failed:"something want wrong, please try again. ",
    success: "everything looks good!"
}

export const getTextByStatus = (status) =>{
    switch (status) {
      case STATUS_SUCCESS.success:
        return defaultAlertText.success;
      case STATUS_SUCCESS.failed:
            return defaultAlertText.failed;
        default:
            return ""
    }
}

export const RATTING_DESC = {
    0: "No Ratting",
    1: "Super",
    2: "Excellent",
    3: "Very Good",
    4: "Good",
    5: "Fine",
    6: "Not Good",
    7: "bad",
    8: "very bed"
}

export const getRattingDescription = (rate) => {
    if (rate >= 9.5) return RATTING_DESC[1];
    if (rate < 9.5 && rate > 9.0) return RATTING_DESC[2];
    if (rate >= 8.5 && rate <= 9.0) return RATTING_DESC[3];
    if (rate >= 7.0 && rate < 8.5) return RATTING_DESC[4];
    if (rate >= 4.5 && rate < 7.0) return RATTING_DESC[5];
    if (rate >= 3.5 && rate < 4.5) return RATTING_DESC[6];
    if (rate >= 2.5 && rate < 3.5) return RATTING_DESC[7];
    if (rate >= 0.0 && rate < 2.5) return RATTING_DESC[8];
    
    return RATTING_DESC[0];
};