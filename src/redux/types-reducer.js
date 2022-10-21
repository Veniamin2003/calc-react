import React from 'react'

const UPDATE_TYPE = 'UPDATE_TYPE';
const UPDATE_MATERIAL = 'UPDATE_MATERIAL';
const UPDATE_WIDTH_STAGES = 'UPDATE_WIDTH_STAGES';
const UPDATE_HEIGHT_STAGES = 'UPDATE_HEIGHT_STAGES';
const COUNT_ALL_SUM = 'COUNT_ALL_SUM';

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

    stairsSize: {
        width: [
          {id: 1, name: 'Ширина марша', img: 'https://stairsmontage.ru/images/kalc/shirina.jpg'}
      ],
        height: [
            {id: 1, name: 'Высота марша', img: 'https://stairsmontage.ru/images/kalc/visota.jpg'}
        ]
    },
    stairMaterialsParam: {
        selectedMaterialId: 1
    },

    ppp: 0,
    allSum: 0,
    typeSum: 0,
    materialSum: 0,
    countStages: 0,
    stairsWidth: 0,
    stairsHeight: 0,
    marchWidthSum: 0
};

const typesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TYPE:
            debugger
            return {
                ...state,
                typeSum: action.price,
            }

        case UPDATE_MATERIAL:
            debugger
            return {
                ...state,
                materialSum: action.price,
                selectedMaterialId: action.selectedId
            };

        case UPDATE_WIDTH_STAGES:
            debugger
            let a = action.newCount
            let b = 0

            if (a < 1000 && a > 0)
            {
                debugger
                b = 300
            }
            else if (a > 1000 && a < 2000)
            {
                debugger
                b = 600
            }
            else {
                b = 2000
            }

            state.ppp = b

            return {
                ...state,
                stairsWidth: action.newCount,
                marchWidthSum: state.ppp
            };

        case UPDATE_HEIGHT_STAGES:
            debugger
            return {
                ...state,
                countStages: Math.round(action.newCount / 14)
            };

        case COUNT_ALL_SUM:
            debugger
            return {
                ...state,
                allSum: state.typeSum + state.materialSum
            };

        default:
            return state;
    }
}

export const updateTypeAC = (price) => ({type: UPDATE_TYPE, price: price})
export const updateMaterialAC = (price, selectedId) => ({type: UPDATE_MATERIAL, price: price, selectedId: selectedId})
export const updateWidthStagesAC = (count) => ({type: UPDATE_WIDTH_STAGES, newCount: count})
export const updateHeightStagesAC = (count) => ({type: UPDATE_HEIGHT_STAGES, newCount: count})
export const countAllSumAC = () => ({type: COUNT_ALL_SUM})


export default typesReducer;

