import * as actionTypes from "./actionTypes";
const { v4: uuidv4 } = require("uuid");

export const setSkinId = (skinId) => {
    let id = uuidv4();
    return {
        type: actionTypes.SET_SKIN,
        payload: {
            id: id,
            skinId: skinId,
        },
    };
};

export const updateSkinId = (skinId) => {
    return {
        type: actionTypes.UPDATE_SKIN,
        payload: {
            skinId: skinId,
        },
    };
};
