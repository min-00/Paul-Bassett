export const CommonOption = {
    IceHot: [
        { label: '핫', value: 'hot' },
        { label: '아이스', value: 'ice' },
    ],
    cupType: [
        { label: '매장', value: 'store' },
        { label: '일회용', value: 'disposable' },
        { label: '개인컵', value: 'personal' },
    ],
    packaging: [
        { label: '포장', value: 'packaging' },
        { label: '매장에서', value: 'inStore' }
    ],
    size: [
        { label: 'STANDARD', value: 'standard', price: 0 },
        { label: 'GRAND', value: 'grand', price: 1000 },
    ],
    extraShot: { price: 1000 },
    IceCreamtopping: [
        { label: '없음', value: '없음' },
        { label: '밀크', value: 'milk', price: 1500 },
        { label: '멜론', value: 'melon', price: 1500 },
        { label: '멜론밀크혼합', value: 'melonMilk', price: 1500 },
    ],
    milkType: [
        { label: '기본', value: '기본' },
        { label: '락토프리', value: 'lactoseFree' },
        { label: '저지방', value: 'lowFat' },
        { label: '오트', value: 'oat' },
    ],
    sugar: [
        { label: '보통', value: '기본' },
        { label: '더 달게', value: 'moreSweet' },
        { label: '덜 달게', value: 'lessSweet' },
    ],
    HotLevel: [
        { label: '보통', value: '기본' },
        { label: '뜨겁게', value: 'hotter' },
        { label: '덜 뜨겁게', value: 'lessHot' },
    ],
    waterAmount: [
        { label: '정량', value: '기본' },
        { label: '적게', value: 'less' }
    ],
    powder: [
        { label: '파우더 기본', value: '기본' },
        { label: '파우더 없이', value: '없음' }
    ],
    cream: [
        { label: '크림 정량', value: '기본' },
        { label: '크림 없이', value: '없음' }
    ],
};
