const schools = [
    {
        id: 1,
        number: 1,
        municipality: "Берово",
        schoolName: "ООУ „Дедо Иљо Малешевски“",
        address: "ул. Маршал Тито, бр. 66",
        email: "dedo.iljo.malesevski@gmail.com"
    },
    {
        id: 2,
        number: 2,
        municipality: "Берово",
        schoolName: "OОУ „Никола Петров Русински“ с.Русиново",
        address: "ул. Борис Кидрич, бр.1, с. Русиново",
        email: "rusinski_rusinovo@yahoo.com"
    },
    {
        id: 3,
        number: 3,
        municipality: "Пехчево",
        schoolName: "OОУ „Ванчо Китанов“",
        address: "ул. Дамјан Груев бр.1",
        email: "vanco.kitanov@yahoo.com"
    },
    {
        id: 4,
        number: 4,
        municipality: "Битола",
        schoolName: "OОУ „Александар Турунџиев“ с.Кукуречани",
        address: "с.Кукуречани",
        email: "aturundzev@yahoo.com"
    },
    {
        id: 5,
        number: 5,
        municipality: "Битола",
        schoolName: "OОУ „Даме Груев“",
        address: "ул. Ѓорче Петров, бр7",
        email: "oudamegruev@yahoo.com"
    },
    {
        id: 6,
        number: 6,
        municipality: "Битола",
        schoolName: "OОУ „Елпида Караманди“",
        address: "ул. Васко Карангелески, бб",
        email: "ouekbt@gmail.com"
    },
    {
        id: 7,
        number: 7,
        municipality: "Битола",
        schoolName: "OОУ „Гоце Делчев“",
        address: "ул. Виенска, бр.13",
        email: "ou_gocedelcev_bt@hotmail.com, gocedelcevbt@gmail.com"
    },
    {
        id: 8,
        number: 8,
        municipality: "Битола",
        schoolName: "OОУ „Ѓорѓи Сугарев“",
        address: "ул. Димитар Влахов, бр.32",
        email: "gorgi_sugarev@yahoo.com"
    },
    {
        id: 9,
        number: 9,
        municipality: "Битола",
        schoolName: "OОУ „Св.Кирил и Методиј“",
        address: "бул. 1-ви мај, бр.274",
        email: "sv.kim.bitola@gmail.com"
    },
    {
        id: 10,
        number: 10,
        municipality: "Битола",
        schoolName: "OОУ „Св.Климент Охридски“",
        address: "ул. Димче Лахчански, бб",
        email: "ouklimentbt@yahoo.com"
    },
    {
        id: 11,
        number: 11,
        municipality: "Битола",
        schoolName: "OОУ „Коле Канински“",
        address: "ул. Бранко Радичевиќ, бр.57",
        email: "kolekaninski_bt@t-home.mk, ou.kolekaninski@gmail.com"
    },
    {
        id: 12,
        number: 12,
        municipality: "Битола",
        schoolName: "OОУ „Крсте Петков Мисирков“",
        address: "с. Бистрица,",
        email: "ou.krstemisirkov@yahoo.com"
    },
    {
        id: 13,
        number: 13,
        municipality: "Битола",
        schoolName: "OОУ „Стив Наумов“",
        address: "ул. Стив Наумов, бр.93",
        email: "stivnaumov@gmail.com"
    },
    {
        id: 14,
        number: 14,
        municipality: "Битола",
        schoolName: "OОУ „Тодор Ангелевски“",
        address: "ул. Илинденска, бр. 82",
        email: "todorangelevski@hotmail.com"
    },
    {
        id: 15,
        number: 15,
        municipality: "Битола",
        schoolName: "OОУ „Д-р Трифун Пановски“ Битола",
        address: "ул. Охридска, бр. 50",
        email: "trifunpanovski@yahoo.com"
    },
    {
        id: 16,
        number: 16,
        municipality: "Битола",
        schoolName: "Државно основно музичко училиште",
        address: "бул. 1-ви мај, бр. 110",
        email: "muzickouciliste@yahoo.com"
    },
    {
        id: 17,
        number: 17,
        municipality: "Битола",
        schoolName: "Завод за рехабилитација на деца со оштетен слух, говор и глас и други проблеми во развојот „Кочо Рацин”",
        address: "ул. Прилепска, бб",
        email: "uspeshnarehabilitacija@yahoo.com"
    },
    {
        id: 18,
        number: 18,
        municipality: "Могила",
        schoolName: "ООУ „Браќа Миладиновци“ с.Добрушево",
        address: "с.Добрушево",
        email: "ou.b.miladinovci@gmail.com"
    },
    {
        id: 19,
        number: 19,
        municipality: "Могила",
        schoolName: "ООУ „Кочо Рацин“ с.Ивањевци",
        address: "с. Ивањевци",
        email: "kracin.iv@gmail.com"
    },
    {
        id: 20,
        number: 20,
        municipality: "Могила",
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Димче Могилч, бр.93 с. Могила",
        email: "ucilistegocedelcev@yahoo.com"
    },
    {
        id: 21,
        number: 21,
        municipality: "Новаци",
        schoolName: "ООУ „Славко Лумбарковски“",
        address: "с.Новаци",
        email: "slnovaci@gmail.com"
    },
    {
        id: 22,
        number: 22,
        municipality: "Македонски Брод",
        schoolName: "ООУ „Св.Климент Охридски“",
        address: "ул. Партизанска, бр.33",
        email: "oukliment@yahoo.com"
    },
    {
        id: 23,
        number: 23,
        municipality: "Пласница",
        schoolName: "ООУ„Мустафа Кемал Ататурк“",
        address: "с.Пласница",
        email: "mustafakemal.ataturk@yahoo.com"
    },
    {
        id: 24,
        number: 24,
        municipality: "Пласница",
        schoolName: "ООУ „Јунус Емре“ с.Лисичани",
        address: "с.Лисичани",
        email: "s_lisicani@yahoo.com"
    },
    {
        id: 25,
        number: 25,
        municipality: "Валандово",
        schoolName: "ООУ „Јосип Броз Тито“",
        address: "ул. 6- ти Ноември, бб",
        email: "ou_valandovo@yahoo.com"
    },
    {
        id: 26,
        number: 26,
        municipality: "Валандово",
        schoolName: "ООУ „Страшо Пинџур“ с.Јосифово",
        address: "ул. Страшо Пинџур, бб    с.Јосифово",
        email: "oustrasopindzur@yahoo.com"
    },
    {
        id: 27,
        number: 27,
        municipality: "Виница",
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Љупчо Сантов, бр.36",
        email: "gocedelcevvin@yahoo.com"
    },
    {
        id: 28,
        number: 28,
        municipality: "Виница",
        schoolName: "ООУ „Кочо Рацин“ с.Блатец",
        address: "с.Блатец",
        email: "kocoracin_blatec@yahoo.com"
    },
    {
        id: 29,
        number: 29,
        municipality: "Виница",
        schoolName: "ООУ „Никола Парапунов“ с.Драгобраште",
        address: "Населено место без уличен систем бр.16 Драгобраште",
        email: "p-nikola@t.mk"
    },
    {
        id: 30,
        number: 30,
        municipality: "Виница",
        schoolName: "ООУ „Славчо Стојменски“",
        address: "ул. Бел Камен, бр. 7",
        email: "slavco.stojmenski@t.mk"
    },
    {
        id: 31,
        number: 31,
        municipality: "Гевгелија",
        schoolName: "ООУ „Св.Климент Охридски“ с.Миравци",
        address: "ул. Гоце  Делчев, бр.35",
        email: "oumiravciepiskop@yahoo.com"
    },
    {
        id: 32,
        number: 32,
        municipality: "Гевгелија",
        schoolName: "ООУ „Крсте Мисирков“",
        address: "ул. Петар Мусев, бр.22",
        email: "ou_krstemisirkov@yahoo.com"
    },
    {
        id: 33,
        number: 33,
        municipality: "Гевгелија",
        schoolName: "ООУ „Ристо Шуклев“ с.Негорци",
        address: "ул. Маршал Тито, бр. 22б  с.Негорци",
        email: "ouristosuklev@gmail.com"
    },
    {
        id: 34,
        number: 34,
        municipality: "Гевгелија",
        schoolName: "ООУ „Владо Кантарџиев“",
        address: "ул. Љубљанска, бр.4",
        email: "vlado_kantardziev@yahoo.com"
    },
    {
        id: 35,
        number: 35,
        municipality: "Гевгелија",
        schoolName: "ООМУ „Васо Карајанов“",
        address: "ул. Ристо Фаршинин,бр 41",
        email: "vasokarajanov@yahoo.com"
    },
    {
        id: 36,
        number: 36,
        municipality: "Богданци",
        schoolName: "ООУ „Кирил и Методиј“ с.Стојаково",
        address: "ул. Маршал Тито, бр. 60 с.Стојаково",
        email: "kirilimetodij@yahoo.com"
    },
    {
        id: 37,
        number: 37,
        municipality: "Богданци",
        schoolName: "ООУ „Петар Мусев“",
        address: "ул. Крушевска, бр. 64",
        email: "petarmusev@yahoo.com"
    },
    {
        id: 38,
        number: 38,
        municipality: "Дојран",
        schoolName: "ООУ „Кочо Рацин“ Нов Дојран",
        address: "ул. Моша Пијаде, бр.14",
        email: "kracin_dojran@yahoo.com"
    },
    {
        id: 39,
        number: 39,
        municipality: "Гостивар",
        schoolName: "ООУ „Ѓон Бузуку“ с.Србиново",
        address: "с.Србиново",
        email: "gjon_buzuku96@hotmail.com"
    },
    {
        id: 40,
        number: 40,
        municipality: "Гостивар",
        schoolName: "ООУ „Чајле“ с.Чајле",
        address: "с.Чајле",
        email: "infocajla@gmail.com"
    },
    {
        id: 41,
        number: 41,
        municipality: "Гостивар",
        schoolName: "ООУ „Башкими -Единство“",
        address: "ул. Панче Попоски, бр 35",
        email: "bashkimi-edinstvo@live.com"
    },
    {
        id: 42,
        number: 42,
        municipality: "Гостивар",
        schoolName: "ООУ „Фаик Коница“ с.Дебреше",
        address: "ул. 100, бб \nс.Дебреше",
        email: "faikkonica@hotmail.com"
    },
    {
        id: 43,
        number: 43,
        municipality: "Гостивар",
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Браќа Блажески, бр. 6",
        email: "goce.delcev.gv@gmail.com"
    },
    {
        id: 44,
        number: 44,
        municipality: "Гостивар",
        schoolName: "ООУ „Исмаил Ќемали“",
        address: "ул. Ленинградска, бб",
        email: "ismailqemali_gv@yahoo.com"
    },
    {
        id: 45,
        number: 45,
        municipality: "Гостивар",
        schoolName: "ООУ „Мустафа Кемал Ататурк“",
        address: "ул. Павле Аврамоски, бр. 52",
        email: "kemalataturk92@yahoo.com"
    },
    {
        id: 46,
        number: 46,
        municipality: "Гостивар",
        schoolName: "ООУ „Прпарими“ с.Чегране",
        address: "с.Чегране",
        email: "perparimicgr@gmail.com"
    },
    {
        id: 47,
        number: 47,
        municipality: "Гостивар",
        schoolName: "ОOУ „Форино“ с.Форино",
        address: "с.Форино",
        email: "forinaskl@gmail.com"
    },
    {
        id: 48,
        number: 48,
        municipality: "Гостивар",
        schoolName: "ООУ „Лирија“ с.Вруток",
        address: "с.Вруток",
        email: "liria.vrutok@yahoo.com"
    },
    {
        id: 49,
        number: 49,
        municipality: "Гостивар",
        schoolName: "ООМУ „Енвер Стафаи“",
        address: "ул. ЈНА, бр. 371",
        email: "shfm.enverstafai@gmail.com"
    },
    {
        id: 50,
        number: 50,
        municipality: "Маврово и Ростуше",
        schoolName: "OОУ „Ѓорѓи Пулески“ с.Ростуше",
        address: "с.Ростуше",
        email: "gpulevski@gmail.com"
    },
    {
        id: 51,
        number: 51,
        municipality: "Маврово и Ростуше",
        schoolName: "ООУ „Блаже Конески“ с.Скидриње",
        address: "с. Скудриње",
        email: "ahmedoski_a@yahoo.com"
    },
    {
        id: 52,
        number: 52,
        municipality: "Маврово и Ростуше",
        schoolName: "ОOУ „Денче Дејаноски“ с.Маврови Анови",
        address: "с.Маврови Анови",
        email: "dencedejanoski@yahoo.com"
    },
    {
        id: 53,
        number: 53,
        municipality: "Маврово и Ростуше",
        schoolName: "ООУ „Маршал Тито“ с.Жеровница",
        address: "с. Жировница",
        email: "o.u.zirovnica@gmail.com"
    },
    {
        id: 54,
        number: 54,
        municipality: "Врапчиште",
        schoolName: "ООУ „Врапчише“ с.Врапчиште",
        address: "с.Врапчиште",
        email: "cedefiliposki@yahoo.com"
    },
    {
        id: 55,
        number: 55,
        municipality: "Врапчиште",
        schoolName: "ООУ  „Мехмет Дерала“                                                                                                                                                                                                                                              с. Градец",
        address: "ул. 101, бб  с.Градец",
        email: "mderalla@yahoo.com"
    },
    {
        id: 56,
        number: 56,
        municipality: "Врапчиште",
        schoolName: "ОOУ „Сали Лиси“           с.Добридол",
        address: "ул. 101, бб с.Добридол",
        email: "sali.lisi@hotmail.com"
    },
    {
        id: 57,
        number: 57,
        municipality: "Врапчиште",
        schoolName: "ООУ „Наим Фрашери“ с.Неготино",
        address: "с.Неготино",
        email: "naim_frasheri@mail.net.mk"
    },
    {
        id: 58,
        number: 58,
        municipality: "Дебар",
        schoolName: "ООУ „Братство Единство“",
        address: "ул. Велко Влаховиќ, бр.16",
        email: "shfk.bv.diber@gmail.com"
    },
    {
        id: 59,
        number: 59,
        municipality: "Дебар",
        schoolName: "ООУ „Ристе Ристевски“ с.Долно Костоврасти",
        address: "с.Долно Косоврасти",
        email: "ou_riste_risteski@yahoo.com"
    },
    {
        id: 60,
        number: 60,
        municipality: "Дебар",
        schoolName: "ООУ „Саид Најдени“",
        address: "ул. Ице Ристевски, бб",
        email: "saidnajdeni@yahoo.com"
    },
    {
        id: 61,
        number: 61,
        municipality: "Центар Жупа",
        schoolName: "ООУ „Мустафа Кемал Ататурк“",
        address: "с.Центар Жупа",
        email: "ouataturk@yahoo.com"
    },
    {
        id: 62,
        number: 62,
        municipality: "Центар Жупа",
        schoolName: "ООУ „Неџати Зекирија“ с.Коџаџик",
        address: "с. Коџаџик",
        email: "necatizekeriya@hotmail.com"
    },
    {
        id: 63,
        number: 63,
        municipality: "Делчево",
        schoolName: "ООУ „Св.Климент Охридски“",
        address: "ул. Методи Митевски Брицо, бб",
        email: "svklohridskidelcevo@yahoo.com"
    },
    {
        id: 64,
        number: 64,
        municipality: "Делчево",
        schoolName: "OОУ „Ванчо Прке“",
        address: "ул. Никола Јонков Вапцаро, бб",
        email: "ouvancoprkedelcevo@yahoo.com"
    },
    {
        id: 65,
        number: 65,
        municipality: "Maкедонска Kaменица",
        schoolName: "ОOУ „Св.Кирил и Методиј“",
        address: "ул. Маршал Тито, бр. 2",
        email: "osnovno_mkamenica@yahoo.com"
    },
    {
        id: 66,
        number: 66,
        municipality: "Демир Хисар",
        schoolName: "ООУ „Браќа Миладиновци“ с.Жван",
        address: "с.Жван",
        email: "brakamiladinovcizvan@yahoo.com"
    },
    {
        id: 67,
        number: 67,
        municipality: "Демир Хисар",
        schoolName: "ОOУ „Даме Груев“ с Смилево",
        address: "с.Смилево",
        email: "dameg@ymail.com"
    },
    {
        id: 68,
        number: 68,
        municipality: "Демир Хисар",
        schoolName: "ОOУ „Гоце Делчев“",
        address: "ул. Битолска, бб",
        email: "gocedelcevdh@t-home.mk"
    },
    {
        id: 69,
        number: 69,
        municipality: "Kaвадарци",
        schoolName: "ОOУ „Димката Ангелов-  Габерот“ с.Ваташа",
        address: "ул. Страшо Пинџур, бр.186 с.Ваташа",
        email: "dag_vatasa@yahoo.com"
    },
    {
        id: 70,
        number: 70,
        municipality: "Кавадарци",
        schoolName: "ООУ ,,Димката  Ангелов Габерот“",
        address: "ул. Браќа Хаџи Тефови, бр. 40",
        email: "dimkatagaberot@yahoo.com"
    },
    {
        id: 71,
        number: 71,
        municipality: "Кавадарци",
        schoolName: "ООУ „Гоце Делчев“",
        address: "бул.Цветан Димов, бр.1",
        email: "ougdelcevkavadarci@yahoo.com"
    },
    {
        id: 72,
        number: 72,
        municipality: "Кавадарци",
        schoolName: "ООУ „Страшо Пинџур“",
        address: "ул. Димката Ангелов Габерот, бр.3",
        email: "strasop@hotmail.com"
    },
    {
        id: 73,
        number: 73,
        municipality: "Кавадарци",
        schoolName: "OОУ „Тошо Велков Пепето“",
        address: "ул. Нов Белград, бб",
        email: "tosovelkovpepeto@yahoo.com"
    },
    {
        id: 74,
        number: 74,
        municipality: "Кавадарци",
        schoolName: "ООУ „Тоде Хаџи Тефов“",
        address: "ул. Пионерска, бр.24",
        email: "todehadzitefov@yahoo.com"
    },
    {
        id: 75,
        number: 75,
        municipality: "Кавадарци",
        schoolName: "ООМБУ „Лазо Мицев-Рале“",
        address: "ул. Браќа Миладиновци, бб",
        email: "lazomicev_rale@yahoo.com"
    },
    {
        id: 76,
        number: 76,
        municipality: "Росоман",
        schoolName: "ООУ „Пере Тошев“",
        address: "ул. Пере Тошев, бр.2",
        email: "peretosev_rosoman@yahoo.com"
    },
    {
        id: 77,
        number: 77,
        municipality: "Кичево",
        schoolName: "ООУ „Кузман Јосифовски Питу“",
        address: "ул. 4-ти Јули, бб",
        email: "oukjpitu@t.mk"
    },
    {
        id: 78,
        number: 78,
        municipality: "Кичево",
        schoolName: "ООУ „Санде Штрејоски“",
        address: "ул.11 Септември, бр.143",
        email: "sandesterjoski@gmail.com"
    },
    {
        id: 79,
        number: 79,
        municipality: "Кичево",
        schoolName: "ООУ „Д-р Владимир Полежиноски“",
        address: "ул. Арсо Војвода, бб",
        email: "vladimirpolezinoski@yahoo.com"
    },
    {
        id: 80,
        number: 80,
        municipality: "Кичево",
        schoolName: "ООУ „Христо Узунов“ с.Другово",
        address: "с. Другово",
        email: "hristouzunov.cou.drugovo@gmail.com"
    },
    {
        id: 81,
        number: 81,
        municipality: "Кичево",
        schoolName: "ООУ „Ѓерѓ Кастриоти Скендербеу“ с.Србица",
        address: "с.Србица",
        email: "gkskenderbeu@gmail.com"
    },
    {
        id: 82,
        number: 82,
        municipality: "Кичево",
        schoolName: "ООУ „Милто Ѓура“   с.Стрелци",
        address: "с.Стрелци",
        email: "milto.gurra@yahoo.com"
    },
    {
        id: 83,
        number: 83,
        municipality: "Кичево",
        schoolName: "ООУ „Наим Фрашери“ с.Јагол Доленци",
        address: "с.Јагол Доленци",
        email: "naimbejfrasheri@gmail.com"
    },
    {
        id: 84,
        number: 84,
        municipality: "Кичево",
        schoolName: "ООУ „Фаик Коница“  с.Грешница",
        address: "с.Грешница",
        email: "fkonica@hotmail.com"
    },
    {
        id: 85,
        number: 85,
        municipality: "Кичево",
        schoolName: "ООУ „Реџо Рушит Зајази“  с.Зајас",
        address: "с.Зајас",
        email: "shkollazajaz@yahoo.com"
    },
    {
        id: 86,
        number: 86,
        municipality: "Кочани",
        schoolName: "ОМУ „Ристо Јурков“",
        address: "ул. Љупчо Сантов, бб",
        email: "risto_jurukov@t.mk"
    },
    {
        id: 87,
        number: 87,
        municipality: "Кочани",
        schoolName: "ООУ „Св.Кирил и Методиј“",
        address: "ул. Глигор Апостолов - Гочо, бр.33",
        email: "sv.kirilimetodijkm@yahoo.com"
    },
    {
        id: 88,
        number: 88,
        municipality: "Кочани",
        schoolName: "ООУ „Крсте Петков Мисирков“ с.Оризари",
        address: "ул. Маршал Тито, бр. 20    с.Оризари",
        email: "orizari_kpmisirkov@yahoo.com"
    },
    {
        id: 89,
        number: 89,
        municipality: "Кочани",
        schoolName: "ООУ „Малина Попиванова“ Кочани",
        address: "ул.Тодосије Паунов, бр.95",
        email: "malinapopivanova@yahoo.com"
    },
    {
        id: 90,
        number: 90,
        municipality: "Кочани",
        schoolName: "ООУ „Никола Карев“",
        address: "ул. Никола Карев, бр.17",
        email: "nikolakarev_1957@yahoo.com"
    },
    {
        id: 91,
        number: 91,
        municipality: "Кочани",
        schoolName: "ООУ „Раде Кратовче“ Кочани",
        address: "ул. Борис Трајковски, бр. 42",
        email: "radekratovce@gmail.com"
    },
    {
        id: 92,
        number: 92,
        municipality: "Зрновци",
        schoolName: "ООУ „Синиша Стоилов“",
        address: "ул. Генерал Апостолски, бб",
        email: "sinisastoilov@yahoo.com"
    },
    {
        id: 93,
        number: 93,
        municipality: "Чешиново Облешево",
        schoolName: "ООУ „Климент Охридски“ с.Облешево",
        address: "ул. Маршал Тито, бр. 29",
        email: "k.o.oblesevo@gmail.com"
    },
    {
        id: 94,
        number: 94,
        municipality: "Чешиново Облешево",
        schoolName: "ООУ „Страшо Пинџур“ с.Соколарци",
        address: "ул. Маршал Тито, бр.4",
        email: "strashopindjur@gmail.com"
    },
    {
        id: 95,
        number: 95,
        municipality: "Кратово",
        schoolName: "ОOУ „Кочо Рацин“",
        address: "ул. Михаило Апостолски, бр.11",
        email: "skolokratovo@gmail.com"
    },
    {
        id: 96,
        number: 96,
        municipality: "Крива Паланка",
        schoolName: "ООУ „Илинден“",
        address: "ул. Наско Тамбурков, бр. 80",
        email: "ouilinden@yahoo.com"
    },
    {
        id: 97,
        number: 97,
        municipality: "Крива Паланка",
        schoolName: "ОOУ „Јоаким Крчовски“",
        address: "ул.  Св.Јоаким Осоговски, бр.139",
        email: "oujoakimkrcovski@yahoo.com"
    },
    {
        id: 98,
        number: 98,
        municipality: "Ранковце",
        schoolName: "ОOУ „Христијан Тодоровски Карпош“",
        address: "с. Ранковце",
        email: "htodorovskikarpos@yahoo.com"
    },
    {
        id: 99,
        number: 99,
        municipality: "Крушево",
        schoolName: "ООУ „Св.Кирил и Методиј“ с.Бучин",
        address: "с. Бучин",
        email: "kmetodij@yahoo.com"
    },
    {
        id: 100,
        number: 100,
        municipality: "Крушево",
        schoolName: "ООУ „Никола Карев“",
        address: "ул. Шула Мина, бр.6а",
        email: "nkarev@t-home.mk, nkarev_krusevo@hotmail.com"
    },
    {
        id: 101,
        number: 101,
        municipality: "Куманово",
        schoolName: "ООУ „11 Октомври“",
        address: "ул. Тодор Велков, бб",
        email: "oou11oktomvrikumanovo@gmail.com"
    },
    {
        id: 102,
        number: 102,
        municipality: "Куманово",
        schoolName: "ООУ „Бајрам Шабани“",
        address: "ул. Карл Маркс, бр. 52",
        email: "b.shabani-ku@hotmail.com"
    },
    {
        id: 103,
        number: 103,
        municipality: "Куманово",
        schoolName: "ООУ „Браќа Миладиновци“",
        address: "ул. Народна Револуција, бр.43",
        email: "brakamiladinovci_ku@yahoo.com"
    },
    {
        id: 104,
        number: 104,
        municipality: "Куманово",
        schoolName: "ООУ „Браќа Рибар“  с.Табановце",
        address: "с.Табановце",
        email: "braca_ribar@yahoo.com"
    },
    {
        id: 105,
        number: 105,
        municipality: "Куманово",
        schoolName: "ООУ „Јероним Дерада“   с.Черкез",
        address: "с.Черкез",
        email: "jeronimderada09@hotmail.com"
    },
    {
        id: 106,
        number: 106,
        municipality: "Куманово",
        schoolName: "ООУ „Карпош“ с.Умин Дол",
        address: "с.Умин Дол",
        email: "karpos_umindol@yahoo.com"
    },
    {
        id: 107,
        number: 107,
        municipality: "Куманово",
        schoolName: "ООУ „Кирил и Методиј“ с.Романовце",
        address: "с.Романовце",
        email: "kiril.metodij@mail.net.mk"
    },
    {
        id: 108,
        number: 108,
        municipality: "Куманово",
        schoolName: "ООУ „Кочо Рацин“ Куманово",
        address: "ул. Никшичка, бб",
        email: "oukocoracin05@yahoo.com"
    },
    {
        id: 109,
        number: 109,
        municipality: "Куманово",
        schoolName: "ООУ „Крсте Мисирков“",
        address: "ул. Народна револуција, бб",
        email: "krstemisirkov@yahoo.com"
    },
    {
        id: 110,
        number: 110,
        municipality: "Куманово",
        schoolName: "ООУ „Магдалена Антова“ с.Крапош",
        address: "ул. 110, бр.5",
        email: "magdalenaantova@yahoo.com"
    },
    {
        id: 111,
        number: 111,
        municipality: "Куманово",
        schoolName: "ООУ „Битолски Конгрес“ с.Лопате",
        address: "с.Лопате",
        email: "oukm.drejtori@yahoo.com"
    },
    {
        id: 112,
        number: 112,
        municipality: "Куманово",
        schoolName: "ООУ „Наим Фрашери“",
        address: "ул. Наим Фрашери, бб",
        email: "naimfrasheri_ku@hotmail.com"
    },
    {
        id: 113,
        number: 113,
        municipality: "Куманово",
        schoolName: "ООУ „Толи Зордумис“",
        address: "ул. Боро Прцан, бр.38",
        email: "tolikumanovo@gmail.com"
    },
    {
        id: 114,
        number: 114,
        municipality: "Куманово",
        schoolName: "ООУ „Вера Которка“ с.Клечовце",
        address: "Населено место без уличен систем с.Клечевце",
        email: "vera.kotorka@gmail.com"
    },
    {
        id: 115,
        number: 115,
        municipality: "Куманово",
        schoolName: "ООУ „Вук Караџиќ“ Куманово",
        address: "ул. Браќа Филиповиќ, бр.17",
        email: "ouvk60@yahoo.com"
    },
    {
        id: 116,
        number: 116,
        municipality: "Куманово",
        schoolName: "ООУ „Христијан Карпош“",
        address: "ул. Радоје Димиќ, бб",
        email: "hrkarposku@gmail.com"
    },
    {
        id: 117,
        number: 117,
        municipality: "Куманово",
        schoolName: "ОМУ „Панче Пешев“ Куманово",
        address: "ул. Братство Единство, бр.1",
        email: "uomopancepesev@yahoo.com"
    },
    {
        id: 118,
        number: 118,
        municipality: "Липково",
        schoolName: "ООУ „Дитурија“",
        address: "с. Липково",
        email: "dituria_lik@yahoo.com"
    },
    {
        id: 119,
        number: 119,
        municipality: "Липково",
        schoolName: "ООУ„Култура“ с.Матејче",
        address: "с. Матејче",
        email: "shfkulturamatec@gmail.com"
    },
    {
        id: 120,
        number: 120,
        municipality: "Липково",
        schoolName: "OOУ„Антон Зако Чајупи“ с.Отља",
        address: "с.Отља",
        email: "antonzako@yahoo.com"
    },
    {
        id: 121,
        number: 121,
        municipality: "Липково",
        schoolName: "ООУ„7 Марси“ с.Опае",
        address: "с.Опае",
        email: "shfk7marsi@gmail.com"
    },
    {
        id: 122,
        number: 122,
        municipality: "Липково",
        schoolName: "ООУ„Фаик Коница“ с.Слупчане",
        address: "с.Слупчане",
        email: "faik.konica@live.com"
    },
    {
        id: 123,
        number: 123,
        municipality: "Липково",
        schoolName: "ООУ„Рилиндја“ с.Љојане",
        address: "с.Љојане",
        email: "shf_rilindja@hotmail.com"
    },
    {
        id: 124,
        number: 124,
        municipality: "Липково",
        schoolName: "ООУ„5 Октомври“",
        address: "с.Никуштак",
        email: "shfk5tetori@gmail.com"
    },
    {
        id: 125,
        number: 125,
        municipality: "Старо Нагоричане",
        schoolName: "ООУ„Христијан Тодоровски Карпош“ с.Драгоманце",
        address: "с.Драгоманце, бб",
        email: "ouh.karpos_dragomance@yahoo.com"
    },
    {
        id: 126,
        number: 126,
        municipality: "Старо Нагоричане",
        schoolName: "ООУ„Христијан Карпош“ с.Младо Нагоричане",
        address: "с.Младо Нагоричане",
        email: "htkarpos_mln@yahoo.com"
    },
    {
        id: 127,
        number: 127,
        municipality: "Старо Нагоричане",
        schoolName: "OOУ„Светозар Марковиќ“",
        address: "с. Старо Нагоричане",
        email: "svetozar_markovic_mk@yahoo.com"
    },
    {
        id: 128,
        number: 128,
        municipality: "Неготино",
        schoolName: "ООУ„Гоце Делчев“",
        address: "ул. Маршал Тито, бр.117",
        email: "gocedelcevnegotino@gmail.com"
    },
    {
        id: 129,
        number: 129,
        municipality: "Неготино",
        schoolName: "ООУ„Страшо Пинџур“",
        address: "ул. Партизанска, бр.146",
        email: "spingur_negotino@yahoo.com"
    },
    {
        id: 130,
        number: 130,
        municipality: "Неготино",
        schoolName: "ООМУ„Владимир Арсовски“",
        address: "ул.Маршал Тито, бр.102",
        email: "vladoarsov@yahoo.com"
    },
    {
        id: 131,
        number: 131,
        municipality: "Демир Капија",
        schoolName: "ООУ„Димче А.Габерот“",
        address: "ул. Маршал Тито, бр.11",
        email: "gaberot_dkapija@yahoo.com"
    },
    {
        id: 132,
        number: 132,
        municipality: "Охрид",
        schoolName: "ООУ,,Живко Чинго, с. Велгошти",
        address: "с. Велгошти",
        email: "ou_zcingo@yahoo.com"
    },
    {
        id: 133,
        number: 133,
        municipality: "Охрид",
        schoolName: "ООУ „Братство Единство“",
        address: "ул. 7 Ноември, бр.85",
        email: "bratstvoe@yahoo.com"
    },
    {
        id: 134,
        number: 134,
        municipality: "Охрид",
        schoolName: "ООУ„Григор Прличев“",
        address: "ул. Димитар Влахов, бр.65",
        email: "grigorprlicev@yahoo.com"
    },
    {
        id: 135,
        number: 135,
        municipality: "Охрид",
        schoolName: "ООУ„Христо Узунов“",
        address: "ул. Питу Гули,бр.128",
        email: "ouhuzunov@yahoo.com"
    },
    {
        id: 136,
        number: 136,
        municipality: "Охрид",
        schoolName: "ООУ„Климент Охридски“",
        address: "ул. Климентов Универзитет, бб",
        email: "svklimentohridski108@yahoo.com"
    },
    {
        id: 137,
        number: 137,
        municipality: "Охрид",
        schoolName: "ООУ „Кочо Рацин“",
        address: "ул.130, бр.24",
        email: "ouracin_oh@yahoo.com"
    },
    {
        id: 138,
        number: 138,
        municipality: "Охрид",
        schoolName: "ООУ „ Св. Наум Охридски“ с.Пештани",
        address: "с.Пештани",
        email: "ounohridski@yahoo.com"
    },
    {
        id: 139,
        number: 139,
        municipality: "Охрид",
        schoolName: "ООУ „Ванчо Николески“ с.Лескоец",
        address: "с.Лескоец",
        email: "ou_vnikoleski@yahoo.com"
    },
    {
        id: 140,
        number: 140,
        municipality: "Охрид",
        schoolName: "ОМУ „Методи Патче“",
        address: "ул. Никола Карев бр.4",
        email: "metodipatce@yahoo.com"
    },
    {
        id: 141,
        number: 141,
        municipality: "Дебрца",
        schoolName: "ООУ„Дебрца“ с.Белчишта",
        address: "с. Белчишта 6344",
        email: "oudebrca@yahoo.com"
    },
    {
        id: 142,
        number: 142,
        municipality: "Прилеп",
        schoolName: "ООУ„Страшо Пинџур“ с. Мало Коњари",
        address: "с. Мало Коњари",
        email: "pindzurstraso@yahoo.com"
    },
    {
        id: 143,
        number: 143,
        municipality: "Прилеп",
        schoolName: "ООУ„Блаже Конески“",
        address: "ул. Самоилова, бр. 15",
        email: "oublazekoneski@gmail.com"
    },
    {
        id: 144,
        number: 144,
        municipality: "Прилеп",
        schoolName: "ООУ„Добре Јованоски“",
        address: "ул.11 Октомври, бр.143",
        email: "ou_dobrejovanoski_pp@yahoo.com"
    },
    {
        id: 145,
        number: 145,
        municipality: "Прилеп",
        schoolName: "ООУ„Гоце Делчев“",
        address: "ул. Мечкин Камен, бр.2",
        email: "ou_gocedelcev@yahoo.com"
    },
    {
        id: 146,
        number: 146,
        municipality: "Прилеп",
        schoolName: "ООУ„Кире Гаврилоски-Јане“",
        address: "ул. Јоска Јорданоски, бр.46",
        email: "oou.kgjane@yahoo.com"
    },
    {
        id: 147,
        number: 147,
        municipality: "Прилеп",
        schoolName: "ООУ„Кирил и Методиј“ с. Канатларци",
        address: "с. Канатларци",
        email: "kirilimetodija@yahoo.com"
    },
    {
        id: 148,
        number: 148,
        municipality: "Прилеп",
        schoolName: "ООУ„Кочо Рацин“",
        address: "ул. Борка Талески, бр.64",
        email: "kocoracinprilep@yahoo.com"
    },
    {
        id: 149,
        number: 149,
        municipality: "Прилеп",
        schoolName: "OOУ „Климент Охридски“",
        address: "ул. Ленин, бб",
        email: "oukohridski@t-home.mk"
    },
    {
        id: 150,
        number: 150,
        municipality: "Прилеп",
        schoolName: "ООУ„Круме Волнароски“ с.Тополчани",
        address: "ул. Маршал Тито, бр.6, с.Тополчани",
        email: "krumevolnaroski@yahoo.com"
    },
    {
        id: 151,
        number: 151,
        municipality: "Прилеп",
        schoolName: "ООУ „Рампо Левката“",
        address: "ул. Цар Самоил, бр.1а",
        email: "rampolevkata@gmail.com"
    },
    {
        id: 152,
        number: 152,
        municipality: "Прилеп",
        schoolName: "ООМУ„Ордан Михајлосkи-Оцка“",
        address: "ул. Орде Тутески, бр.19",
        email: "muzicko_pp@yahoo.com"
    },
    {
        id: 153,
        number: 153,
        municipality: "Долнени",
        schoolName: "ОOУ „Ѓорче Петров“ с.Ропотово",
        address: "ул. Андон Иваноски,  бб с.Ропотово",
        email: "ougpetrov@gmail.com"
    },
    {
        id: 154,
        number: 154,
        municipality: "Долнени",
        schoolName: "OОУ „Мирче Ацев“ с.Лажани",
        address: "с. Лажани",
        email: "lazanimirceacev@yahoo.com"
    },
    {
        id: 155,
        number: 155,
        municipality: "Долнени",
        schoolName: "ООУ „Пецо Даскалот“ с.Долнени",
        address: "с. Долнени",
        email: "pecodaskalot@yahoo.com"
    },
    {
        id: 156,
        number: 156,
        municipality: "Долнени",
        schoolName: "ООУ „Пере Тошев“ с.Дупјачани",
        address: "с. Дупјачани",
        email: "p_tosev@yahoo.com"
    },
    {
        id: 157,
        number: 157,
        municipality: "Долнени",
        schoolName: "ООУ „Исмаил Ќемали“",
        address: "с. Црнилиште",
        email: "ismailqemali2009@gmail.com"
    },
    {
        id: 158,
        number: 158,
        municipality: "Долнени",
        schoolName: "ООУ „Вера Циривири Трена“ с.Дебреште",
        address: "с. Дебреште",
        email: "veraciriviritrena@yahoo.com"
    },
    {
        id: 159,
        number: 159,
        municipality: "Долнени",
        schoolName: "ООУ „Лирија“",
        address: "с. Житоше",
        email: "lirija.zitose@gmail.com"
    },
    {
        id: 160,
        number: 160,
        municipality: "Кривогаштани",
        schoolName: "OОУ „Јонче Смугрески“ с.Обршани",
        address: "с. Обршани",
        email: "oujoncesmugreski@hotmail.com"
    },
    {
        id: 161,
        number: 161,
        municipality: "Кривогаштани",
        schoolName: "ООУ „Манчу Матак“ с.Кривогаштани",
        address: "ул. Едвард Кардељ, бр.9",
        email: "oumancumatak@gmail.com"
    },
    {
        id: 162,
        number: 162,
        municipality: "Пробиштип",
        schoolName: "ООУ „Браќа Миладиновци“",
        address: "ул. Гоце Делчев, бр.2",
        email: "b_miladinovci@yahoo.com"
    },
    {
        id: 163,
        number: 163,
        municipality: "Пробиштип",
        schoolName: "ООУ „Никола Карев“",
        address: "ул. Тодор Александров, бр.30",
        email: "nikolakarev86@yahoo.com"
    },
    {
        id: 164,
        number: 164,
        municipality: "Радовиш",
        schoolName: "ООУ „Кирил и Методиј“ с.Ораовица",
        address: "с. Ораовица",
        email: "kirilimetodij@ymail.com"
    },
    {
        id: 165,
        number: 165,
        municipality: "Радовиш",
        schoolName: "ООУ „Коста Рацин“ с.Подареш",
        address: "с. Подареш",
        email: "k.racin@yahoo.com"
    },
    {
        id: 166,
        number: 166,
        municipality: "Радовиш",
        schoolName: "ООУ „Крсте Петков Мисирков“",
        address: "бул. Александар Македонски, бб",
        email: "kmisirkov@yahoo.com"
    },
    {
        id: 167,
        number: 167,
        municipality: "Радовиш",
        schoolName: "ООУ „Никола Карев“",
        address: "ул. Илинденска, бб",
        email: "n.karev@yahoo.com"
    },
    {
        id: 168,
        number: 168,
        municipality: "Радовиш",
        schoolName: "ООУ „Орце Николов“ с.Ињево",
        address: "с. Ињево",
        email: "nikolovorce@yahoo.com"
    },
    {
        id: 169,
        number: 169,
        municipality: "Конче",
        schoolName: "ООУ „Гоце Делчев“ с.Конче",
        address: "с. Конче",
        email: "goce_delcev_konce@yahoo.com"
    },
    {
        id: 170,
        number: 170,
        municipality: "Ресен",
        schoolName: "ООУ „Браќа Миладиновци“ с.Царев Двор",
        address: "с. Царев Двор",
        email: "brakamiladinovcicarevdvor@gmail.com"
    },
    {
        id: 171,
        number: 171,
        municipality: "Ресен",
        schoolName: "OОУ „Димитар Влахов“ с.Љубојно",
        address: "с.Љубојно",
        email: "dimitarvlahov23@yahoo.com"
    },
    {
        id: 172,
        number: 172,
        municipality: "Ресен",
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Мите Трповски, бр.30",
        email: "ou.gocedelcevresen@yahoo.com"
    },
    {
        id: 173,
        number: 173,
        municipality: "Ресен",
        schoolName: "ООУ „Мите Богоевски“",
        address: "ул. 29-ти ноември, бр.213",
        email: "mite_bogoevski@hotmail.com"
    },
    {
        id: 174,
        number: 174,
        municipality: "Ресен",
        schoolName: "ООУ „Славејко Арсов“ с.Подмочани",
        address: "с. Подмочани",
        email: "slavejkoarsovp@yahoo.com"
    },
    {
        id: 175,
        number: 175,
        municipality: "Свети Николе",
        schoolName: "ООУ „Даме Груев“ с.Ерџелија",
        address: "ул. Маршал Тито, бр.31  с.Ерџелија",
        email: "damegruev87@yahoo.com"
    },
    {
        id: 176,
        number: 176,
        municipality: "Свети Николе",
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Цветан Димов, бр. 57",
        email: "ougocedelcev@yahoo.com"
    },
    {
        id: 177,
        number: 177,
        municipality: "Свети Николе",
        schoolName: "ООУ „Кирил и Методиј“",
        address: "ул. Ангел Трајчев, бр.40",
        email: "oukirilimetodij@yahoo.com"
    },
    {
        id: 178,
        number: 178,
        municipality: "Лозово",
        schoolName: "ООУ „Методи Митевски-Брицо“",
        address: "ул. Маршал Тито, бб",
        email: "mmbricolozovo@gmail.com"
    },
    {
        id: 179,
        number: 179,
        municipality: "Чаир",
        schoolName: "ООУ „Никола Вапцаров“",
        address: "ул. Браќа Реџепагиќ, бб",
        email: "nikola-vapcarov@hotmail.com"
    },
    {
        id: 180,
        number: 180,
        municipality: "Чаир",
        schoolName: "ООУ „Рајко Жинзифов“",
        address: "ул. Методија Митевски, бб",
        email: "rajkozinzifov@hotmail.com"
    },
    {
        id: 181,
        number: 181,
        municipality: "Чаир",
        schoolName: "ООУ „Васил Главинов“",
        address: "ул. Џон Кенеди , бб",
        email: "vglavinov@yahoo.com"
    },
    {
        id: 182,
        number: 182,
        municipality: "Чаир",
        schoolName: "ООУ за возрасни „Антон Семјанович Макаренко“",
        address: "ул. Џон Кенеди, бр.32",
        email: "a.s.makarenko@hotmail.com"
    },
    {
        id: 183,
        number: 183,
        municipality: "Чаир",
        schoolName: "ПОУ,, Иднина“",
        address: "ул.2 Македонска Бригада, бр.3",
        email: "idnina2008@yahoo.com"
    },
    {
        id: 184,
        number: 184,
        municipality: "Чаир",
        schoolName: "ООУ „Хасан Приштина“",
        address: "ул. Коста Абрашевиќ, бр.7",
        email: "shf.hasanprishtina@yahoo.com"
    },
    {
        id: 185,
        number: 185,
        municipality: "Чаир",
        schoolName: "ООУ „7 Марси“",
        address: "ул. Коста Абрашевиќ, бр. 3",
        email: "shf7Marsi@hotmail.com"
    },
    {
        id: 186,
        number: 186,
        municipality: "Чаир",
        schoolName: "ООУ „Јашар Беј Шкупи“",
        address: "ул. 124 Дуќанџик, бр.бб",
        email: "shf_jasharbejshkupi@yahoo.com"
    },
    {
        id: 187,
        number: 187,
        municipality: "Чаир",
        schoolName: "ООУ „Лирија“",
        address: "ул. Цветан Димов, бр.94",
        email: "liria_shkup@live.com"
    },
    {
        id: 188,
        number: 188,
        municipality: "Чаир",
        schoolName: "ООУ „Конгреси и Манастирит“",
        address: "ул. Петре Георгиев, бр.22",
        email: "kongresimanastirit1@hotmail.com"
    },
    {
        id: 189,
        number: 189,
        municipality: "Чаир",
        schoolName: "ООУ „Тефејјуз“",
        address: "ул. Чаирска, бр.2",
        email: "tefejjuz@hotmail.com"
    },
    {
        id: 190,
        number: 190,
        municipality: "Шуто Оризари",
        schoolName: "ООУ „26 Јули“ Шуто Оризари",
        address: "ул. Индира Ганди, бр.31",
        email: "ou26juli@yahoo.com"
    },
    {
        id: 191,
        number: 191,
        municipality: "Шуто Оризари",
        schoolName: "ООУ „Браќа Рамиз Хамид“ Шуто Оризари",
        address: "ул. Че Гевара, бр.80",
        email: "oubrh@t-home.mk"
    },
    {
        id: 192,
        number: 192,
        municipality: "Чучер Сандево",
        schoolName: "ООУ „Александар Урдаревски“  с.Сандево",
        address: "ул. 1, бр.11 с.Сандево",
        email: "aurdarevski10@yahoo.com"
    },
    {
        id: 193,
        number: 193,
        municipality: "Чучер Сандево",
        schoolName: "ООУ „Св.Кирил и Методиј“  с.Кучевиште",
        address: "ул. 8, бр.57 с.Кучевиште",
        email: "kimkuceviste@yahoo.com"
    },
    {
        id: 194,
        number: 194,
        municipality: "Чучер Сандево",
        schoolName: "ООУ „Михаљ Грамено“ с.Брест",
        address: "с.Брест",
        email: "oumrameno@hotmail.com"
    },
    {
        id: 195,
        number: 195,
        municipality: "Бутел",
        schoolName: "ОOУ „Живко Брајковски“",
        address: "ул. Хо Ши Мин, бб",
        email: "zhivkobrajkovski@yahoo.com"
    },
    {
        id: 196,
        number: 196,
        municipality: "Бутел",
        schoolName: "ОOУ „Ацо Шопов“ Радишани",
        address: "ул. Радишанска, бр. 68а",
        email: "aco.sopov@yahoo.com"
    },
    {
        id: 197,
        number: 197,
        municipality: "Бутел",
        schoolName: "ОOУ „Гоце Делчев“ с.Љубанци",
        address: "ул. 7, бр.90",
        email: "gocedelcev_ljubanci@yahoo.com"
    },
    {
        id: 198,
        number: 198,
        municipality: "Бутел",
        schoolName: "ОOУ „Климент Охридски“",
        address: "ул. Призренска, бр.22",
        email: "ohridskikliment_butel@yahoo.com"
    },
    {
        id: 199,
        number: 199,
        municipality: "Бутел",
        schoolName: "ОOУ „Лиман Каба“ с.Љуботен",
        address: "ул. 1, бр.39 с.Љуботен",
        email: "ou.limankaba@hotmail.com"
    },
    {
        id: 200,
        number: 200,
        municipality: "Бутел",
        schoolName: "ОOУ „Панајот Гиновски“",
        address: "ул. Ферид Бајрам, бр.30",
        email: "oupanajotginovski@yahoo.com"
    },
    {
        id: 201,
        number: 201,
        municipality: "Бутел",
        schoolName: "ОOУ „Петар Здравковски Пенко“",
        address: "ул. II  Македонска бригада,  бб",
        email: "petarzdravkovski@yahoo.com"
    },
    {
        id: 202,
        number: 202,
        municipality: "Бутел",
        schoolName: "Завод за рехабилитација на деца и младинци",
        address: "ул. II  Македонска бригада, бб",
        email: "juzrdm-sk@mtsp.gov.mk"
    },
    {
        id: 203,
        number: 203,
        municipality: "Бутел",
        schoolName: "Јавна установа за згрижување на деца со воспитно социјални проблеми и нарушено поведение",
        address: "ул. Петар Манџуков,бб",
        email: "j_u_25maj@yahoo.com"
    },
    {
        id: 204,
        number: 204,
        municipality: "Центар",
        schoolName: "ОOУ „11 Октомври“",
        address: "ул. Мирче Ацев, бр.102",
        email: "oktomvri11@yahoo.com"
    },
    {
        id: 205,
        number: 205,
        municipality: "Центар",
        schoolName: "ОOУ „Димитар Миладинов“",
        address: "ул. Кочо Рацин, бр.17",
        email: "miladinov.dimitar@yahoo.com"
    },
    {
        id: 206,
        number: 206,
        municipality: "Центар",
        schoolName: "ОOУ „Гоце Делчев“",
        address: "ул. Градски ѕид, бр.34",
        email: "gocedelcevsk@yahoo.com"
    },
    {
        id: 207,
        number: 207,
        municipality: "Центар",
        schoolName: "ОOУ „Јохан Хајнрих Песталоци“",
        address: "ул. Апостол Гусларот, бр.3",
        email: "oupestaloci@gmail.com"
    },
    {
        id: 208,
        number: 208,
        municipality: "Центар",
        schoolName: "ОOУ „Св.Кирил и Методиј“",
        address: "ул.1737, бр.1",
        email: "oukimsk@yahoo.com, ooukimsk@gmail.com"
    },
    {
        id: 209,
        number: 209,
        municipality: "Центар",
        schoolName: "ОOУ „Кочо Рацин“",
        address: "ул. Салвадор Аљенде, бр.2",
        email: "koco _racin@yahoo.com"
    },
    {
        id: 210,
        number: 210,
        municipality: "Центар",
        schoolName: "ОOУ „Коле Неделковски“",
        address: "ул. Антоние Грубишиќ, бр.8",
        email: "oukolenedelkovski@yahoo.com"
    },
    {
        id: 211,
        number: 211,
        municipality: "Центар",
        schoolName: "ДМБУЦ „Илија Николовски Луј”",
        address: "ул. Црвена Скопска Општина, бр.4",
        email: "dmbuc.mkd@gmail.com"
    },
    {
        id: 212,
        number: 212,
        municipality: "Гази Баба",
        schoolName: "ОOУ „25 Мај“ Сингелиќ",
        address: "ул. Алија Авдовиќ, бр.6",
        email: "ou25_maj@yahoo.com"
    },
    {
        id: 213,
        number: 213,
        municipality: "Гази Баба",
        schoolName: "ОOУ „Дане Крапчев“ Маџари",
        address: "ул. Маџари, бр.9",
        email: "oudanekrapcev@yahoo.com"
    },
    {
        id: 214,
        number: 214,
        municipality: "Гази Баба",
        schoolName: "ОOУ „Григор Прличев“ Железара",
        address: "ул. Гемиџиска, бр.57",
        email: "g.prlicev@gmail.com"
    },
    {
        id: 215,
        number: 215,
        municipality: "Гази Баба",
        schoolName: "ОOУ „Кирил и Методиј“ с.Стајковци",
        address: "ул. 6, бр.1, с. Стајковци",
        email: "coukirilimetodij@yahoo.com"
    },
    {
        id: 216,
        number: 216,
        municipality: "Гази Баба",
        schoolName: "ОOУ „Крсте Мисирков“  Маџари",
        address: "ул. Среќко Пужалка, бр.65а",
        email: "krstem@yahoo.com"
    },
    {
        id: 217,
        number: 217,
        municipality: "Гази Баба",
        schoolName: "ОOУ „Крум Тошев“ с.Трубарево",
        address: "ул. 2, бр.19, с.Трубарево",
        email: "krumtosev@yahoo.com"
    },
    {
        id: 218,
        number: 218,
        municipality: "Гази Баба",
        schoolName: "ОOУ „Наум Наумовски Борче“ Маџари",
        address: "ул. Маџари, бр.25",
        email: "naum_naumovski_borce@yahoo.com"
    },
    {
        id: 219,
        number: 219,
        municipality: "Гази Баба",
        schoolName: "ОOУ „Наум Охридски“ с.Булачани",
        address: "ул.5, бр.1",
        email: "nohridski@yahoo.com"
    },
    {
        id: 220,
        number: 220,
        municipality: "Гази Баба",
        schoolName: "ОOУ „Стив Наумов“ Автокоманда",
        address: "ул. Лазар Поп Трајков, бр.28",
        email: "ou-stiv-naumov.gazi-baba@schools.edu.mk, ou_stiv_naumov@yahoo.com"
    },
    {
        id: 221,
        number: 221,
        municipality: "Гази Баба",
        schoolName: "ОOУ „Вера Јоциќ“ Маџари",
        address: "ул. Разлошка, бр.5",
        email: "verajocik@yahoo.com"
    },
    {
        id: 222,
        number: 222,
        municipality: "Гази Баба",
        schoolName: "ОOУ „Његош“ с.Јурумлери",
        address: "ул. 2-а, бр.18, с.Јурумлери",
        email: "negoskolonija@yahoo.com"
    },
    {
        id: 223,
        number: 223,
        municipality: "Арачиново",
        schoolName: "ООУ „Бајрам Шабани“ с.Грушино",
        address: "ул.1, бб,  с.Грушино",
        email: "sh.f.bajram.shabani.grushine@gmail.com"
    },
    {
        id: 224,
        number: 224,
        municipality: "Арачиново",
        schoolName: "ООУ „Ѓерѓ Кастриоти Скендербеу“",
        address: "ул. 1, бб, с.Арачиново",
        email: "sh.f.gj.k.skenderbeu.aracinovo@gmail.com"
    },
    {
        id: 225,
        number: 225,
        municipality: "Илинден",
        schoolName: "ООУ „Браќа Миладиновци“ с.Миладиновци",
        address: "с.Миладиновци",
        email: "brmiladinovci@yahoo.com"
    },
    {
        id: 226,
        number: 226,
        municipality: "Илинден",
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. 9, бр.179,  Илинден",
        email: "ougocedelcevilinden@yahoo.com"
    },
    {
        id: 227,
        number: 227,
        municipality: "Илинден",
        schoolName: "ООУ „Ристо Крле“ с.Кадино",
        address: "ул. 10 бр. 34г,  с. Кадино",
        email: "ristokrle_ou@yahoo.com"
    },
    {
        id: 228,
        number: 228,
        municipality: "Петровец",
        schoolName: "ООУ „Братство-Единство“ с.Средно Коњари",
        address: "с.Средно Коњари",
        email: "o.u.bratstvoedinstvo@hotmail.com"
    },
    {
        id: 229,
        number: 229,
        municipality: "Петровец",
        schoolName: "ООУ „Кочо Рацин“",
        address: "ул.1, бр.185",
        email: "oukocoracin@yahoo.com"
    },
    {
        id: 230,
        number: 230,
        municipality: "Карпош",
        schoolName: "ООУ „Аврам Писевски“ с.Брадовци",
        address: "ул. 2, бр. 10 с. Бардовци",
        email: "skolo_pro_koor@yahoo.com"
    },
    {
        id: 231,
        number: 231,
        municipality: "Карпош",
        schoolName: "ООУ „Братство“ Тафталиџе",
        address: "ул. Московска, бр.18",
        email: "ou_bratstvo@yahoo.com"
    },
    {
        id: 232,
        number: 232,
        municipality: "Карпош",
        schoolName: "ООУ „Димо Хаџи Димов“ Влае",
        address: "ул. Ангел Динев, бр.5",
        email: "dimohdimov@yahoo.com"
    },
    {
        id: 233,
        number: 233,
        municipality: "Карпош",
        schoolName: "ООУ „Христијан Тодоровски Карпош“",
        address: "ул. Орце Николов, бр.161",
        email: "htk.kontakt@gmail.com, htkarpos@gmail.com"
    },
    {
        id: 234,
        number: 234,
        municipality: "Карпош",
        schoolName: "ООУ „Јан Амос Коменски“, Тафталиџе",
        address: "ул. Варшавска, бр.23,",
        email: "oujak@yahoo.com"
    },
    {
        id: 235,
        number: 235,
        municipality: "Карпош",
        schoolName: "ООУ „Лазо Трповски“",
        address: "ул. Радика, бр.9",
        email: "trplazo@t.mk"
    },
    {
        id: 236,
        number: 236,
        municipality: "Карпош",
        schoolName: "ООУ „Петар Поп Арсов“",
        address: "ул. Трифун Бузев, бб",
        email: "pparsov@yahoo.com"
    },
    {
        id: 237,
        number: 237,
        municipality: "Карпош",
        schoolName: "ООУ „Вера Циривири Трена“",
        address: "ул. Руѓер Бошковиќ, бр.9",
        email: "oou.veraciriviri@gmail.com"
    },
    {
        id: 238,
        number: 238,
        municipality: "Карпош",
        schoolName: "ООУ „Владо Тасевски“",
        address: "ул. Миле Поп Јорданов, бр.74",
        email: "v.tasevski@yahoo.com"
    },
    {
        id: 239,
        number: 239,
        municipality: "Карпош",
        schoolName: "ООУ „Војдан Чернодрински“ Тафталиџе",
        address: "ул. Дрезденска, бр. 3",
        email: "vojdancernodrinski@yahoo.com"
    },
    {
        id: 240,
        number: 240,
        municipality: "Ѓорче Петров",
        schoolName: "ООУ „Димитар Поп Беровски“",
        address: "ул. Ѓуро Салај, бр 31",
        email: "d_berovski@yahoo.com"
    },
    {
        id: 241,
        number: 241,
        municipality: "Ѓорче Петров",
        schoolName: "ООУ „Ѓорче Петров“",
        address: "ул. 4 Јули, бр.131",
        email: "ougorcepetrov@yahoo.com"
    },
    {
        id: 242,
        number: 242,
        municipality: "Ѓорче Петров",
        schoolName: "ООУ „Јоаким Крчовски“ с.Волково",
        address: "ул.102, бб, с. Волково",
        email: "jkvolkovo@yahoo.com"
    },
    {
        id: 243,
        number: 243,
        municipality: "Ѓорче Петров",
        schoolName: "ООУ „Мирче Ацев“",
        address: "ул. Мечкин Камен, бр.26",
        email: "ouma.skopje@gmail.com"
    },
    {
        id: 244,
        number: 244,
        municipality: "Ѓорче Петров",
        schoolName: "ООУ „Страшо Пинџур“ Новоселски Пат",
        address: "ул. Лука Геров, бр.21",
        email: "ou.strasopindzur@yahoo.com"
    },
    {
        id: 245,
        number: 245,
        municipality: "Ѓорче Петров",
        schoolName: "ООУ „Тихомир Милошевски“ с.Ново Село",
        address: "с.Ново Село",
        email: "tihomirmilosevski@yahoo.com"
    },
    {
        id: 246,
        number: 246,
        municipality: "Сарај",
        schoolName: "ООУ „Бајрам Шабани“ с.Кондово",
        address: "с.Кондово",
        email: "bajramsabani1@gmail.com"
    },
    {
        id: 247,
        number: 247,
        municipality: "Сарај",
        schoolName: "ООУ „Дитуриа“",
        address: "ул. 4, бр.105",
        email: "dituriasaraj3@gmail.com"
    },
    {
        id: 248,
        number: 248,
        municipality: "Сарај",
        schoolName: "OОУ „Дрита“ с.Рашче",
        address: "с.Рашче",
        email: "shkolla_drita@live.com"
    },
    {
        id: 249,
        number: 249,
        municipality: "Сарај",
        schoolName: "ООУ „Емин Дураку“ с.Буковиќ",
        address: "с.Буковиќ",
        email: "ou.eminduraku@yahoo.com"
    },
    {
        id: 250,
        number: 250,
        municipality: "Сарај",
        schoolName: "ООУ „Фаик Коница“ с.Радуша",
        address: "с.Радуша",
        email: "ou.faikkonica@hotmail.com"
    },
    {
        id: 251,
        number: 251,
        municipality: "Сарај",
        schoolName: "ООУ „Ибе Паликуќа“ с.Бојане",
        address: "с.Бојане",
        email: "ibe.palikuqa@gmail.com"
    },
    {
        id: 252,
        number: 252,
        municipality: "Сарај",
        schoolName: "ООУ „Сами Фрашери“ с.Глумово",
        address: "с.Глумово",
        email: "samifraseri@yahoo.com"
    },
    {
        id: 253,
        number: 253,
        municipality: "Сарај",
        schoolName: "ООУ „Бедри Таири“ с.Долно Свиларе",
        address: "ул. 1, бр.26,с.Долно Свиларе",
        email: "oubedritairi@hotmail.com"
    },
    {
        id: 254,
        number: 254,
        municipality: "Кисела Вода",
        schoolName: "ООУ „Кирил Пејчиновиќ“",
        address: "ул. Пушкинова, бр.17",
        email: "kirilpejcinovicsk@gmail.com kirilpejcinovicsk@yahoo.com"
    },
    {
        id: 255,
        number: 255,
        municipality: "Кисела Вода",
        schoolName: "ООУ „Климент Охридски“ с.Драчево",
        address: "ул. Јустинијан Први, бр.98",
        email: "kliment_ohridski_d@yahoo.com"
    },
    {
        id: 256,
        number: 256,
        municipality: "Кисела Вода",
        schoolName: "ООУ „Круме Кепески“",
        address: "ул. Сава Ковачевиќ бр. 76",
        email: "ooukkepeskisk@gmail.com"
    },
    {
        id: 257,
        number: 257,
        municipality: "Кисела Вода",
        schoolName: "ООУ „Кузман Шапкарев“ населба Драчево",
        address: "ул. Антон Димитров, бр.135",
        email: "kuzmansapkarev@gmail.com"
    },
    {
        id: 258,
        number: 258,
        municipality: "Кисела Вода",
        schoolName: "ООУ „Кузман Јосифовски Питу“",
        address: "ул. Aнтон Попов, бр. 2",
        email: "ooukjpitu@yahoo.com"
    },
    {
        id: 259,
        number: 259,
        municipality: "Кисела Вода",
        schoolName: "ООУ „Невена Георгиева Дуња“",
        address: "ул. Михаил Чаков, бр.2",
        email: "ngeorgievadunja@gmail.com"
    },
    {
        id: 260,
        number: 260,
        municipality: "Кисела Вода",
        schoolName: "ООУ „Партение Зографски“",
        address: "ул. Доситеј Обрадовиќ, бр.18",
        email: "partenija@t-home.mk"
    },
    {
        id: 261,
        number: 261,
        municipality: "Кисела Вода",
        schoolName: "ООУ „Рајко Жинзифов“ Драчево",
        address: "ул. Иван Хаџиниколов, бр.2",
        email: "rajko_zinzifov@yahoo.com,"
    },
    {
        id: 262,
        number: 262,
        municipality: "Кисела Вода",
        schoolName: "ПОУ „Д-р Златан Сремец“ Скопје",
        address: "ул. Емил Зола, бр.5",
        email: "zlatansremec@yahoo.com"
    },
    {
        id: 263,
        number: 263,
        municipality: "Кисела Вода",
        schoolName: "Завод Димитар Влахов",
        address: "ул. Ѓорѓи Димитров, бб",
        email: "dvlahov_braj@yahoo.com"
    },
    {
        id: 264,
        number: 264,
        municipality: "Аеродром",
        schoolName: "ОOУ „Блаже Конески“",
        address: "ул„Венјамин Мачуковски“ бр.4",
        email: "blaze_koneski1@yahoo.com"
    },
    {
        id: 265,
        number: 265,
        municipality: "Аеродром",
        schoolName: "ООУ „Браќа Миладиновци“",
        address: "ул „Владимир Комаров“ бр.5",
        email: "brakamiladinovci_skopje@yahoo.com"
    },
    {
        id: 266,
        number: 266,
        municipality: "Аеродром",
        schoolName: "ООУ „Димитар Македонски“",
        address: "ул „Ѓуро Малешевац“ бр.2",
        email: "dimitar_makedonski@yahoo.com"
    },
    {
        id: 267,
        number: 267,
        municipality: "Аеродром",
        schoolName: "ООУ „Гоце Делчев“ \nГорно Лисиче",
        address: "ул „Горно Лисиче„ бб",
        email: "ougocedelcev_sgl@yahoo.com"
    },
    {
        id: 268,
        number: 268,
        municipality: "Аеродром",
        schoolName: "ООУ „Ѓорѓија Пулевски“",
        address: "Бул „Јане Сандански“ бр. 27 А",
        email: "gpulevski@yahoo.com"
    },
    {
        id: 269,
        number: 269,
        municipality: "Аеродром",
        schoolName: "ООУ „Лазо Ангеловски“",
        address: "ул „Видое Смилевски Бато“ бр.95",
        email: "lazoangelovski@yahoo.com"
    },
    {
        id: 270,
        number: 270,
        municipality: "Аеродром",
        schoolName: "ООУ „Љубен Лапе“",
        address: "ул. Васко Карангелески   бр. 2",
        email: "ljuben_lape@yahoo.com"
    },
    {
        id: 271,
        number: 271,
        municipality: "Аеродром",
        schoolName: "ООУ „Александар Македонски”",
        address: "ул.1612 бр.4",
        email: "aleksandar.makedonski5@yahoo.com"
    },
    {
        id: 272,
        number: 272,
        municipality: "Сопиште",
        schoolName: "ООУ „Драга Стојанова“ с.Ракотинци",
        address: "ул. 1, бр.2А с.Ракотинци",
        email: "ou-draga-stojanova.sopiste@t.mk"
    },
    {
        id: 273,
        number: 273,
        municipality: "Студеничани",
        schoolName: "ООУ „Алија Авдовиќ“ с.Батинци",
        address: "с. Батинци без уличен систем",
        email: "alija_avdovic@yahoo.com"
    },
    {
        id: 274,
        number: 274,
        municipality: "Студеничани",
        schoolName: "OОУ„Наим Фрашери”",
        address: "С.Студеничани",
        email: "naimfraseri_st@yahoo.com"
    },
    {
        id: 275,
        number: 275,
        municipality: "Студеничани",
        schoolName: "ООУ „Мустафа Кемал Ататурк“ Долно Количани",
        address: "Долно Количани бб",
        email: "ataturkkolicani@hotmail.com"
    },
    {
        id: 276,
        number: 276,
        municipality: "Зелениково",
        schoolName: "ООУ„Марко Цепенков“",
        address: "ул. 1 бр.6 ст.Зелениково",
        email: "markocepenkov@t.mk"
    },
    {
        id: 277,
        number: 277,
        municipality: "Струга",
        schoolName: "ООУ „Ашим Агуши“ с.Радолишта",
        address: "с. Радолишта",
        email: "sh.f.a_agushi@hotmail.com"
    },
    {
        id: 278,
        number: 278,
        municipality: "Струга",
        schoolName: "ООУ „Браќа Миладиновци“",
        address: "ул. Јово Стефаноски-Риле бр.4",
        email: "ou_b_miladinovci@yahoo.com"
    },
    {
        id: 279,
        number: 279,
        municipality: "Струга",
        schoolName: "ООУ „Единство“ с.Октиси",
        address: "с. Октиси",
        email: "ou_edinstvo@yahoo.com"
    },
    {
        id: 280,
        number: 280,
        municipality: "Струга",
        schoolName: "ООУ „Гоце Делчев“ с.Јабланица",
        address: "с. Јабланица",
        email: "gocedelcevjablanica@yahoo.com"
    },
    {
        id: 281,
        number: 281,
        municipality: "Струга",
        schoolName: "ООУ „Гоце Делчев“ с.Подгорци",
        address: "с. Подгорци",
        email: "gdelcev.podgorci@yahoo.com"
    },
    {
        id: 282,
        number: 282,
        municipality: "Струга",
        schoolName: "ООУ „Јосип Броз Тито“",
        address: "Ул. Димче Ковачески, бр. 64",
        email: "jbt.struga@gmail.com"
    },
    {
        id: 283,
        number: 283,
        municipality: "Струга",
        schoolName: "ООУ „Климент Охридски“ с.Драслајца",
        address: "с. Драслајца",
        email: "oudraslajca@yahoo.com"
    },
    {
        id: 284,
        number: 284,
        municipality: "Струга",
        schoolName: "ООУ „Мурат Лабуништа“ Лабуништа",
        address: "с. Лабуништа",
        email: "muratlabunishti@gmail.com"
    },
    {
        id: 285,
        number: 285,
        municipality: "Струга",
        schoolName: "ООУ „Нури Мазари“ с.Делогожда",
        address: "с. Делогожда",
        email: "nurimazari@yahoo.com"
    },
    {
        id: 286,
        number: 286,
        municipality: "Струга",
        schoolName: "ООУ „Орхан Џемаили“\nс.Горно Татеши",
        address: "с.Горно Татеши",
        email: "orhanxhemaili@yahoo.com"
    },
    {
        id: 287,
        number: 287,
        municipality: "Струга",
        schoolName: "ООУ „Зини Хани“ с.Велешта",
        address: "с.Велешта",
        email: "zini_hani@hotmail.com"
    },
    {
        id: 288,
        number: 288,
        municipality: "Вевчани",
        schoolName: "ООУ „Страшо Пинџур“ с.Вевчани",
        address: "с.Вевчани",
        email: "ouvevcani@gmail.com, oustrasopinxur@gmail.com"
    },
    {
        id: 289,
        number: 289,
        municipality: "Струмица",
        schoolName: "ОOУ „Даме Груев“ с.Кукулиш",
        address: "с.Куклиш бр. 99",
        email: "d.gruev@yahoo.com"
    },
    {
        id: 290,
        number: 290,
        municipality: "Струмица",
        schoolName: "ОOУ „Герас Цунев“ с.Просениково",
        address: "с.Просениково бр. 80",
        email: "g_cunev@yahoo.com"
    },
    {
        id: 291,
        number: 291,
        municipality: "Струмица",
        schoolName: "ОOУ „Гоце Делчев“ с.Вељуса",
        address: "с.Вељуса",
        email: "goce_delcev_eleusa@yahoo.com"
    },
    {
        id: 292,
        number: 292,
        municipality: "Струмица",
        schoolName: "ОOУ „Кирил и Методиј“ с.Дабиља",
        address: "с.Дабиљe бр.360",
        email: "skolodabile@yahoo.com"
    },
    {
        id: 293,
        number: 293,
        municipality: "Струмица",
        schoolName: "ООУ „Маршал Тито“",
        address: "ул. Кирил и Методиј, бр. 26",
        email: "mtitosr@yahoo.com"
    },
    {
        id: 294,
        number: 294,
        municipality: "Струмица",
        schoolName: "ООУ „Маршал Тито“ с.Муртино",
        address: "с. Муртино бр. 297",
        email: "ou.murtino@yahoo.com"
    },
    {
        id: 295,
        number: 295,
        municipality: "Струмица",
        schoolName: "ООУ „Никола Вапцаров“",
        address: "ул. Ценка Павлова, бр.1",
        email: "ounikolavapcarov@yahoo.com"
    },
    {
        id: 296,
        number: 296,
        municipality: "Струмица",
        schoolName: "ООУ „Сандо Масев“",
        address: "ул. Моша Пијаде, бр. 8",
        email: "sandomasev@yahoo.com"
    },
    {
        id: 297,
        number: 297,
        municipality: "Струмица",
        schoolName: "ООУ „Видое Подгорец“",
        address: "ул. 1 Мај, бр. 34",
        email: "vidoepodgorec@yahoo.com"
    },
    {
        id: 298,
        number: 298,
        municipality: "Струмица",
        schoolName: "ОМУ „Боро Џони“",
        address: "ул. Ѓорѓи Трајков бб",
        email: "muzickosr@yahoo.com"
    },
    {
        id: 299,
        number: 299,
        municipality: "Струмица",
        schoolName: "Завод Бања Банско",
        address: "Бања Банско бб",
        email: "juzzr-st@mtsp.gov.mk"
    },
    {
        id: 300,
        number: 300,
        municipality: "Василево",
        schoolName: "ООУ „Гоце Делчев“ с.Василево,",
        address: "с. Василево бр. 36",
        email: "oougd_vasilevo@yahoo.com"
    },
    {
        id: 301,
        number: 301,
        municipality: "Василево",
        schoolName: "ООУ „Атанас Нивачински“ с.Нова Маала",
        address: "с.Нова Маала",
        email: "oouatanas_nivicanski@hotmail.com"
    },
    {
        id: 302,
        number: 302,
        municipality: "Босилево",
        schoolName: "ООУ „Гоце Делчев“ с.Босилево",
        address: "Босилово бр.259",
        email: "gocedelcevb@yahoo.com"
    },
    {
        id: 303,
        number: 303,
        municipality: "Босилево",
        schoolName: "ООУ „Св.Кирил и Методиј“ с.Иловица",
        address: "с.Иловица",
        email: "svkirilimetodij@yahoo.com"
    },
    {
        id: 304,
        number: 304,
        municipality: "Босилево",
        schoolName: "ООУ „Борис Трајковски“ с.Моноспитово",
        address: "с. Моноспитово бр. 351",
        email: "оouboristrajkovski@gmail.com"
    },
    {
        id: 305,
        number: 305,
        municipality: "Ново Село",
        schoolName: "ООУ „Видео Подгорец“ с.Колешино",
        address: "с. Колешино бр. 88",
        email: "podgorec_vidoe@yahoo.com"
    },
    {
        id: 306,
        number: 306,
        municipality: "Ново Село",
        schoolName: "ООУ „Мануш Турновски“",
        address: "ул. Климент Охридски, бр. 4",
        email: "manushturnovski@gmail.com"
    },
    {
        id: 307,
        number: 307,
        municipality: "Ново Село",
        schoolName: "ПОУ „Св.Климент Охридски”",
        address: "ул. Маршал Тито, бр.103",
        email: "sv_klimentoh@yahoo.com"
    },
    {
        id: 308,
        number: 308,
        municipality: "Тетово",
        schoolName: "ООУ „Андреја Савевски-Ќиќиш“",
        address: "ул. Иво Рибар Лола, бр. 46",
        email: "um_askikis_tetovo@yahoo.com"
    },
    {
        id: 309,
        number: 309,
        municipality: "Тетово",
        schoolName: "ООУ „Братство Миѓени“",
        address: "ул. Љубе Божиновски Пиш, бр. 41",
        email: "bratstvomigjeni@tetova.gov.mk"
    },
    {
        id: 310,
        number: 310,
        municipality: "Тетово",
        schoolName: "ООУ „Ѓерѓ Кастриоти Скендербег“ с.Порој",
        address: "с.Порој",
        email: "shkolla291@hotmail.com"
    },
    {
        id: 311,
        number: 311,
        municipality: "Тетово",
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Иво Рибар Лола, бр. 96",
        email: "goce_delcev_te@hotmail.com"
    },
    {
        id: 312,
        number: 312,
        municipality: "Тетово",
        schoolName: "ООУ „Истикбал“",
        address: "ул. Браќа Миладинови, бр.85",
        email: "istikbal@tetova.gov.mk"
    },
    {
        id: 313,
        number: 313,
        municipality: "Тетово",
        schoolName: "ООУ „Кирил и Методиј“",
        address: "ул. Видое Смилевски Бато, бб",
        email: "um_kim_tet@yahoo.com"
    },
    {
        id: 314,
        number: 314,
        municipality: "Тетово",
        schoolName: "ООУ „Лирија“",
        address: "ул. Дервиш Цара, бр. 6",
        email: "liria.te@gmail.com"
    },
    {
        id: 315,
        number: 315,
        municipality: "Тетово",
        schoolName: "ООУ „Наим Фрашери“",
        address: "ул. 113, бр. 7",
        email: "naimfrasheri@tetova.gov.mk"
    },
    {
        id: 316,
        number: 316,
        municipality: "Тетово",
        schoolName: "ООУ „Беса“ с.Вешала",
        address: "с.Вешала",
        email: "shefajet_ramadani@hotmail.com"
    },
    {
        id: 317,
        number: 317,
        municipality: "Тетово",
        schoolName: "ООУ „Перпарими“ с.Речица",
        address: "с. Голема Речица",
        email: "shkollafilloreperparimi@yahoo.com"
    },
    {
        id: 318,
        number: 318,
        municipality: "Тетово",
        schoolName: "ООУ „Реџеп Вока“ с.Шипковица",
        address: "с. Шипковица",
        email: "rexhep_voka@mail.net.mk"
    },
    {
        id: 319,
        number: 319,
        municipality: "Тетово",
        schoolName: "ООУ „Рилиндја“ с.Селце, Тетово",
        address: "с.Селце",
        email: "rilindja@tetova.gov.mk"
    },
    {
        id: 320,
        number: 320,
        municipality: "Тетово",
        schoolName: "ДМУ„Тодор Скаловски-Тетоец„",
        address: "ул. Иво Лола Рибар, бр.118",
        email: "dmutetoec@gmail.com"
    },
    {
        id: 321,
        number: 321,
        municipality: "Желино",
        schoolName: "ООУ „Фан Ноли“ с.Требош",
        address: "с. Требош, бр.101 бб",
        email: "sh-fan.noli@hotmail.com"
    },
    {
        id: 322,
        number: 322,
        municipality: "Желино",
        schoolName: "ООУ „Хасан Тахсини“ с.Рогле",
        address: "с.Рогле",
        email: "htsz_2011@yahoo.com"
    },
    {
        id: 323,
        number: 323,
        municipality: "Желино",
        schoolName: "ООУ „Ибрахим Темо“ с.Стримница",
        address: "ул.101, бр.366 с.Стримница",
        email: "sh.f.ibrahim.temo@gmail.com"
    },
    {
        id: 324,
        number: 324,
        municipality: "Желино",
        schoolName: "ООУ „Луиѓ Гуракуќи“ с.Желино",
        address: "с. Желино",
        email: "luigjgurakuqi@gmail.com"
    },
    {
        id: 325,
        number: 325,
        municipality: "Желино",
        schoolName: "ООУ „Пашко Васа“ с.Групчин",
        address: "с. Групчин",
        email: "sh.f.pashkovasa@gmail.com"
    },
    {
        id: 326,
        number: 326,
        municipality: "Желино",
        schoolName: "ООУ„Раметула Амети“",
        address: "с. Чифлик",
        email: "shfkrametulameti@gmail.com"
    },
    {
        id: 327,
        number: 327,
        municipality: "Боговиње",
        schoolName: "ОOУ „Сами Фрашери“ с.Пирок",
        address: "с. Пирок",
        email: "samifrasheri.pirok@gmail.com"
    },
    {
        id: 328,
        number: 328,
        municipality: "Боговиње",
        schoolName: "ОOУ „Дервиш Цара“ с.Долно Палчиште",
        address: "с. Долно Палчиште",
        email: "dervishc1994@gmail.com; dervishcara@yahoo.com"
    },
    {
        id: 329,
        number: 329,
        municipality: "Боговиње",
        schoolName: "ООУ „Лирија“ с.Жеровјане",
        address: "ул. 101, бб с.Жеровјане",
        email: "liria1965@gmail.com"
    },
    {
        id: 330,
        number: 330,
        municipality: "Боговиње",
        schoolName: "OОУ „Абдил Фрашери“ с.Боговиње",
        address: "с. Боговиње",
        email: "abdyl_frasheri@yahoo.com"
    },
    {
        id: 331,
        number: 331,
        municipality: "Боговиње",
        schoolName: "ООУ „Сабедин Бајрами“ с.Камењане",
        address: "ул. 101, бб, с.Камењане",
        email: "sab_bajrami@yahoo.com"
    },
    {
        id: 332,
        number: 332,
        municipality: "Боговиње",
        schoolName: "OОУ „11 Октомври“ с.Урвич",
        address: "с.Урвич",
        email: "shf-11tetori@live.com"
    },
    {
        id: 333,
        number: 333,
        municipality: "Брвеница",
        schoolName: "ООУ „7 Марси“ с.Челопек",
        address: "с.Челопек",
        email: "ou7marsi@yahoo.com"
    },
    {
        id: 334,
        number: 334,
        municipality: "Брвеница",
        schoolName: "ООУ „Коста Рацин“ с.Брвеница",
        address: "ул. Браќа Стефановиќ,  бб",
        email: "kostaracin@yahoo.com"
    },
    {
        id: 335,
        number: 335,
        municipality: "Брвеница",
        schoolName: "ООУ „Гоце Делчев“ с.Стенче",
        address: "с. Стенче",
        email: "ougocedelcevstence@hotmail.com"
    },
    {
        id: 336,
        number: 336,
        municipality: "Јегуновце",
        schoolName: "ОOУ „Шемшево“ с.Шемшево",
        address: "с.Шемшово",
        email: "ousemsevo@hotmail.com"
    },
    {
        id: 337,
        number: 337,
        municipality: "Јегуновце",
        schoolName: "ООУ „Симче Настовски“ с.Вратница",
        address: "с.Вратница",
        email: "simcenastovski@yahoo.com"
    },
    {
        id: 338,
        number: 338,
        municipality: "Јегуновце",
        schoolName: "ОOУ „Алескандар Здравковски“ с.Јегуновце",
        address: "с.Јегуновце",
        email: "zdravkovskialeksandar@yahoo.com"
    },
    {
        id: 339,
        number: 339,
        municipality: "Теарце",
        schoolName: "ООУ „Екрем Чабеј“ с.Слатино",
        address: "ул. 103 бр. 6, с. Слатино",
        email: "refikhasani@gmail.com"
    },
    {
        id: 340,
        number: 340,
        municipality: "Теарце",
        schoolName: "ООУ „Фаик Коница“ с.Доброште",
        address: "с.Доброште",
        email: "p.s_faikkonica@hotmail.com"
    },
    {
        id: 341,
        number: 341,
        municipality: "Теарце",
        schoolName: "ООУ „Исмаил Ќемали“ с.Нераште",
        address: "с.Теарце",
        email: "ismail_qemali@hotmail.com"
    },
    {
        id: 342,
        number: 342,
        municipality: "Теарце",
        schoolName: "ООУ „Кирил Пејчиновиќ“ с.Теарце",
        address: "с.Теарце",
        email: "pskirilpejcinoviq@gmail.com"
    },
    {
        id: 343,
        number: 343,
        municipality: "Теарце",
        schoolName: "ООУ „Асдрени“ с.Глоѓ",
        address: "с.Глоѓи",
        email: "asdreni.shkolla@gmail.com,"
    },
    {
        id: 344,
        number: 344,
        municipality: "Велес",
        schoolName: "ООУ „Блаже Конески“",
        address: "ул. Љубљанска, бр. 1",
        email: "oublazekoneski@yahoo.com"
    },
    {
        id: 345,
        number: 345,
        municipality: "Велес",
        schoolName: "OОУ „Благоја Кирков“",
        address: "ул. Кресненско востание                                                                                                                                                                                              бр. 4",
        email: "blagojkirkov@yahoo.com"
    },
    {
        id: 346,
        number: 346,
        municipality: "Велес",
        schoolName: "ООУ „Јордан Хаџи Константинов-Џинот“",
        address: "ул. Иво Лола Рибар, бр. 2",
        email: "oudzinot@yahoo.com"
    },
    {
        id: 347,
        number: 347,
        municipality: "Велес",
        schoolName: "OОУ „Кирил и Митодиј“",
        address: "ул. Архиепископ Михаил, бр.156",
        email: "coukim@t-home.mk"
    },
    {
        id: 348,
        number: 348,
        municipality: "Велес",
        schoolName: "ОOУ „Рајко Жинзифов“ с.Горно Оризари",
        address: "ул. Сараевска, бб                                                                                                                                                                                                                        Горно Оризари",
        email: "rajkozinzifovveles@yahoo.com"
    },
    {
        id: 349,
        number: 349,
        municipality: "Велес",
        schoolName: "ООУ „Стојан Бурчевски Буридан“ с.Иванковци",
        address: "ул. Гоце Делчев, бб      с.Иванковци",
        email: "stojanburcevski@yahoo.com"
    },
    {
        id: 350,
        number: 350,
        municipality: "Велес",
        schoolName: "ООУ „Васил Главинов“",
        address: "ул. Никола Карев, бр. 2",
        email: "oouvasilglavinov@yahoo.com"
    },
    {
        id: 351,
        number: 351,
        municipality: "Велес",
        schoolName: "ОМУ „Стефан Гајдов“",
        address: "ул. Благој Нечев, бр. 8",
        email: "stefangajdov@yahoo.com"
    },
    {
        id: 352,
        number: 352,
        municipality: "Велес",
        schoolName: "ПОУ „Маца Овчарова“",
        address: "ул. Иво Лола Рибар, бр. 4",
        email: "poumacaovcarova@yahoo.com"
    },
    {
        id: 353,
        number: 353,
        municipality: "Чашка",
        schoolName: "ООУ „Петар Поп Арсов“ с.Богомила",
        address: "с.Богомила",
        email: "oupetarpoparsov@yahoo.com"
    },
    {
        id: 354,
        number: 354,
        municipality: "Чашка",
        schoolName: "ООУ „Тодор Јанев“ с.Чашка",
        address: "ул. 8 - ми Септември, бр.1",
        email: "outodorjanev@yahoo.com"
    },
    {
        id: 355,
        number: 355,
        municipality: "Чашка",
        schoolName: "ООУ „Лирија“ Г.Јаболчиште",
        address: "с. Горно Јаболчиште, бб",
        email: "oulirija@yahoo.com"
    },
    {
        id: 356,
        number: 356,
        municipality: "Градско",
        schoolName: "ООУ „Даме Груев“ с.Градско",
        address: "ул. Александар Македонски бр.68",
        email: "damegruevgradsko@yahoo.com"
    },
    {
        id: 357,
        number: 357,
        municipality: "Штип",
        schoolName: "ООУ „Димитар Влахов“",
        address: "ул. Сремски фронт, бб",
        email: "ou_dimitar_vlahov_stip@yahoo.com"
    },
    {
        id: 358,
        number: 358,
        municipality: "Штип",
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Иво Лола Рибар, бр.179",
        email: "ou_goce_delcev_stip@yahoo.com"
    },
    {
        id: 359,
        number: 359,
        municipality: "Штип",
        schoolName: "ООУ „Тошо Арсов“",
        address: "бул. ЈНА,  бб",
        email: "outosoarsov_stip@yahoo.com"
    },
    {
        id: 360,
        number: 360,
        municipality: "Штип",
        schoolName: "ООУ „Ванчо Прке“",
        address: "ул. Васил Главинов, бб",
        email: "ou_vanco_prke_stip@yahoo.com"
    },
    {
        id: 361,
        number: 361,
        municipality: "Штип",
        schoolName: "ООУ „Славејко Арсов“",
        address: "ул. Крушевска Република, бр.68",
        email: "ou_slavejkoarsov@yahoo.com"
    },
    {
        id: 362,
        number: 362,
        municipality: "Штип",
        schoolName: "ОМУ „Сергеј Михајлов“",
        address: "ул. Рајко Жинзифов, бб",
        email: "dmucsergejmihajlov_stip@yahoo.com"
    },
    {
        id: 363,
        number: 363,
        municipality: "Карбинци",
        schoolName: "ООУ „Страшо Пинџур“ с.Карбинци",
        address: "с.Карбинци",
        email: "s_pinjur@yahoo.com"
    }
];

module.exports = schools;