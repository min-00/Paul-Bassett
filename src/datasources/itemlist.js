export default {

    // 커피리스트 
    coffeeList : [
        {   
            "Id" : 101,
            "Title" : "아메리카노",
            "Info" : "폴 바셋 시그니처 블렌드로 추출한 에스프레소로 만든 부드럽고 깔끔한 가장 대중적인 커피 메뉴입니다.",
            "BasePrice" : "4700",
            "imgUrl" : {
                "hotImg" : require("@/assets/menuimage/커피/아메리카노.jpg"),
                "iceImg" : require("@/assets/menuimage/커피/아이스아메리카노.jpg")
            },
            "options": {
                "IceHot" : true,
                "cupType" : true, 
                "extraShot" : true,
                "waterAmount": true
            }
        },
        {   
            "Id" : 102,
            "Title" : "룽고",
            "Info" : "폴 바셋 만의 레시피로 추출한 스윗 디저트 스타일의 에스프레소로 만들어 시그니처 블렌드의 향과 풍미를 진하고 풍부하게 느낄 수 있는 폴 바셋 시그니처 메뉴입니다.",
            "BasePrice" : "4900",
            "imgUrl" : {
                "hotImg" : require("@/assets/menuimage/커피/룽고.jpg"),
                "iceImg" : require("@/assets/menuimage/커피/아이스룽고.jpg")
            },
            "options": {
                "IceHot" : true,
                "cupType" : true,
                "size": true, 
                "extraShot" : true,
                "waterAmount": true
            }
        }
        
    ],

    LetteList : [
        {   
            "Id" : 103,
            "Title" : "바닐라빈 카페라떼",
            "Info" : "마다가스카르 바닐라 빈이 첨가되어 더욱 풍부해진 바닐라 향으로 감미로워진 바닐라빈 카페라떼)",
            "BasePrice" : "6200",
            "imgUrl" : {
                "hotImg" : require("@/assets/menuimage/커피/바닐라빈카페라떼.png"),
                "iceImg" : require("@/assets/menuimage/커피/아이스바닐라빈카페라떼.png")
            },
            "options": {
                "IceHot" : true,
                "cupType" : true,
                "size": true, 
                "extraShot" : true,
                "milkType": true,
                "sugar": true
            }

        },
        {   
            "Id" : 104,
            "Title" : "카페라떼",
            "Info" : "전통적으로 조식에 잘 마셨던 것으로 알려진 카페라떼는 에스프레소와 우유의 절묘한 조화가 매력적인 커피입니다. 에스프레소 드링크 중에서도 특히 부드럽고 향긋한 맛을 자랑합니다",
            "BasePrice" : "5700",
            "imgUrl" : {
                "hotImg" : require("@/assets/menuimage/커피/카페라떼.jpg"),
                "iceImg" : require("@/assets/menuimage/커피/아이스카페라떼.jpg")
            },
            "options": {
                "IceHot" : true,
                "cupType" : true,
                "size": true, 
                "extraShot" : true,
                "milkType": true
            }
        },
        {   
            "Id" : 105,
            "Title" : "카페 모카",
            "Info" : "진한 발로나 초콜릿 베이스, 에스프레소에 실키한 크림이 더해져 완벽한 밸런스를 이루는 카페 모카입니다.",
            "BasePrice" : "6200",
            "imgUrl" : {
                "hotImg" : require("@/assets/menuimage/커피/카페모카.png"),
                "iceImg" : require("@/assets/menuimage/커피/아이스카페모카.png")
            },
            "options": {
                "IceHot" : true,
                "cupType" : true,
                "size": true, 
                "extraShot" : true,
                "milkType": true,
                "powder" : true,
                "cream" : true 
            }
        },
        {   
            "Id" : 106,
            "Title" : "카페 오트",
            "Info" : "귀리를 통째로 갈아내어 만든 어메이징 오트로 만든 커피 음료",
            "BasePrice" : "5700",
            "imgUrl" : {
                "hotImg" : require("@/assets/menuimage/커피/카페라떼.jpg"),
                "iceImg" : require("@/assets/menuimage/커피/아이스카페라떼.jpg")
            },
            "options": {
                "IceHot" : true,
                "cupType" : true,
                "size": true, 
                "extraShot" : true,
                "milkType": true,
                "HotLevel" : true
            }
        }
    ],
    EspressoList : [
        {   
            "Id" : 107,
            "Title" : "에스프레소",
            "Info" : "전 세계 커피 생산량 중 7%정도 뿐인 스페셜티 원두 만으로 추출한 에스프레소 입니다. 향긋, 달콤하고 묵직하지만 쓰지 않은 새로운 에스프레소를 즐겨보세요. 기본 2샷 60ml (크레마 제외 34g) 제공됩니다.",
            "BasePrice" : "4400",
            "imgUrl" : require("@/assets/menuimage/커피/에스프레소.jpg"),
            "options": {
                "cupType" : true
            }
        },
        {   
            "Id" : 108,
            "Title" : "에스프레소 마키아토",
            "Info" : "에스프레소에 소량의 우유 거품을 더해 부드러우면서 진한 커피의 조화로운 맛을 느낄 수 있습니다.",
            "BasePrice" : "4400",
            "imgUrl" : require("@/assets/menuimage/커피/에스프레소마키아토.jpg"),
            "options": {
                "cupType" : true,
                "milkType": true
            }
        },
        {   
            "Id" : 109,
            "Title" : "초콜릿 에스프레소 콘 파나",
            "Info" : "프랑스 3대 초콜릿 발로나 초콜릿 파우더 풍미가 느껴지는 에스프레소 콘 파나",
            "BasePrice" : "4900",
            "imgUrl" : require("@/assets/menuimage/커피/초콜릿에스프레소콘파나.png"),
            "options": {
                "cupType" : true
            }
        }
    ],
    
    //  음료 리스트 
    FrappeList : [
        {   
            "Id" : 110,
            "Title" : "커피칩 라떼 프라페",
            "Info" : "폴 바셋 시그니처 블렌드를 사용한 에스프레소와 원두가 그대로 들어가 블렌딩된 커피의 풍미를 듬뿍 경험할 수 있는 커피 프라페",
            "BasePrice" : "6500",
            "imgUrl" : require("@/assets/menuimage/음료/커피칩라떼프라페.png"),
            "options": {
                "cupType" : true,
                "extraShot" : true,
                "IceCreamtopping" : true
            }
        },
        {   
            "Id" : 111,
            "Title" : "더블 초콜릿 프라페",
            "Info" : "진한 초콜릿 맛을 우유의 풍미와 함께 부드럽고 시원하게 즐길 수 있는 초콜릿 프라페",
            "BasePrice" : "6800",
            "imgUrl" : require("@/assets/menuimage/음료/더블초콜릿프라페.png"),
            "options": {
                "cupType" : true,
                "extraShot" : true,
                "IceCreamtopping" : true
            }
        },
        {   
            "Id" : 112,
            "Title" : "제주 말차 라떼 프라페",
            "Info" : "100% 유기농 제주 말차가 사용된 말차 소스의 달콤하고 쌉싸름한 맛을 시원하게 즐길 수 있는 티라떼 프라페",
            "BasePrice" : "6800",
            "imgUrl" : require("@/assets/menuimage/음료/제주말차라떼프라페.png"),
            "options": {
                "cupType" : true,
                "extraShot" : true,
                "IceCreamtopping" : true
            }
        },
        {   
            "Id" : 113,
            "Title" : "카라멜 마키아토 프라페",
            "Info" : "얼음과 함께 카라멜 마키아토에 사용되는 원료를 그대로 블렌딩하여 시원하고 달콤하게 즐길 수 있는 커피 프라페",
            "BasePrice" : "6800",
            "imgUrl" : require("@/assets/menuimage/음료/카라멜마키아토프라페.png"),
            "options": {
                "cupType" : true,
                "extraShot" : true,
                "IceCreamtopping" : true
            }
        },
        {   
            "Id" : 114,
            "Title" : "머스크 멜론 쉐이크",
            "Info" : "달콤한 멜론 과육이 들어있는 베이스와 멜론 아이스크림이 블렌딩되어 풍부한 멜론의 풍미를 부드럽게 즐길 수 있는 쉐이크 타입의 음료",
            "BasePrice" : "7200",
            "imgUrl" : require("@/assets/menuimage/음료/머스크멜론쉐이크.png"),
            "options": {
                "cupType" : true,
                "IceCreamtopping" : true
            }
        },
    ],
    AdeList : [
        {   
            "Id" : 115,
            "Title" : "납작 복숭아 에이드",
            "Info" : "복숭아과육이 씹히는 달콤한 납작복숭아 에이드",
            "BasePrice" : "6800",
            "imgUrl" : require("@/assets/menuimage/음료/납작복숭아에이드.png"),
            "options": {
                "cupType" : true,
                "sugar" : true
            }
        },
        {   
            "Id" : 116,
            "Title" : "생 토마토 주스",
            "Info" : "신선한 국내산 토마토를 통째로 갈아서 만든 주스입니다.",
            "BasePrice" : "6500",
            "imgUrl" : require("@/assets/menuimage/음료/토마토주스.png"),
            "options": {
                "cupType" : true,
                "sugar" : true
            }
        },
        {   
            "Id" : 117,
            "Title" : "고창 수박주스",
            "Info" : "당도 선별한 수박만으로 만들어 생과일 본연의 맛이 느껴지는 시원한 고창 수박 주스 입니다",
            "BasePrice" : "6800",
            "imgUrl" : require("@/assets/menuimage/음료/고창수박주스.png"),
            "options": {
                "cupType" : true,
                "sugar" : true
            }
        },
        {   
            "Id" : 118,
            "Title" : "쿨 라임 알로에 에이드",
            "Info" : "청량하고 상큼한 라임과 알로에의 톡톡 터지는 식감이 잘 어우러져 여름과 잘 어울리는 에이드",
            "BasePrice" : "6900",
            "imgUrl" : require("@/assets/menuimage/음료/쿨라임알로에에이드.png"),
            "options": {    
                "cupType" : true,
                "sugar" : true
            }
        },
    ],
    yogurtList : [
        {   
            "Id" : 119,
            "Title" : "딸기 바나나 요거트",
            "Info" : "신선한 요거트에 상큼 달콤한 딸기 베이스와 생바나나가 들어간 음료 입니다. (복합 유산균이 1,000억 이상 함유 된 매일 바이오 요거트 사용)",
            "BasePrice" : "6600",
            "imgUrl" : require("@/assets/menuimage/음료/딸기바나나요거트.png"),
            "options": {
                "cupType" : true,
                "sugar" : true
            }
        },
        {   
            "Id" : 120,
            "Title" : "복숭아 바나나 요거트",
            "Info" : "신선한 요거트에 달콤한 복숭아 베이스와 생바나나가 들어간 음료입니다. (복합 유산균이 1,000억 이상 함유 된 메일 바이오 요거트 사용 )",
            "BasePrice" : "6600",
            "imgUrl" : require("@/assets/menuimage/음료/복숭아바나나요거트.png"),
            "options": {
                "cupType" : true,
                "sugar" : true
            }
        },
        {   
            "Id" : 121,
            "Title" : "블루베리 바나나 요거트",
            "Info" : "신선한 요거트에 달콤한 블루베리 베이스와 생바나나가 들어간 음료입니다. (복합 유산균이 1,000억 이상 함유 된 매일 바이오 요거트 사용 )",
            "BasePrice" : "6600",
            "imgUrl" : require("@/assets/menuimage/음료/블루베리바나나요거트.png"),
            "options": {
                "cupType" : true,
                "sugar" : true
            }
        },
        
        ],

ChocolateList: [
        {   
            "Id" : 122,
            "Title" : "밀크 초콜릿",
            "Info" : "프랑스 3대 초콜릿인 발로나의 고급 코코아와 청정한 상하목장 원유로 만든 라떼입니다.",
            "BasePrice" : "6000",
            "imgUrl" : 
            {
                "hotImg" : require("@/assets/menuimage/음료/밀크초콜릿.png"),
                "iceImg" : require("@/assets/menuimage/음료/아이스밀크초콜릿.png")
            },
            "options": {
                "IceHot" : true,
                "cupType" : true,
                "size": true, 
                "extraShot" : true,
                "HotLevel" : true,
                "sugar" : true
            }
        },

        {   
            "Id" : 123,
            "Title" : "다크 초콜릿",
            "Info" : "발로나 초콜릿의 고급 코코아 함량이 높은 진한 초콜릿 라떼입니다.",
            "BasePrice" : "6000",
            "imgUrl" : {
                "hotImg" : require("@/assets/menuimage/음료/다크초콜릿.png"),
                "iceImg" : require("@/assets/menuimage/음료/아이스다크초콜릿.png"),
            },
            "options": {
                "IceHot" : true,
                "cupType" : true,
                "size": true, 
                "extraShot" : true,
                "HotLevel" : true,
                "sugar" : true
            }
            
        },
    ],
TeaList : [
        {   
            "Id" : 124,
            "Title" : "샤인 다즐링 홍차",
            "Info" : "청포도 향이 특징으로 홍차계의 샴페인으로 불리는 차입니다.(세계 3대 홍차)",
            "BasePrice" : "5500",
            "imgUrl" : {
                "hotImg" : require("@/assets/menuimage/음료/샤인다즐링홍차.jpg"),
                "iceImg" : require("@/assets/menuimage/음료/아이스샤인다즐링홍차.png")
            },
            "options": {
                "IceHot" : true,
                "cupType" : true,
            }
        },
        {   
            "Id" : 125,
            "Title" : "멜로우 우바 홍차",
            "Info" : "장미향이 특징인 스리랑카 대표 홍차입니다.(세계 3대 홍차)",
            "BasePrice" : "5500",
            "imgUrl" : {
                "hotImg" : require("@/assets/menuimage/음료/멜로우우바홍차.png"),
                "iceImg" : require("@/assets/menuimage/음료/아이스멜로우우바홍차.png")
            },
            "options": {
                "IceHot" : true,
                "cupType" : true,
            }
        },
        {   
            "Id" : 126,
            "Title" : "로얄 캐모마일 허브차",
            "Info" : "밤 시간과 취침 전 마시기 좋은 허브차 입니다. (Caffeine Free)",
            "BasePrice" : "5500",
            "imgUrl" : {
                "hotImg" : require("@/assets/menuimage/음료/로얄캐모마일허브차.png"),
                "iceImg" : require("@/assets/menuimage/음료/아이스로얄캐모마일허브차.png")
            },
            "options": {
                "IceHot" : true,
                "cupType" : true,
            }
        },

],
// food list 
bakeryList : [
{   
            "Id" : 127,
            "Title" : "얼그레이 휘낭시에",
            "Info" : "프랑스 전통 방식으로 만든 얼그레이의 풍미가 깊은 얼그레이 휘낭시에",
            "BasePrice" : "3300",
            "imgUrl" : require("@/assets/menuimage/빵/얼그레이휘낭시에.jpg"),
            "options": {
                "packaging" : true
            }
        },
        {   
            "Id" : 128,
            "Title" : "오리지널 휘낭시에",
            "Info" : "프랑스 전통 방식으로 만든 버터 풍미가 깊은 오리지널 휘낭시에",
            "BasePrice" : "3300",
            "imgUrl" : require("@/assets/menuimage/빵/오리지널휘낭시에.jpg"),
            "options": {
                "packaging" : true
            }
        },
        {   
            "Id" : 129,
            "Title" : "피칸파이",
            "Info" : "달콤한 필링 위에 고소한 피칸과 호두를 가득 담은 파이",
            "BasePrice" : "7000",
            "imgUrl" : require("@/assets/menuimage/빵/피칸파이.png"),
            "options": {
                "packaging" : true
            }
        }
],
SandwichList : [
{   
            "Id" : 130,
            "Title" : "에그 샐러드 샌드위치",
            "Info" : "부드럽고 촉촉한 탕종식빵에 폴바셋의 레시피로 만든 에그샐러드가 듬뿍 들어간 든든 샌드위치",
            "BasePrice" : "5900",
            "imgUrl" : require("@/assets/menuimage/빵/에그샐러드샌드위치.png"),
            "options": {
                "packaging" : true
            }
        },
        {   
            "Id" : 131,
            "Title" : "햄 에그 잉글리시 머핀",
            "Info" : "담백하고 쫄깃한 햄에 부드러운 마요네즈 소스가 어우러진 풍미 가득한 잉글리시머핀",
            "BasePrice" : "5900",
            "imgUrl" : require("@/assets/menuimage/빵/햄에그잉글리시머핀.png"),
            "options": {
                "packaging" : true
            }
        },
        {   
            "Id" : 132,
            "Title" : "베이컨 에그 잉글리시 머핀",
            "Info" : "바삭한 베이컨에 부드러운 마요네즈 소스가 어우러진 풍미 가득한 잉글리시머핀",
            "BasePrice" : "5900",
            "imgUrl" : require("@/assets/menuimage/빵/베이컨에그잉글리시머핀.png"),
            "options": {
                "packaging" : true
            }
        },
    ],

    CakeList : [
        {   
            "Id" : 133,
            "Title" : "딸기 생크림 케이크 조각",
            "Info" : "마스카포네 생크림과 딸기 콤포드가 샌드 된 딸기 생크림 케이크",
            "BasePrice" : "7500",
            "imgUrl" : require("@/assets/menuimage/빵/딸기생크림케이크.png"),
            "options": {
                "packaging" : true
            }
        },
        {   
            "Id" : 134,
            "Title" : "생크림 소프트 케이크",
            "Info" : "촉촉한 카스텔라 속 부드러운 우유 생크림을 가득 담은 미니 케이크",
            "BasePrice" : "7000",
            "imgUrl" : require("@/assets/menuimage/빵/생크림소프트케이크.jpg"),
            "options": {
                "packaging" : true
            }
        },
        {   
            "Id" : 135,
            "Title" : "티라미수",
            "Info" : "폴 바셋 커피 추출액을 사용하여 커피의 깊은 풍미를 지닌 시그니처 티라미수",
            "BasePrice" : "7000",
            "imgUrl" : require("@/assets/menuimage/빵/티라미수.png"),
            "options": {
                "packaging" : true
            }
        },
    ], 
        NataList : [
        {   
            "Id" : 136,
            "Title" : "나타 오리지널",
            "Info" : "바삭한 패스츄리 속에 달콤한 커스터드 크림이 듬뿍 들어간 포르투갈 에그타르트",
            "BasePrice" : "2800",
            "imgUrl" : require("@/assets/menuimage/빵/나타오리지널.png"),
            "options": {
                "packaging" : true
            }
        },
        {   
            "Id" : 137,
            "Title" : "나타 애플",
            "Info" : "상큼한 사과 필링과 부드러운 커스터드 크림이 어우러진 포르투갈 에그타르트",
            "BasePrice" : "2800",
            "imgUrl" : require("@/assets/menuimage/빵/나타애플.png"),
            "options": {
                "packaging" : true
            }
        },
        {   
            "Id" : 138,
            "Title" : "나타 초콜릿",
            "Info" : "달콤한 초콜릿 필링과 부드러운 커스터드 크림이 어우러진 포르투갈 에그타르트",
            "BasePrice" : "2800",
            "imgUrl" : require("@/assets/menuimage/빵/나타초콜릿.png"),
            "options": {
                "packaging" : true
            }
        }
    ],
        // 아이스크림 
        MilkList : [
        {   
            "Id" : 139,
            "Title" : "밀크 아이스크림 컵",
            "Info" : "우유 본연의 담백하고 산뜻한 맛을 담은 상하목장 밀크 아이스크림입니다.",
            "BasePrice" : "4000",
            "imgUrl" : require("@/assets/menuimage/아이스크림/밀크아이스크림컵.jpg")
        },
        {   
            "Id" : 140,
            "Title" : "밀크 아이스크림 콘",
            "Info" : "우유 본연의 담백하고 산뜻한 맛을 담은 상하목장 밀크 아이스크림입니다.",
            "BasePrice" : "4000",
            "imgUrl" : require("@/assets/menuimage/아이스크림/밀크아이스크림콘.jpg")
        },
        {   
            "Id" : 141,
            "Title" : "아포가토",
            "Info" : "밀크 아이스크림과 에스프레소의 달콤한 만남으로 진하고 부드럽게 즐길 수 있는 아이스크림 디저트입니다.",
            "BasePrice" : "5000",
            "imgUrl" : require("@/assets/menuimage/아이스크림/아포가토.jpg"),
            "options": {
                "cupType" : true,
                "extraShot" : true,
                "IceCreamtopping" : true
            }
        } 
    ], 
        // 상품 리스트 
        BaristaProductList: [
        {   
            "Id" : 142,
            "Title" : "시그니처 블렌드",
            "Info" : "언제 어디서나 폴바셋 대표 원두의 스페셜티 커피의 맛과 향을 쉽게 즐길 수 있습니다.",
            "BasePrice" : "9900",
            "imgUrl" : require("@/assets/menuimage/프로덕트/시그니처블렌드.jpg"),
        },
        {   
            "Id" : 143,
            "Title" : "에티오피아 구지 G1",
            "Info" : "언제 어디서나 베리류의 상큼한 산미가 나는 스페셜티 커피의 맛과 향을 쉽게 즐길 수 있습니다.",
            "BasePrice" : "9900",
            "imgUrl" : require("@/assets/menuimage/프로덕트/에티오피아구지G1.jpg"),
        },
        {   
            "Id" : 144,
            "Title" : "네스프레소 호환 캡슐",
            "Info" : "카라멜의 향과 꿀같은 달콤함, 카카오같은 쌉싸름한 끝 맛이 특징인 캡슐 커피 (네스프레소 머신과 호환 가능)",
            "BasePrice" : "9900",
            "imgUrl" : require("@/assets/menuimage/프로덕트/네스프레소호환캡슐브라질.png"),
        },
        {   
            "Id" : 145,
            "Title" : "과테말라 200G",
            "Info" : "산 페드로 넥타는 과테말라 전체에서 가장 인기 있는 소규모 지역 중 하나입니다. 밝은 산미와 우아한 꽃향을 가진 커피이며 최고의 생두를 선별하기 위해 최소 3번의 커핑을 통해 엄선합니다",
            "BasePrice" : "9900",
            "imgUrl" : require("@/assets/menuimage/프로덕트/과테말라200g.jpg"),
        }
    ], 
        ProductList : [
        {   
            "Id" : 146,
            "Title" : "미르 데일리 컵 텀블러(16oz)",
            "Info" : "종이컵을 활용한 쉐입의 스테인레스 텀블러 (개폐 가능한 리드 포함)",
            "BasePrice" : "39000",
            "imgUrl" : require("@/assets/menuimage/프로덕트/미르데일리컵텀블러.png"),
        }
    ]

}