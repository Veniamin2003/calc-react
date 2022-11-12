import React from 'react'

const UPDATE_TYPE = 'UPDATE_TYPE';
const UPDATE_MATERIAL = 'UPDATE_MATERIAL';
const UPDATE_WIDTH_STAGES = 'UPDATE_WIDTH_STAGES';
const UPDATE_HEIGHT_STAGES = 'UPDATE_HEIGHT_STAGES';
const COUNT_ALL_SUM = 'COUNT_ALL_SUM';
const UPDATE_ANDER_STAGE = 'UPDATE_ANDER_STAGE';
const UPDATE_PAINT_TYPE = 'UPDATE_PAINT_TYPE';

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

    anderStage: [
        { id: 1, name: 'Без подступенка', img: 'https://stairsmontage.ru/images/kalc/bez_podst.jpg', price: 0},
        { id: 2, name: 'С подступенком', img: 'https://stairsmontage.ru/images/kalc/s_podst.jpg', price: 500}
    ],

    paintType:
        {
            paintTypeItems:[
                {id: 1, name:'Без покрытия', img: 'https://stairsmontage.ru/images/kalc/pokraska1.jpg', price: 0 },
                {id: 2, name:'Под лаком', img: 'https://stairsmontage.ru/images/kalc/pokraska2.jpg', price: 200 },
                {id: 3, name:'C тонировкой', img: 'https://stairsmontage.ru/images/kalc/pokraska3.jpg', price: 400 },
            ],
            selectedPaintTypeId: 1,


        },

    stairsTypesParams : {
        selectedStairsTypesId: 1,
    },

    stairMaterialsParam: {
        selectedMaterialId: 1,

    },

    anderStagesParam: {
        anderStageTypeSum: 0,
        selectedAnderStageId: 1
    },



    paintTypeSum: 0,
    ppp: 0,
    allSum: 0,
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
                selectedStairsTypesId: action.selectedId
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

            if (a < 100 && a > 0)
            {
                debugger
                b = 300
            }
            else if (a > 100 && a < 200)
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
                allSum: (state.typeSum + state.materialSum + state.anderStageSum
                    + state.paintTypeSum + state.marchWidthSum ) * state.countStages
            };

        case UPDATE_ANDER_STAGE:
            debugger


            return {
                ...state,
                anderStageSum: action.price,
                selectedAnderStageId: action.selectedId
            };

        case UPDATE_PAINT_TYPE:
            debugger
            return {
                ...state,
                paintTypeSum: action.price,
                selectedPaintTypeId: action.selectedId
            };

        default:
            return state;
    }
}

export const updateTypeAC = (price, selectedId) => ({type: UPDATE_TYPE, price: price, selectedId: selectedId})
export const updateMaterialAC = (price, selectedId) => ({type: UPDATE_MATERIAL, price: price, selectedId: selectedId})
export const updateWidthStagesAC = (count) => ({type: UPDATE_WIDTH_STAGES, newCount: count})
export const updateHeightStagesAC = (count) => ({type: UPDATE_HEIGHT_STAGES, newCount: count})
export const countAllSumAC = () => ({type: COUNT_ALL_SUM})
export const updateAnderStageAC = (price, selectedId) => ({type: UPDATE_ANDER_STAGE, price: price, selectedId: selectedId})
export const updatePaintTypeAC = (price, selectedId) => ({type: UPDATE_PAINT_TYPE, price: price, selectedId: selectedId})


export default typesReducer;

