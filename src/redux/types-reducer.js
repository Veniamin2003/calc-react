import React from 'react'

const UPDATE_TYPE = 'UPDATE_TYPE';
const UPDATE_MATERIAL = 'UPDATE_MATERIAL';
const UPDATE_COUNT_STAGES = 'UPDATE_COUNT_STAGES';

let initialState = {
    stairsTypes: [
        {id: 1, name: 'Прямая лестница без площадки', img: 'https://stairsmontage.ru/upload/calc/0.png', price: 700},
        {id: 2, name: 'Г-образная лестница через площадку', img: 'https://stairsmontage.ru/upload/calc/1.png', price: 1000},
        {id: 3, name: 'Г-образная лестница через ступеньку', img: 'https://stairsmontage.ru/upload/calc/2.png', price: 1300},
        {id: 4, name: 'П-образная лестница через площадку', img: 'https://stairsmontage.ru/upload/calc/3.png', price: 1600}
    ],

    materials: [
        {id: 1, name: 'Лиственица экстра', img: 'https://stairsmontage.ru/images/kalc/mat1.jpg', price: 500},
        {id: 2, name: 'Бук экстра', img: 'https://stairsmontage.ru/images/kalc/mat2.jpg', price: 700},
        {id: 3, name: 'Сосна', img: 'https://stairsmontage.ru/images/kalc/mat3.jpg', price: 900},
        {id: 4, name: 'Дуб', img: 'https://stairsmontage.ru/images/kalc/mat4.jpg', price: 1100},
    ],

    allSum: 0,
    typeSum: 0,
    materialSum: 0,
    countStages: 0
};

const typesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TYPE:
            debugger
            return {
                ...state,
                typeSum: action.price
            }

        case UPDATE_MATERIAL:
            debugger
            return {
                ...state,
                materialSum: action.price
            };

        case UPDATE_COUNT_STAGES:
            return {
                ...state,
                countStages: action.newCount
            };

        default:
            return state;
    }
}

export const updateTypeAC = (price) => ({type: UPDATE_TYPE, price: price})
export const updateMaterialAC = (price) => ({type: UPDATE_MATERIAL, price: price})
export const updateCountStagesAC = (count) => ({type: UPDATE_COUNT_STAGES, newCount: count})

export default typesReducer;

