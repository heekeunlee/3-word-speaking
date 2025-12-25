export const chapters = [
    {
        id: 1,
        title: "1장. 나, 가족, 친구에 대해 말해 보자",
        description: "가장 가까운 사람들부터 3단어로 소개해요.",
        color: "bg-white",
        scenarios: [
            {
                id: "1-1",
                korInfo: "내 취미는 정원 가꾸기예요.",
                badSentence: "My hobby is gardening.",
                focus: "취미 (Hobby)",
                answer: {
                    subject: "I",
                    verb: "like",
                    object: "gardening"
                },
                options: {
                    subjects: ["My hobby", "I", "Gardening"],
                    verbs: ["is", "like", "am"],
                    objects: ["gardening", "garden", "it"]
                },
                explanation: "'취미'가 주어면 딱딱해요. '나(I)'를 주어로 하면 '좋아한다(like)'는 동사를 쓸 수 있죠!"
            },
            {
                id: "1-2",
                korInfo: "가족은 아내와 아들 둘입니다.",
                badSentence: "My family is four people.",
                focus: "가족 소개",
                answer: {
                    subject: "I",
                    verb: "have",
                    object: "a wife and two sons"
                },
                options: {
                    subjects: ["My family", "I", "There"],
                    verbs: ["is", "have", "consists"],
                    objects: ["four people", "a wife and two sons", "them"]
                },
                explanation: "'나는 ~를 가지고 있다'로 생각하면 쉬워요. 가족 관계도 have 동사 하나면 충분합니다."
            },
            {
                id: "1-3",
                korInfo: "아내의 취미는 온라인 쇼핑입니다.",
                badSentence: "My wife's hobby is online shopping.",
                focus: "다른 사람의 취미",
                answer: {
                    subject: "She",
                    verb: "loves",
                    object: "online shopping"
                },
                options: {
                    subjects: ["Her hobby", "She", "Shopping"],
                    verbs: ["is", "loves", "does"],
                    objects: ["online shopping", "internet", "buy"]
                },
                explanation: "3단어 법칙은 다른 사람에게도 적용돼요. '그녀는(She) 사랑한다(loves) 쇼핑을' 순서로 말해보세요."
            },
            {
                id: "1-4",
                korInfo: "나는 보통 아침을 안 먹어요.",
                badSentence: "I typically don't eat breakfast.",
                focus: "부정문 피하기",
                answer: {
                    subject: "I",
                    verb: "skip",
                    object: "breakfast"
                },
                options: {
                    subjects: ["I", "Breakfast", "My morning"],
                    verbs: ["don't eat", "skip", "no have"],
                    objects: ["breakfast", "meal", "food"]
                },
                explanation: "not을 쓰지 않고도 부정의 의미를 전할 수 있어요. 'skip(거르다)'이라는 긍정 동사를 써보세요."
            },
            {
                id: "1-5",
                korInfo: "아들은 고등학교에서 축구부 소속이에요.",
                badSentence: "My son is in the soccer team.",
                focus: "소속 표현",
                answer: {
                    subject: "He",
                    verb: "plays",
                    object: "soccer"
                },
                options: {
                    subjects: ["He", "My son", "The boy"],
                    verbs: ["is", "plays", "does"],
                    objects: ["soccer", "club", "sport"]
                },
                explanation: "어디에 '소속'되어 있다는 말은 결국 그 활동을 '한다'는 뜻이죠. play 동사로 간단하게!"
            },
            {
                id: "1-6",
                korInfo: "딸은 대학생입니다. 음악을 전공하고 있어요.",
                badSentence: "My daughter's major is music.",
                focus: "전공 표현",
                answer: {
                    subject: "She",
                    verb: "studies",
                    object: "music"
                },
                options: {
                    subjects: ["She", "My girl", "Major"],
                    verbs: ["is", "studies", "majors"],
                    objects: ["music", "college", "song"]
                },
                explanation: "전공한다는 말은 어렵게 생각하지 마세요. 학교에서 무엇을 '공부하는지' 말하면 됩니다."
            },
            {
                id: "1-7",
                korInfo: "나는 추리소설이 재미있다고 생각해요.",
                badSentence: "Mystery novels are fun to me.",
                focus: "생각/느낌",
                answer: {
                    subject: "I",
                    verb: "enjoy",
                    object: "mysteries"
                },
                options: {
                    subjects: ["I", "Mysteries", "Books"],
                    verbs: ["think", "enjoy", "are"],
                    objects: ["mysteries", "fun", "them"]
                },
                explanation: "~가 재미있다는 건 내가 그것을 '즐긴다(enjoy)'는 뜻이에요. 주어를 나(I)로 바꿔보세요."
            }
        ]
    },
    {
        id: 2,
        title: "2장. 동작과 상태를 묘사하자",
        description: "일상적인 행동을 심플한 동사로 표현해봐요.",
        color: "bg-sky-100",
        scenarios: []
    }
];
