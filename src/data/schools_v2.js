const schools = [
    {
        id: 1,
        number: 1,
        schoolName: "ООУ „Дедо Иљо Малешевски“",
        address: "ул. Маршал Тито, бр. 66",
        municipality: "Берово",
        latitude: 41.7078168,
        longitude: 22.8551492,
        email: "dedo.iljo.malesevski@gmail.com"
    },
    {
        id: 2,
        number: 2,
        schoolName: "OОУ „Никола Петров Русински“ с.Русиново",
        address: "ул. Борис Кидрич, бр.1, с. Русиново",
        municipality: "Берово",
        latitude: 41.6861861,
        longitude: 22.8111072,
        email: "rusinski_rusinovo@yahoo.com"
    },
    {
        id: 3,
        number: 3,
        schoolName: "OОУ „Ванчо Китанов“",
        address: "ул. Дамјан Груев бр.1",
        municipality: "Пехчево",
        latitude: 41.762535,
        longitude: 22.8808708,
        email: "vanco.kitanov@yahoo.com"
    },
    {
        id: 4,
        number: 4,
        schoolName: "OОУ „Александар Турунџиев“ с.Кукуречани",
        address: "с.Кукуречани",
        municipality: "Битола",
        latitude: 41.099451,
        longitude: 21.3202838,
        email: "aturundzev@yahoo.com"
    },
    {
        id: 5,
        number: 5,
        schoolName: "OОУ „Даме Груев“",
        address: "ул. Ѓорче Петров, бр7",
        municipality: "Битола",
        latitude: 41.0338325,
        longitude: 21.344913,
        email: "oudamegruev@yahoo.com"
    },
    {
        id: 6,
        number: 6,
        schoolName: "OОУ „Елпида Караманди“",
        address: "ул. Васко Карангелески, бб",
        municipality: "Битола",
        latitude: 41.031412,
        longitude: 21.3124487,
        email: "ouekbt@gmail.com"
    },
    {
        id: 7,
        number: 7,
        schoolName: "OОУ „Гоце Делчев“",
        address: "ул. Виенска, бр.13",
        municipality: "Битола",
        latitude: 41.0284807,
        longitude: 21.3339911,
        email: "ou_gocedelcev_bt@hotmail.com, gocedelcevbt@gmail.com"
    },
    {
        id: 8,
        number: 8,
        schoolName: "OОУ „Ѓорѓи Сугарев“",
        address: "ул. Димитар Влахов, бр.32",
        municipality: "Битола",
        latitude: 41.0341646,
        longitude: 21.3335231,
        email: "gorgi_sugarev@yahoo.com"
    },
    {
        id: 9,
        number: 9,
        schoolName: "OОУ „Св.Кирил и Методиј“",
        address: "бул. 1-ви мај, бр.274",
        municipality: "Битола",
        latitude: 41.0309561,
        longitude: 21.3386463,
        email: "sv.kim.bitola@gmail.com"
    },
    {
        id: 10,
        number: 10,
        schoolName: "OОУ „Св.Климент Охридски“",
        address: "ул. Димче Лахчански, бб",
        municipality: "Битола",
        latitude: 41.0242387,
        longitude: 21.3092306,
        email: "ouklimentbt@yahoo.com"
    },
    {
        id: 11,
        number: 11,
        schoolName: "OОУ „Коле Канински“",
        address: "ул. Бранко Радичевиќ, бр.57",
        municipality: "Битола",
        latitude: 41.0257794,
        longitude: 21.3400032,
        email: "kolekaninski_bt@t-home.mk, ou.kolekaninski@gmail.com"
    },
    {
        id: 12,
        number: 12,
        schoolName: "OОУ „Крсте Петков Мисирков“",
        address: "с. Бистрица,",
        municipality: "Битола",
        latitude: 41.0338325,
        longitude: 21.344913,
        email: "ou.krstemisirkov@yahoo.com"
    },
    {
        id: 13,
        number: 13,
        schoolName: "OОУ „Стив Наумов“",
        address: "ул. Стив Наумов, бр.93",
        municipality: "Битола",
        latitude: 41.0274677,
        longitude: 21.3263793,
        email: "stivnaumov@gmail.com"
    },
    {
        id: 14,
        number: 14,
        schoolName: "OОУ „Тодор Ангелевски“",
        address: "ул. Илинденска, бр. 82",
        municipality: "Битола",
        latitude: 41.0370266,
        longitude: 21.3387182,
        email: "todorangelevski@hotmail.com"
    },
    {
        id: 15,
        number: 15,
        schoolName: "OОУ „Д-р Трифун Пановски“ Битола",
        address: "ул. Охридска, бр. 50",
        municipality: "Битола",
        latitude: 41.0309232,
        longitude: 21.3269155,
        email: "trifunpanovski@yahoo.com"
    },
    {
        id: 16,
        number: 16,
        schoolName: "Државно основно музичко училиште",
        address: "бул. 1-ви мај, бр. 110",
        municipality: "Битола",
        latitude: 41.0296773,
        longitude: 21.3292164,
        email: "muzickouciliste@yahoo.com"
    },
    {
        id: 17,
        number: 17,
        schoolName: "Завод за рехабилитација на деца со оштетен слух, говор и глас и други проблеми во развојот „Кочо Рацин”",
        address: "ул. Прилепска, бб",
        municipality: "Битола",
        latitude: 41.046305,
        longitude: 21.3526339,
        email: "uspeshnarehabilitacija@yahoo.com"
    },
    {
        id: 18,
        number: 18,
        schoolName: "ООУ „Браќа Миладиновци“ с.Добрушево",
        address: "с.Добрушево",
        municipality: "Могила",
        latitude: 41.1709411,
        longitude: 21.4813061,
        email: "ou.b.miladinovci@gmail.com"
    },
    {
        id: 19,
        number: 19,
        schoolName: "ООУ „Кочо Рацин“ с.Ивањевци",
        address: "с. Ивањевци",
        municipality: "Могила",
        latitude: 41.1767529,
        longitude: 21.3606562,
        email: "kracin.iv@gmail.com"
    },
    {
        id: 20,
        number: 20,
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Димче Могилч, бр.93 с. Могила",
        municipality: "Могила",
        latitude: 41.1119436,
        longitude: 21.3769118,
        email: "ucilistegocedelcev@yahoo.com"
    },
    {
        id: 21,
        number: 21,
        schoolName: "ООУ „Славко Лумбарковски“",
        address: "с.Новаци",
        municipality: "Новаци",
        latitude: 41.040614,
        longitude: 21.4545742,
        email: "slnovaci@gmail.com"
    },
    {
        id: 22,
        number: 22,
        schoolName: "ООУ „Св.Климент Охридски“",
        address: "ул. Партизанска, бр.33",
        municipality: "Македонски Брод",
        latitude: 41.6824592,
        longitude: 21.1477523,
        email: "oukliment@yahoo.com"
    },
    {
        id: 23,
        number: 23,
        schoolName: "ООУ„Мустафа Кемал Ататурк“",
        address: "с.Пласница",
        municipality: "Пласница",
        latitude: 41.4679589,
        longitude: 21.1179328,
        email: "mustafakemal.ataturk@yahoo.com"
    },
    {
        id: 24,
        number: 24,
        schoolName: "ООУ „Јунус Емре“ с.Лисичани",
        address: "с.Лисичани",
        municipality: "Пласница",
        latitude: 41.4632987,
        longitude: 21.0492534,
        email: "s_lisicani@yahoo.com"
    },
    {
        id: 25,
        number: 25,
        schoolName: "ООУ „Јосип Броз Тито“",
        address: "ул. 6- ти Ноември, бб",
        municipality: "Валандово",
        latitude: 41.3162392,
        longitude: 22.5592661,
        email: "ou_valandovo@yahoo.com"
    },
    {
        id: 26,
        number: 26,
        schoolName: "ООУ „Страшо Пинџур“ с.Јосифово",
        address: "ул. Страшо Пинџур, бб с.Јосифово",
        municipality: "Валандово",
        latitude: 41.332541,
        longitude: 22.4751524,
        email: "oustrasopindzur@yahoo.com"
    },
    {
        id: 27,
        number: 27,
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Љупчо Сантов, бр.36",
        municipality: "Виница",
        latitude: 41.8833475,
        longitude: 22.5122168,
        email: "gocedelcevvin@yahoo.com"
    },
    {
        id: 28,
        number: 28,
        schoolName: "ООУ „Кочо Рацин“ с.Блатец",
        address: "с.Блатец",
        municipality: "Виница",
        latitude: 41.8365598,
        longitude: 22.5769373,
        email: "kocoracin_blatec@yahoo.com"
    },
    {
        id: 29,
        number: 29,
        schoolName: "ООУ „Никола Парапунов“ с.Драгобраште",
        address: "Населено место без уличен систем бр.16 Драгобраште",
        municipality: "Виница",
        latitude: 41.8951769,
        longitude: 22.6049661,
        email: "p-nikola@t.mk"
    },
    {
        id: 30,
        number: 30,
        schoolName: "ООУ „Славчо Стојменски“",
        address: "ул. Бел Камен, бр. 7",
        municipality: "Виница",
        latitude: 41.8832851,
        longitude: 22.5033796,
        email: "slavco.stojmenski@t.mk"
    },
    {
        id: 31,
        number: 31,
        schoolName: "ООУ „Св.Климент Охридски“ с.Миравци",
        address: "ул. Гоце Делчев, бр.35",
        municipality: "Гевгелија",
        latitude: 41.3077811,
        longitude: 22.438087,
        email: "oumiravciepiskop@yahoo.com"
    },
    {
        id: 32,
        number: 32,
        schoolName: "ООУ „Крсте Мисирков“",
        address: "ул. Петар Мусев, бр.22",
        municipality: "Гевгелија",
        latitude: 41.1405686,
        longitude: 22.498248,
        email: "ou_krstemisirkov@yahoo.com"
    },
    {
        id: 33,
        number: 33,
        schoolName: "ООУ „Ристо Шуклев“ с.Негорци",
        address: "ул. Маршал Тито, бр. 22б с.Негорци",
        municipality: "Гевгелија",
        latitude: 41.183088,
        longitude: 22.4806513,
        email: "ouristosuklev@gmail.com"
    },
    {
        id: 34,
        number: 34,
        schoolName: "ООУ „Владо Кантарџиев“",
        address: "ул. Љубљанска, бр.4",
        municipality: "Гевгелија",
        latitude: 41.1464333,
        longitude: 22.5075606,
        email: "vlado_kantardziev@yahoo.com"
    },
    {
        id: 35,
        number: 35,
        schoolName: "ООМУ „Васо Карајанов“",
        address: "ул. Ристо Фаршинин,бр 41",
        municipality: "Гевгелија",
        latitude: 41.1451892,
        longitude: 22.4997467,
        email: "vasokarajanov@yahoo.com"
    },
    {
        id: 36,
        number: 36,
        schoolName: "ООУ „Кирил и Методиј“ с.Стојаково",
        address: "ул. Маршал Тито, бр. 60 с.Стојаково",
        municipality: "Богданци",
        latitude: 41.1561648,
        longitude: 22.5776821,
        email: "kirilimetodij@yahoo.com"
    },
    {
        id: 37,
        number: 37,
        schoolName: "ООУ „Петар Мусев“",
        address: "ул. Крушевска, бр. 64",
        municipality: "Богданци",
        latitude: 41.1997803,
        longitude: 22.5788987,
        email: "petarmusev@yahoo.com"
    },
    {
        id: 38,
        number: 38,
        schoolName: "ООУ „Кочо Рацин“ Нов Дојран",
        address: "ул. Моша Пијаде, бр.14",
        municipality: "Дојран",
        latitude: 41.2238589,
        longitude: 22.7027359,
        email: "kracin_dojran@yahoo.com"
    },
    {
        id: 39,
        number: 39,
        schoolName: "ООУ „Ѓон Бузуку“ с.Србиново",
        address: "с.Србиново",
        municipality: "Гостивар",
        latitude: 41.7060027,
        longitude: 20.9596405,
        email: "gjon_buzuku96@hotmail.com"
    },
    {
        id: 40,
        number: 40,
        schoolName: "ООУ „Чајле“ с.Чајле",
        address: "с.Чајле",
        municipality: "Гостивар",
        latitude: 41.8025541,
        longitude: 20.9089378,
        email: "infocajla@gmail.com"
    },
    {
        id: 41,
        number: 41,
        schoolName: "ООУ „Башкими -Единство“",
        address: "ул. Панче Попоски, бр 35",
        municipality: "Гостивар",
        latitude: 41.7901704,
        longitude: 20.9117877,
        email: "bashkimi-edinstvo@live.com"
    },
    {
        id: 42,
        number: 42,
        schoolName: "ООУ „Фаик Коница“ с.Дебреше",
        address: "ул. 100, бб \nс.Дебреше",
        municipality: "Гостивар",
        latitude: 41.8193917,
        longitude: 20.890342,
        email: "faikkonica@hotmail.com"
    },
    {
        id: 43,
        number: 43,
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Браќа Блажески, бр. 6",
        municipality: "Гостивар",
        latitude: 41.8025541,
        longitude: 20.9089378,
        email: "goce.delcev.gv@gmail.com"
    },
    {
        id: 44,
        number: 44,
        schoolName: "ООУ „Исмаил Ќемали“",
        address: "ул. Ленинградска, бб",
        municipality: "Гостивар",
        latitude: 41.7956499,
        longitude: 20.9068888,
        email: "ismailqemali_gv@yahoo.com"
    },
    {
        id: 45,
        number: 45,
        schoolName: "ООУ „Мустафа Кемал Ататурк“",
        address: "ул. Павле Аврамоски, бр. 52",
        municipality: "Гостивар",
        latitude: 41.7935063,
        longitude: 20.900928,
        email: "kemalataturk92@yahoo.com"
    },
    {
        id: 46,
        number: 46,
        schoolName: "ООУ „Прпарими“ с.Чегране",
        address: "с.Чегране",
        municipality: "Гостивар",
        latitude: 41.7899803,
        longitude: 20.9035192,
        email: "perparimicgr@gmail.com"
    },
    {
        id: 47,
        number: 47,
        schoolName: "ОOУ „Форино“ с.Форино",
        address: "с.Форино",
        municipality: "Гостивар",
        latitude: 41.824776,
        longitude: 20.9610952,
        email: "forinaskl@gmail.com"
    },
    {
        id: 48,
        number: 48,
        schoolName: "ООУ „Лирија“ с.Вруток",
        address: "с.Вруток",
        municipality: "Гостивар",
        latitude: 41.7665302,
        longitude: 20.8381555,
        email: "liria.vrutok@yahoo.com"
    },
    {
        id: 49,
        number: 49,
        schoolName: "ООМУ „Енвер Стафаи“",
        address: "ул. ЈНА, бр. 371",
        municipality: "Гостивар",
        latitude: 41.8025541,
        longitude: 20.9089378,
        email: "shfm.enverstafai@gmail.com"
    },
    {
        id: 50,
        number: 50,
        schoolName: "OОУ „Ѓорѓи Пулески“ с.Ростуше",
        address: "с.Ростуше",
        municipality: "Маврово и Ростуше",
        latitude: 41.6092427,
        longitude: 20.6012488,
        email: "gpulevski@gmail.com"
    },
    {
        id: 51,
        number: 51,
        schoolName: "ООУ „Блаже Конески“ с.Скидриње",
        address: "с. Скудриње",
        municipality: "Маврово и Ростуше",
        latitude: 41.5659648,
        longitude: 20.608698,
        email: "ahmedoski_a@yahoo.com"
    },
    {
        id: 52,
        number: 52,
        schoolName: "ОOУ „Денче Дејаноски“ с.Маврови Анови",
        address: "с.Маврови Анови",
        municipality: "Маврово и Ростуше",
        latitude: 41.7029969,
        longitude: 20.7576916,
        email: "dencedejanoski@yahoo.com"
    },
    {
        id: 53,
        number: 53,
        schoolName: "ООУ „Маршал Тито“ с.Жеровница",
        address: "с. Жировница",
        municipality: "Маврово и Ростуше",
        latitude: 42.9311844,
        longitude: 20.8049097,
        email: "o.u.zirovnica@gmail.com"
    },
    {
        id: 54,
        number: 54,
        schoolName: "ООУ „Врапчише“ с.Врапчиште",
        address: "с.Врапчиште",
        municipality: "Врапчиште",
        latitude: 41.8384178,
        longitude: 20.8858003,
        email: "cedefiliposki@yahoo.com"
    },
    {
        id: 55,
        number: 55,
        schoolName: "ООУ „Мехмет Дерала“ с. Градец",
        address: "ул. 101, бб с.Градец",
        municipality: "Врапчиште",
        latitude: 41.896391,
        longitude: 20.9049833,
        email: "mderalla@yahoo.com"
    },
    {
        id: 56,
        number: 56,
        schoolName: "ОOУ „Сали Лиси“ с.Добридол",
        address: "ул. 101, бб с.Добридол",
        municipality: "Врапчиште",
        latitude: 41.8660127,
        longitude: 20.8880753,
        email: "sali.lisi@hotmail.com"
    },
    {
        id: 57,
        number: 57,
        schoolName: "ООУ „Наим Фрашери“ с.Неготино",
        address: "с.Неготино",
        municipality: "Врапчиште",
        latitude: 41.8782831,
        longitude: 20.8867002,
        email: "naim_frasheri@mail.net.mk"
    },
    {
        id: 58,
        number: 58,
        schoolName: "ООУ „Братство Единство“",
        address: "ул. Велко Влаховиќ, бр.16",
        municipality: "Дебар",
        latitude: 41.5215275,
        longitude: 20.5257473,
        email: "shfk.bv.diber@gmail.com"
    },
    {
        id: 59,
        number: 59,
        schoolName: "ООУ „Ристе Ристевски“ с.Долно Костоврасти",
        address: "с.Долно Косоврасти",
        municipality: "Дебар",
        latitude: 41.5392746,
        longitude: 20.5848608,
        email: "ou_riste_risteski@yahoo.com"
    },
    {
        id: 60,
        number: 60,
        schoolName: "ООУ „Саид Најдени“",
        address: "ул. Ице Ристевски, бб",
        municipality: "Дебар",
        latitude: 41.5197573,
        longitude: 20.5289,
        email: "saidnajdeni@yahoo.com"
    },
    {
        id: 61,
        number: 61,
        schoolName: "ООУ „Мустафа Кемал Ататурк“",
        address: "с.Центар Жупа",
        municipality: "Центар Жупа",
        latitude: 41.4797529,
        longitude: 20.5589182,
        email: "ouataturk@yahoo.com"
    },
    {
        id: 62,
        number: 62,
        schoolName: "ООУ „Неџати Зекирија“ с.Коџаџик",
        address: "с. Коџаџик",
        municipality: "Центар Жупа",
        latitude: 41.4427507,
        longitude: 20.5993865,
        email: "necatizekeriya@hotmail.com"
    },
    {
        id: 63,
        number: 63,
        schoolName: "ООУ „Св.Климент Охридски“",
        address: "ул. Методи Митевски Брицо, бб",
        municipality: "Делчево",
        latitude: 41.9663499,
        longitude: 22.778137,
        email: "svklohridskidelcevo@yahoo.com"
    },
    {
        id: 64,
        number: 64,
        schoolName: "OОУ „Ванчо Прке“",
        address: "ул. Никола Јонков Вапцаро, бб",
        municipality: "Делчево",
        latitude: 41.9678191,
        longitude: 22.7739623,
        email: "ouvancoprkedelcevo@yahoo.com"
    },
    {
        id: 65,
        number: 65,
        schoolName: "ОOУ „Св.Кирил и Методиј“",
        address: "ул. Маршал Тито, бр. 2",
        municipality: "Македонска Каменица",
        latitude: 42.0226285,
        longitude: 22.5881116,
        email: "osnovno_mkamenica@yahoo.com"
    },
    {
        id: 66,
        number: 66,
        schoolName: "ООУ „Браќа Миладиновци“ с.Жван",
        address: "с.Жван",
        municipality: "Демир Хисар",
        latitude: 41.2949621,
        longitude: 21.1175466,
        email: "brakamiladinovcizvan@yahoo.com"
    },
    {
        id: 67,
        number: 67,
        schoolName: "ОOУ „Даме Груев“ с Смилево",
        address: "с.Смилево",
        municipality: "Демир Хисар",
        latitude: 41.1541618,
        longitude: 21.1108701,
        email: "dameg@ymail.com"
    },
    {
        id: 68,
        number: 68,
        schoolName: "ОOУ „Гоце Делчев“",
        address: "ул. Битолска, бб",
        municipality: "Демир Хисар",
        latitude: 41.2180167,
        longitude: 21.2032056,
        email: "gocedelcevdh@t-home.mk"
    },
    {
        id: 69,
        number: 69,
        schoolName: "ОOУ „Димката Ангелов- Габерот“ с.Ваташа",
        address: "ул. Страшо Пинџур, бр.186 с.Ваташа",
        municipality: "Кавадарци",
        latitude: 41.4201026,
        longitude: 22.017545,
        email: "dag_vatasa@yahoo.com"
    },
    {
        id: 70,
        number: 70,
        schoolName: "ООУ ,,Димката Ангелов Габерот“",
        address: "ул. Браќа Хаџи Тефови, бр. 40",
        municipality: "Кавадарци",
        latitude: 41.4320088,
        longitude: 22.0141779,
        email: "dimkatagaberot@yahoo.com"
    },
    {
        id: 71,
        number: 71,
        schoolName: "ООУ „Гоце Делчев“",
        address: "бул.Цветан Димов, бр.1",
        municipality: "Кавадарци",
        latitude: 41.4411665,
        longitude: 22.0068565,
        email: "ougdelcevkavadarci@yahoo.com"
    },
    {
        id: 72,
        number: 72,
        schoolName: "ООУ „Страшо Пинџур“",
        address: "ул. Димката Ангелов Габерот, бр.3",
        municipality: "Кавадарци",
        latitude: 41.4346434,
        longitude: 22.0158376,
        email: "strasop@hotmail.com"
    },
    {
        id: 73,
        number: 73,
        schoolName: "OОУ „Тошо Велков Пепето“",
        address: "ул. Нов Белград, бб",
        municipality: "Кавадарци",
        latitude: 41.4374422,
        longitude: 22.0172621,
        email: "tosovelkovpepeto@yahoo.com"
    },
    {
        id: 74,
        number: 74,
        schoolName: "ООУ „Тоде Хаџи Тефов“",
        address: "ул. Пионерска, бр.24",
        municipality: "Кавадарци",
        latitude: 41.4311187,
        longitude: 22.0079028,
        email: "todehadzitefov@yahoo.com"
    },
    {
        id: 75,
        number: 75,
        schoolName: "ООМБУ „Лазо Мицев-Рале“",
        address: "ул. Браќа Миладиновци, бб",
        municipality: "Кавадарци",
        latitude: 41.436008,
        longitude: 22.0127035,
        email: "lazomicev_rale@yahoo.com"
    },
    {
        id: 76,
        number: 76,
        schoolName: "ООУ „Пере Тошев“",
        address: "ул. Пере Тошев, бр.2",
        municipality: "Росоман",
        latitude: 41.5164019,
        longitude: 21.9444293,
        email: "peretosev_rosoman@yahoo.com"
    },
    {
        id: 77,
        number: 77,
        schoolName: "ООУ „Кузман Јосифовски Питу“",
        address: "ул. 4-ти Јули, бб",
        municipality: "Кичево",
        latitude: 41.5093579,
        longitude: 20.9560657,
        email: "oukjpitu@t.mk"
    },
    {
        id: 78,
        number: 78,
        schoolName: "ООУ „Санде Штрејоски“",
        address: "ул.11 Септември, бр.143",
        municipality: "Кичево",
        latitude: 41.5129112,
        longitude: 20.9525065,
        email: "sandesterjoski@gmail.com"
    },
    {
        id: 79,
        number: 79,
        schoolName: "ООУ „Д-р Владимир Полежиноски“",
        address: "ул. Арсо Војвода, бб",
        municipality: "Кичево",
        latitude: 41.5047557,
        longitude: 20.9551637,
        email: "vladimirpolezinoski@yahoo.com"
    },
    {
        id: 80,
        number: 80,
        schoolName: "ООУ „Христо Узунов“ с.Другово",
        address: "с. Другово",
        municipality: "Кичево",
        latitude: 41.4835655,
        longitude: 20.9223086,
        email: "hristouzunov.cou.drugovo@gmail.com"
    },
    {
        id: 81,
        number: 81,
        schoolName: "ООУ „Ѓерѓ Кастриоти Скендербеу“ с.Србица",
        address: "с.Србица",
        municipality: "Кичево",
        latitude: 41.5851707,
        longitude: 21.0296474,
        email: "gkskenderbeu@gmail.com"
    },
    {
        id: 82,
        number: 82,
        schoolName: "ООУ „Милто Ѓура“ с.Стрелци",
        address: "с.Стрелци",
        municipality: "Кичево",
        latitude: 41.5420212,
        longitude: 21.0020772,
        email: "milto.gurra@yahoo.com"
    },
    {
        id: 83,
        number: 83,
        schoolName: "ООУ „Наим Фрашери“ с.Јагол Доленци",
        address: "с.Јагол Доленци",
        municipality: "Кичево",
        latitude: 41.6281083,
        longitude: 21.0158622,
        email: "naimbejfrasheri@gmail.com"
    },
    {
        id: 84,
        number: 84,
        schoolName: "ООУ „Фаик Коница“ с.Грешница",
        address: "с.Грешница",
        municipality: "Кичево",
        latitude: 41.8193917,
        longitude: 20.890342,
        email: "fkonica@hotmail.com"
    },
    {
        id: 85,
        number: 85,
        schoolName: "ООУ „Реџо Рушит Зајази“ с.Зајас",
        address: "с.Зајас",
        municipality: "Кичево",
        latitude: 41.5984992,
        longitude: 20.9552974,
        email: "shkollazajaz@yahoo.com"
    },
    {
        id: 86,
        number: 86,
        schoolName: "ОМУ „Ристо Јурков“",
        address: "ул. Љупчо Сантов, бб",
        municipality: "Кочани",
        latitude: 41.9197832,
        longitude: 22.4134641,
        email: "risto_jurukov@t.mk"
    },
    {
        id: 87,
        number: 87,
        schoolName: "ООУ „Св.Кирил и Методиј“",
        address: "ул. Глигор Апостолов - Гочо, бр.33",
        municipality: "Кочани",
        latitude: 41.9137569,
        longitude: 22.4103424,
        email: "sv.kirilimetodijkm@yahoo.com"
    },
    {
        id: 88,
        number: 88,
        schoolName: "ООУ „Крсте Петков Мисирков“ с.Оризари",
        address: "ул. Маршал Тито, бр. 20 с.Оризари",
        municipality: "Кочани",
        latitude: 41.9249365,
        longitude: 22.444513,
        email: "orizari_kpmisirkov@yahoo.com"
    },
    {
        id: 89,
        number: 89,
        schoolName: "ООУ „Малина Попиванова“ Кочани",
        address: "ул.Тодосије Паунов, бр.95",
        municipality: "Кочани",
        latitude: 41.9142112,
        longitude: 22.4224024,
        email: "malinapopivanova@yahoo.com"
    },
    {
        id: 90,
        number: 90,
        schoolName: "ООУ „Никола Карев“",
        address: "ул. Никола Карев, бр.17",
        municipality: "Кочани",
        latitude: 41.9136533,
        longitude: 22.4132209,
        email: "nikolakarev_1957@yahoo.com"
    },
    {
        id: 91,
        number: 91,
        schoolName: "ООУ „Раде Кратовче“ Кочани",
        address: "ул. Борис Трајковски, бр. 42",
        municipality: "Кочани",
        latitude: 41.9234047,
        longitude: 22.4109253,
        email: "radekratovce@gmail.com"
    },
    {
        id: 92,
        number: 92,
        schoolName: "ООУ „Синиша Стоилов“",
        address: "ул. Генерал Апостолски, бб",
        municipality: "Зрновци",
        latitude: 41.8535019,
        longitude: 22.4437679,
        email: "sinisastoilov@yahoo.com"
    },
    {
        id: 93,
        number: 93,
        schoolName: "ООУ „Климент Охридски“ с.Облешево",
        address: "ул. Маршал Тито, бр. 29",
        municipality: "Чешиново Облешево",
        latitude: 41.8839401,
        longitude: 22.3340563,
        email: "k.o.oblesevo@gmail.com"
    },
    {
        id: 94,
        number: 94,
        schoolName: "ООУ „Страшо Пинџур“ с.Соколарци",
        address: "ул. Маршал Тито, бр.4",
        municipality: "Чешиново Облешево",
        latitude: 41.8946963,
        longitude: 22.2784945,
        email: "strashopindjur@gmail.com"
    },
    {
        id: 95,
        number: 95,
        schoolName: "ОOУ „Кочо Рацин“",
        address: "ул. Михаило Апостолски, бр.11",
        municipality: "Кратово",
        latitude: 42.0796253,
        longitude: 22.1768636,
        email: "skolokratovo@gmail.com"
    },
    {
        id: 96,
        number: 96,
        schoolName: "ООУ „Илинден“",
        address: "ул. Наско Тамбурков, бр. 80",
        municipality: "Крива Паланка",
        latitude: 42.1968449,
        longitude: 22.3241838,
        email: "ouilinden@yahoo.com"
    },
    {
        id: 97,
        number: 97,
        schoolName: "ОOУ „Јоаким Крчовски“",
        address: "ул. Св.Јоаким Осоговски, бр.139",
        municipality: "Крива Паланка",
        latitude: 42.2035353,
        longitude: 22.3343552,
        email: "oujoakimkrcovski@yahoo.com"
    },
    {
        id: 98,
        number: 98,
        schoolName: "ОOУ „Христијан Тодоровски Карпош“",
        address: "с. Ранковце",
        municipality: "Ранковце",
        latitude: 42.1808141,
        longitude: 22.0953297,
        email: "htodorovskikarpos@yahoo.com"
    },
    {
        id: 99,
        number: 99,
        schoolName: "ООУ „Св.Кирил и Методиј“ с.Бучин",
        address: "с. Бучин",
        municipality: "Крушево",
        latitude: 41.2759033,
        longitude: 21.315057,
        email: "kmetodij@yahoo.com"
    },
    {
        id: 100,
        number: 100,
        schoolName: "ООУ „Никола Карев“",
        address: "ул. Шула Мина, бр.6а",
        municipality: "Крушево",
        latitude: 41.3736929,
        longitude: 21.2473869,
        email: "nkarev@t-home.mk nkarev_krusevo@hotmail.com"
    },
    {
        id: 101,
        number: 101,
        schoolName: "ООУ „11 Октомври“",
        address: "ул. Тодор Велков, бб",
        municipality: "Куманово",
        latitude: 42.1388163,
        longitude: 21.7158189,
        email: "oou11oktomvrikumanovo@gmail.com"
    },
    {
        id: 102,
        number: 102,
        schoolName: "ООУ „Бајрам Шабани“",
        address: "ул. Карл Маркс, бр. 52",
        municipality: "Куманово",
        latitude: 42.1339718,
        longitude: 21.7138598,
        email: "b.shabani-ku@hotmail.com"
    },
    {
        id: 103,
        number: 103,
        schoolName: "ООУ „Браќа Миладиновци“",
        address: "ул. Народна Револуција, бр.43",
        municipality: "Куманово",
        latitude: 42.1327161,
        longitude: 21.7194271,
        email: "brakamiladinovci_ku@yahoo.com"
    },
    {
        id: 104,
        number: 104,
        schoolName: "ООУ „Браќа Рибар“ с.Табановце",
        address: "с.Табановце",
        municipality: "Куманово",
        latitude: 42.2112717,
        longitude: 21.71455,
        email: "braca_ribar@yahoo.com"
    },
    {
        id: 105,
        number: 105,
        schoolName: "ООУ „Јероним Дерада“ с.Черкез",
        address: "с.Черкез",
        municipality: "Куманово",
        latitude: 42.0732613,
        longitude: 21.7853143,
        email: "jeronimderada09@hotmail.com"
    },
    {
        id: 106,
        number: 106,
        schoolName: "ООУ „Карпош“ с.Умин Дол",
        address: "с.Умин Дол",
        municipality: "Куманово",
        latitude: 42.0871626,
        longitude: 21.6247339,
        email: "karpos_umindol@yahoo.com"
    },
    {
        id: 107,
        number: 107,
        schoolName: "ООУ „Кирил и Методиј“ с.Романовце",
        address: "с.Романовце",
        municipality: "Куманово",
        latitude: 42.0888652,
        longitude: 21.6934172,
        email: "kiril.metodij@mail.net.mk"
    },
    {
        id: 108,
        number: 108,
        schoolName: "ООУ „Кочо Рацин“ Куманово",
        address: "ул. Никшичка, бб",
        municipality: "Куманово",
        latitude: 42.1187106,
        longitude: 21.733528,
        email: "oukocoracin05@yahoo.com"
    },
    {
        id: 109,
        number: 109,
        schoolName: "ООУ „Крсте Мисирков“",
        address: "ул. Народна револуција, бб",
        municipality: "Куманово",
        latitude: 42.132622,
        longitude: 21.7191095,
        email: "krstemisirkov@yahoo.com"
    },
    {
        id: 110,
        number: 110,
        schoolName: "ООУ „Магдалена Антова“ с.Крапош",
        address: "ул. 110, бр.5",
        municipality: "Куманово",
        latitude: 42.1538105,
        longitude: 21.7357545,
        email: "magdalenaantova@yahoo.com"
    },
    {
        id: 111,
        number: 111,
        schoolName: "ООУ „Битолски Конгрес“ с.Лопате",
        address: "с.Лопате",
        municipality: "Куманово",
        latitude: 42.1502821,
        longitude: 21.664582,
        email: "oukm.drejtori@yahoo.com"
    },
    {
        id: 112,
        number: 112,
        schoolName: "ООУ „Наим Фрашери“",
        address: "ул. Наим Фрашери, бб",
        municipality: "Куманово",
        latitude: 42.1310943,
        longitude: 21.7096351,
        email: "naimfrasheri_ku@hotmail.com"
    },
    {
        id: 113,
        number: 113,
        schoolName: "ООУ „Толи Зордумис“",
        address: "ул. Боро Прцан, бр.38",
        municipality: "Куманово",
        latitude: 42.1322533,
        longitude: 21.7177713,
        email: "tolikumanovo@gmail.com"
    },
    {
        id: 114,
        number: 114,
        schoolName: "ООУ „Вера Которка“ с.Клечовце",
        address: "Населено место без уличен систем с.Клечевце",
        municipality: "Куманово",
        latitude: 44.8225401,
        longitude: 26.8234952,
        email: "vera.kotorka@gmail.com"
    },
    {
        id: 115,
        number: 115,
        schoolName: "ООУ „Вук Караџиќ“ Куманово",
        address: "ул. Браќа Филиповиќ, бр.17",
        municipality: "Куманово",
        latitude: 42.1311158,
        longitude: 21.71032,
        email: "ouvk60@yahoo.com"
    },
    {
        id: 116,
        number: 116,
        schoolName: "ООУ „Христијан Карпош“",
        address: "ул. Радоје Димиќ, бб",
        municipality: "Куманово",
        latitude: 42.1386343,
        longitude: 21.7325556,
        email: "hrkarposku@gmail.com"
    },
    {
        id: 117,
        number: 117,
        schoolName: "ОМУ „Панче Пешев“ Куманово",
        address: "ул. Братство Единство, бр.1",
        municipality: "Куманово",
        latitude: 42.1380626,
        longitude: 21.7198204,
        email: "uomopancepesev@yahoo.com"
    },
    {
        id: 118,
        number: 118,
        schoolName: "ООУ „Дитурија“",
        address: "с. Липково",
        municipality: "Липково",
        latitude: 42.2006626,
        longitude: 21.6183755,
        email: "dituria_lik@yahoo.com"
    },
    {
        id: 119,
        number: 119,
        schoolName: "ООУ„Култура“ с.Матејче",
        address: "с. Матејче",
        municipality: "Липково",
        latitude: 42.1242854,
        longitude: 21.5930365,
        email: "shfkulturamatec@gmail.com"
    },
    {
        id: 120,
        number: 120,
        schoolName: "OOУ„Антон Зако Чајупи“ с.Отља",
        address: "с.Отља",
        municipality: "Липково",
        latitude: 42.1431329,
        longitude: 21.5876991,
        email: "antonzako@yahoo.com"
    },
    {
        id: 121,
        number: 121,
        schoolName: "ООУ„7 Марси“ с.Опае",
        address: "с.Опае",
        municipality: "Липково",
        latitude: 42.1614824,
        longitude: 21.6556388,
        email: "shfk7marsi@gmail.com"
    },
    {
        id: 122,
        number: 122,
        schoolName: "ООУ„Фаик Коница“ с.Слупчане",
        address: "с.Слупчане",
        municipality: "Липково",
        latitude: 42.173853,
        longitude: 21.6288093,
        email: "faik.konica@live.com"
    },
    {
        id: 123,
        number: 123,
        schoolName: "ООУ„Рилиндја“ с.Љојане",
        address: "с.Љојане",
        municipality: "Липково",
        latitude: 42.1561352,
        longitude: 21.5870744,
        email: "shf_rilindja@hotmail.com"
    },
    {
        id: 124,
        number: 124,
        schoolName: "ООУ„5 Октомври“",
        address: "с.Никуштак",
        municipality: "Липково",
        latitude: 42.0817822,
        longitude: 21.5930365,
        email: "shfk5tetori@gmail.com"
    },
    {
        id: 125,
        number: 125,
        schoolName: "ООУ„Христијан Тодоровски Карпош“ с.Драгоманце",
        address: "с.Драгоманце, бб",
        municipality: "Старо Нагоричане",
        latitude: 42.0029617,
        longitude: 21.3977787,
        email: "ouh.karpos_dragomance@yahoo.com"
    },
    {
        id: 126,
        number: 126,
        schoolName: "ООУ„Христијан Карпош“ с.Младо Нагоричане",
        address: "с.Младо Нагоричане",
        municipality: "Старо Нагоричане",
        latitude: 42.1717928,
        longitude: 21.8111819,
        email: "htkarpos_mln@yahoo.com"
    },
    {
        id: 127,
        number: 127,
        schoolName: "OOУ„Светозар Марковиќ“",
        address: "с. Старо Нагоричане",
        municipality: "Старо Нагоричане",
        latitude: 42.2002198,
        longitude: 21.8285391,
        email: "svetozar_markovic_mk@yahoo.com"
    },
    {
        id: 128,
        number: 128,
        schoolName: "ООУ„Гоце Делчев“",
        address: "ул. Маршал Тито, бр.117",
        municipality: "Неготино",
        latitude: 41.4810977,
        longitude: 22.0841135,
        email: "gocedelcevnegotino@gmail.com"
    },
    {
        id: 129,
        number: 129,
        schoolName: "ООУ„Страшо Пинџур“",
        address: "ул. Партизанска, бр.146",
        municipality: "Неготино",
        latitude: 41.4869804,
        longitude: 22.0936431,
        email: "spingur_negotino@yahoo.com"
    },
    {
        id: 130,
        number: 130,
        schoolName: "ООМУ„Владимир Арсовски“",
        address: "ул.Маршал Тито, бр.102",
        municipality: "Неготино",
        latitude: 41.482922,
        longitude: 22.092349,
        email: "vladoarsov@yahoo.com"
    },
    {
        id: 131,
        number: 131,
        schoolName: "ООУ„Димче А.Габерот“",
        address: "ул. Маршал Тито, бр.11",
        municipality: "Демир Капија",
        latitude: 41.4094504,
        longitude: 22.2439178,
        email: "gaberot_dkapija@yahoo.com"
    },
    {
        id: 132,
        number: 132,
        schoolName: "ООУ,,Живко Чинго,, с. Велгошти",
        address: "с. Велгошти",
        municipality: "Охрид",
        latitude: 41.1314755,
        longitude: 20.8376534,
        email: "ou_zcingo@yahoo.com"
    },
    {
        id: 133,
        number: 133,
        schoolName: "ООУ „Братство Единство“",
        address: "ул. 7 Ноември, бр.85",
        municipality: "Охрид",
        latitude: 41.1191432,
        longitude: 20.8049136,
        email: "bratstvoe@yahoo.com"
    },
    {
        id: 134,
        number: 134,
        schoolName: "ООУ„Григор Прличев“",
        address: "ул. Димитар Влахов, бр.65",
        municipality: "Охрид",
        latitude: 41.1136368,
        longitude: 20.8064157,
        email: "grigorprlicev@yahoo.com"
    },
    {
        id: 135,
        number: 135,
        schoolName: "ООУ„Христо Узунов“",
        address: "ул. Питу Гули,бр.128",
        municipality: "Охрид",
        latitude: 41.1194914,
        longitude: 20.8116949,
        email: "ouhuzunov@yahoo.com"
    },
    {
        id: 136,
        number: 136,
        schoolName: "ООУ„Климент Охридски“",
        address: "ул. Климентов Универзитет, бб",
        municipality: "Охрид",
        latitude: 41.113539,
        longitude: 20.7979384,
        email: "svklimentohridski108@yahoo.com"
    },
    {
        id: 137,
        number: 137,
        schoolName: "ООУ „Кочо Рацин“",
        address: "ул.130, бр.24",
        municipality: "Охрид",
        latitude: 41.111232,
        longitude: 20.792259,
        email: "ouracin_oh@yahoo.com"
    },
    {
        id: 138,
        number: 138,
        schoolName: "ООУ „ Св. Наум Охридски“ с.Пештани",
        address: "с.Пештани",
        municipality: "Охрид",
        latitude: 41.0279222,
        longitude: 20.8127316,
        email: "ounohridski@yahoo.com"
    },
    {
        id: 139,
        number: 139,
        schoolName: "ООУ „Ванчо Николески“ с.Лескоец",
        address: "с.Лескоец",
        municipality: "Охрид",
        latitude: 41.1495911,
        longitude: 20.8309633,
        email: "ou_vnikoleski@yahoo.com"
    },
    {
        id: 140,
        number: 140,
        schoolName: "ОМУ „Методи Патче“",
        address: "ул. Никола Карев бр.4",
        municipality: "Охрид",
        latitude: 41.1118484,
        longitude: 20.809755,
        email: "metodipatce@yahoo.com"
    },
    {
        id: 141,
        number: 141,
        schoolName: "ООУ„Дебрца“ с.Белчишта",
        address: "с. Белчишта 6344",
        municipality: "Дебрца",
        latitude: 41.2799161,
        longitude: 20.8300988,
        email: "oudebrca@yahoo.com"
    },
    {
        id: 142,
        number: 142,
        schoolName: "ООУ„Страшо Пинџур“ с. Мало Коњари",
        address: "с. Мало Коњари",
        municipality: "Прилеп",
        latitude: 41.3370918,
        longitude: 21.4629641,
        email: "pindzurstraso@yahoo.com"
    },
    {
        id: 143,
        number: 143,
        schoolName: "ООУ„Блаже Конески“",
        address: "ул. Самоилова, бр. 15",
        municipality: "Прилеп",
        latitude: 41.3510059,
        longitude: 21.5372446,
        email: "oublazekoneski@gmail.com"
    },
    {
        id: 144,
        number: 144,
        schoolName: "ООУ„Добре Јованоски“",
        address: "ул.11 Октомври, бр.143",
        municipality: "Прилеп",
        latitude: 41.3532734,
        longitude: 21.5522799,
        email: "ou_dobrejovanoski_pp@yahoo.com"
    },
    {
        id: 145,
        number: 145,
        schoolName: "ООУ„Гоце Делчев“",
        address: "ул. Мечкин Камен, бр.2",
        municipality: "Прилеп",
        latitude: 41.3427915,
        longitude: 21.5681633,
        email: "ou_gocedelcev@yahoo.com"
    },
    {
        id: 146,
        number: 146,
        schoolName: "ООУ„Кире Гаврилоски-Јане“",
        address: "ул. Јоска Јорданоски, бр.46",
        municipality: "Прилеп",
        latitude: 41.3477301,
        longitude: 21.5609511,
        email: "oou.kgjane@yahoo.com"
    },
    {
        id: 147,
        number: 147,
        schoolName: "ООУ„Кирил и Методиј“ с. Канатларци",
        address: "с. Канатларци",
        municipality: "Прилеп",
        latitude: 41.2125475,
        longitude: 21.5021144,
        email: "kirilimetodija@yahoo.com"
    },
    {
        id: 148,
        number: 148,
        schoolName: "ООУ„Кочо Рацин“",
        address: "ул. Борка Талески, бр.64",
        municipality: "Прилеп",
        latitude: 41.343465,
        longitude: 21.5546088,
        email: "kocoracinprilep@yahoo.com"
    },
    {
        id: 149,
        number: 149,
        schoolName: "OOУ „Климент Охридски“",
        address: "ул. Ленин, бб",
        municipality: "Прилеп",
        latitude: 41.3459494,
        longitude: 21.5482275,
        email: "oukohridski@t-home.mk"
    },
    {
        id: 150,
        number: 150,
        schoolName: "ООУ„Круме Волнароски“ с.Тополчани",
        address: "ул. Маршал Тито, бр.6, с.Тополчани",
        municipality: "Прилеп",
        latitude: 41.2258807,
        longitude: 21.4321952,
        email: "krumevolnaroski@yahoo.com"
    },
    {
        id: 151,
        number: 151,
        schoolName: "ООУ „Рампо Левката“",
        address: "ул. Цар Самоил, бр.1а",
        municipality: "Прилеп",
        latitude: 41.32593,
        longitude: 21.5770344,
        email: "rampolevkata@gmail.com"
    },
    {
        id: 152,
        number: 152,
        schoolName: "ООМУ„Ордан Михајлосkи-Оцка“",
        address: "ул. Орде Тутески, бр.19",
        municipality: "Прилеп",
        latitude: 41.3444542,
        longitude: 21.5537095,
        email: "muzicko_pp@yahoo.com"
    },
    {
        id: 153,
        number: 153,
        schoolName: "ОOУ „Ѓорче Петров“ с.Ропотово",
        address: "ул. Андон Иваноски, бб с.Ропотово",
        municipality: "Долнени",
        latitude: 42.0069781,
        longitude: 21.3649879,
        email: "ougpetrov@gmail.com"
    },
    {
        id: 154,
        number: 154,
        schoolName: "OОУ „Мирче Ацев“ с.Лажани",
        address: "с. Лажани",
        municipality: "Долнени",
        latitude: 41.446651,
        longitude: 21.3045716,
        email: "lazanimirceacev@yahoo.com"
    },
    {
        id: 155,
        number: 155,
        schoolName: "ООУ „Пецо Даскалот“ с.Долнени",
        address: "с. Долнени",
        municipality: "Долнени",
        latitude: 41.4640935,
        longitude: 21.4037407,
        email: "pecodaskalot@yahoo.com"
    },
    {
        id: 156,
        number: 156,
        schoolName: "ООУ „Пере Тошев“ с.Дупјачани",
        address: "с. Дупјачани",
        municipality: "Долнени",
        latitude: 41.4399282,
        longitude: 21.5214912,
        email: "p_tosev@yahoo.com"
    },
    {
        id: 157,
        number: 157,
        schoolName: "ООУ „Исмаил Ќемали“",
        address: "с. Црнилиште",
        municipality: "Долнени",
        latitude: 42.0195442,
        longitude: 21.4333645,
        email: "ismailqemali2009@gmail.com"
    },
    {
        id: 158,
        number: 158,
        schoolName: "ООУ „Вера Циривири Трена“ с.Дебреште",
        address: "с. Дебреште",
        municipality: "Долнени",
        latitude: 41.4784795,
        longitude: 21.3172927,
        email: "veraciriviritrena@yahoo.com"
    },
    {
        id: 159,
        number: 159,
        schoolName: "ООУ „Лирија“",
        address: "с. Житоше",
        municipality: "Долнени",
        latitude: 41.9136491,
        longitude: 20.947288,
        email: "lirija.zitose@gmail.com"
    },
    {
        id: 160,
        number: 160,
        schoolName: "OОУ „Јонче Смугрески“ с.Обршани",
        address: "с. Обршани",
        municipality: "Кривогаштани",
        latitude: 41.2786448,
        longitude: 21.3641961,
        email: "oujoncesmugreski@hotmail.com"
    },
    {
        id: 161,
        number: 161,
        schoolName: "ООУ „Манчу Матак“ с.Кривогаштани",
        address: "ул. Едвард Кардељ, бр.9",
        municipality: "Кривогаштани",
        latitude: 41.3384768,
        longitude: 21.3310898,
        email: "oumancumatak@gmail.com"
    },
    {
        id: 162,
        number: 162,
        schoolName: "ООУ „Браќа Миладиновци“",
        address: "ул. Гоце Делчев, бр.2",
        municipality: "Пробиштип",
        latitude: 42.0006374,
        longitude: 22.1821089,
        email: "b_miladinovci@yahoo.com"
    },
    {
        id: 163,
        number: 163,
        schoolName: "ООУ „Никола Карев“",
        address: "ул. Тодор Александров, бр.30",
        municipality: "Пробиштип",
        latitude: 41.9948176,
        longitude: 22.1877315,
        email: "nikolakarev86@yahoo.com"
    },
    {
        id: 164,
        number: 164,
        schoolName: "ООУ „Кирил и Методиј“ с.Ораовица",
        address: "с. Ораовица",
        municipality: "Радовиш",
        latitude: 41.6260362,
        longitude: 22.5133344,
        email: "kirilimetodij@ymail.com"
    },
    {
        id: 165,
        number: 165,
        schoolName: "ООУ „Коста Рацин“ с.Подареш",
        address: "с. Подареш",
        municipality: "Радовиш",
        latitude: 41.615663,
        longitude: 22.5400405,
        email: "k.racin@yahoo.com"
    },
    {
        id: 166,
        number: 166,
        schoolName: "ООУ „Крсте Петков Мисирков“",
        address: "бул. Александар Македонски, бб",
        municipality: "Радовиш",
        latitude: 41.6353171,
        longitude: 22.4684963,
        email: "kmisirkov@yahoo.com"
    },
    {
        id: 167,
        number: 167,
        schoolName: "ООУ „Никола Карев“",
        address: "ул. Илинденска, бб",
        municipality: "Радовиш",
        latitude: 41.6403198,
        longitude: 22.4623985,
        email: "n.karev@yahoo.com"
    },
    {
        id: 168,
        number: 168,
        schoolName: "ООУ „Орце Николов“ с.Ињево",
        address: "с. Ињево",
        municipality: "Радовиш",
        latitude: 41.6129229,
        longitude: 22.4339203,
        email: "nikolovorce@yahoo.com"
    },
    {
        id: 169,
        number: 169,
        schoolName: "ООУ „Гоце Делчев“ с.Конче",
        address: "с. Конче",
        municipality: "Конче",
        latitude: 41.4965779,
        longitude: 22.3829526,
        email: "goce_delcev_konce@yahoo.com"
    },
    {
        id: 170,
        number: 170,
        schoolName: "ООУ „Браќа Миладиновци“ с.Царев Двор",
        address: "с. Царев Двор",
        municipality: "Ресен",
        latitude: 41.0431864,
        longitude: 21.0072931,
        email: "brakamiladinovcicarevdvor@gmail.com"
    },
    {
        id: 171,
        number: 171,
        schoolName: "OОУ „Димитар Влахов“ с.Љубојно",
        address: "с.Љубојно",
        municipality: "Ресен",
        latitude: 40.8945369,
        longitude: 21.1376967,
        email: "dimitarvlahov23@yahoo.com"
    },
    {
        id: 172,
        number: 172,
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Мите Трповски, бр.30",
        municipality: "Ресен",
        latitude: 41.090019,
        longitude: 21.015169,
        email: "ou.gocedelcevresen@yahoo.com"
    },
    {
        id: 173,
        number: 173,
        schoolName: "ООУ „Мите Богоевски“",
        address: "ул. 29-ти ноември, бр.213",
        municipality: "Ресен",
        latitude: 41.0879213,
        longitude: 21.0104093,
        email: "mite_bogoevski@hotmail.com"
    },
    {
        id: 174,
        number: 174,
        schoolName: "ООУ „Славејко Арсов“ с.Подмочани",
        address: "с. Подмочани",
        municipality: "Ресен",
        latitude: 41.0207983,
        longitude: 21.0509529,
        email: "slavejkoarsovp@yahoo.com"
    },
    {
        id: 175,
        number: 175,
        schoolName: "ООУ „Даме Груев“ с.Ерџелија",
        address: "ул. Маршал Тито, бр.31 с.Ерџелија",
        municipality: "Свети Николе",
        latitude: 41.8361134,
        longitude: 22.0312424,
        email: "damegruev87@yahoo.com"
    },
    {
        id: 176,
        number: 176,
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Цветан Димов, бр. 57",
        municipality: "Свети Николе",
        latitude: 41.8665468,
        longitude: 21.9411638,
        email: "ougocedelcev@yahoo.com"
    },
    {
        id: 177,
        number: 177,
        schoolName: "ООУ „Кирил и Методиј“",
        address: "ул. Ангел Трајчев, бр.40",
        municipality: "Свети Николе",
        latitude: 41.8637541,
        longitude: 21.9390631,
        email: "oukirilimetodij@yahoo.com"
    },
    {
        id: 178,
        number: 178,
        schoolName: "ООУ „Методи Митевски-Брицо“",
        address: "ул. Маршал Тито, бб",
        municipality: "Лозово",
        latitude: 41.7818139,
        longitude: 21.9000827,
        email: "mmbricolozovo@gmail.com"
    },
    {
        id: 179,
        number: 179,
        schoolName: "ООУ „Никола Вапцаров“",
        address: "ул. Браќа Реџепагиќ, бб",
        municipality: "Чаир",
        latitude: 42.0165202,
        longitude: 21.4422863,
        email: "nikola-vapcarov@hotmail.com"
    },
    {
        id: 180,
        number: 180,
        schoolName: "ООУ „Рајко Жинзифов“",
        address: "ул. Методија Митевски, бб",
        municipality: "Чаир",
        latitude: 41.9885756,
        longitude: 21.4291359,
        email: "rajkozinzifov@hotmail.com"
    },
    {
        id: 181,
        number: 181,
        schoolName: "ООУ „Васил Главинов“",
        address: "ул. Џон Кенеди , бб",
        municipality: "Чаир",
        latitude: 42.0132357,
        longitude: 21.4340992,
        email: "vglavinov@yahoo.com"
    },
    {
        id: 182,
        number: 182,
        schoolName: "ООУ за возрасни „Антон Семјанович Макаренко“",
        address: "ул. Џон Кенеди, бр.32",
        municipality: "Чаир",
        latitude: 42.0134036,
        longitude: 21.4388806,
        email: "a.s.makarenko@hotmail.com"
    },
    {
        id: 183,
        number: 183,
        schoolName: "ПОУ,, Иднина“",
        address: "ул.2 Македонска Бригада, бр.3",
        municipality: "Чаир",
        latitude: 42.0220383,
        longitude: 21.43682,
        email: "idnina2008@yahoo.com"
    },
    {
        id: 184,
        number: 184,
        schoolName: "ООУ „Хасан Приштина“",
        address: "ул. Коста Абрашевиќ, бр.7",
        municipality: "Чаир",
        latitude: 42.0102166,
        longitude: 21.4415698,
        email: "shf.hasanprishtina@yahoo.com"
    },
    {
        id: 185,
        number: 185,
        schoolName: "ООУ „7 Марси“",
        address: "ул. Коста Абрашевиќ, бр. 3",
        municipality: "Чаир",
        latitude: 42.0098907,
        longitude: 21.4421127,
        email: "shf7Marsi@hotmail.com"
    },
    {
        id: 186,
        number: 186,
        schoolName: "ООУ „Јашар Беј Шкупи“",
        address: "ул. 124 Дуќанџик, бр.бб",
        municipality: "Чаир",
        latitude: 41.9930355,
        longitude: 21.4365318,
        email: "shf_jasharbejshkupi@yahoo.com"
    },
    {
        id: 187,
        number: 187,
        schoolName: "ООУ „Лирија“",
        address: "ул. Цветан Димов, бр.94",
        municipality: "Чаир",
        latitude: 42.0097799,
        longitude: 21.443975,
        email: "liria_shkup@live.com"
    },
    {
        id: 188,
        number: 188,
        schoolName: "ООУ „Конгреси и Манастирит“",
        address: "ул. Петре Георгиев, бр.22",
        municipality: "Чаир",
        latitude: 42.0018262,
        longitude: 21.443798,
        email: "kongresimanastirit1@hotmail.com"
    },
    {
        id: 189,
        number: 189,
        schoolName: "ООУ „Тефејјуз“",
        address: "ул. Чаирска, бр.2",
        municipality: "Чаир",
        latitude: 42.0058825,
        longitude: 21.4428481,
        email: "tefejjuz@hotmail.com"
    },
    {
        id: 190,
        number: 190,
        schoolName: "ООУ „26 Јули“ Шуто Оризари",
        address: "ул. Индира Ганди, бр.31",
        municipality: "Шуто Оризари",
        latitude: 42.0351982,
        longitude: 21.4260978,
        email: "ou26juli@yahoo.com"
    },
    {
        id: 191,
        number: 191,
        schoolName: "ООУ „Браќа Рамиз Хамид“ Шуто Оризари",
        address: "ул. Че Гевара, бр.80",
        municipality: "Шуто Оризари",
        latitude: 42.0395175,
        longitude: 21.4280013,
        email: "oubrh@t-home.mk"
    },
    {
        id: 192,
        number: 192,
        schoolName: "ООУ „Александар Урдаревски“ с.Сандево",
        address: "ул. 1, бр.11 с.Сандево",
        municipality: "Чучер Сандево",
        latitude: 42.0941477,
        longitude: 21.39718,
        email: "aurdarevski10@yahoo.com"
    },
    {
        id: 193,
        number: 193,
        schoolName: "ООУ „Св.Кирил и Методиј“ с.Кучевиште",
        address: "ул. 8, бр.57 с.Кучевиште",
        municipality: "Чучер Сандево",
        latitude: 42.1091665,
        longitude: 21.4171552,
        email: "kimkuceviste@yahoo.com"
    },
    {
        id: 194,
        number: 194,
        schoolName: "ООУ „Михаљ Грамено“ с.Брест",
        address: "с.Брест",
        municipality: "Чучер Сандево",
        latitude: 52.0996507,
        longitude: 23.7636662,
        email: "oumrameno@hotmail.com"
    },
    {
        id: 195,
        number: 195,
        schoolName: "ОOУ „Живко Брајковски“",
        address: "ул. Хо Ши Мин, бб",
        municipality: "Бутел",
        latitude: 42.0307084,
        longitude: 21.4465091,
        email: "zhivkobrajkovski@yahoo.com"
    },
    {
        id: 196,
        number: 196,
        schoolName: "ОOУ „Ацо Шопов“ Радишани",
        address: "ул. Радишанска, бр. 68а",
        municipality: "Бутел",
        latitude: 42.0618593,
        longitude: 21.4526945,
        email: "aco.sopov@yahoo.com"
    },
    {
        id: 197,
        number: 197,
        schoolName: "ОOУ „Гоце Делчев“ с.Љубанци",
        address: "ул. 7, бр.90",
        municipality: "Бутел",
        latitude: 42.105867,
        longitude: 21.454716,
        email: "gocedelcev_ljubanci@yahoo.com"
    },
    {
        id: 198,
        number: 198,
        schoolName: "ОOУ „Климент Охридски“",
        address: "ул. Призренска, бр.22",
        municipality: "Бутел",
        latitude: 42.0458163,
        longitude: 21.4420781,
        email: "ohridskikliment_butel@yahoo.com"
    },
    {
        id: 199,
        number: 199,
        schoolName: "ОOУ „Лиман Каба“ с.Љуботен",
        address: "ул. 1, бр.39 с.Љуботен",
        municipality: "Бутел",
        latitude: 42.0945399,
        longitude: 21.4678325,
        email: "ou.limankaba@hotmail.com"
    },
    {
        id: 200,
        number: 200,
        schoolName: "ОOУ „Панајот Гиновски“",
        address: "ул. Ферид Бајрам, бр.30",
        municipality: "Бутел",
        latitude: 42.0207108,
        longitude: 21.4516232,
        email: "oupanajotginovski@yahoo.com"
    },
    {
        id: 201,
        number: 201,
        schoolName: "ОOУ „Петар Здравковски Пенко“",
        address: "ул. II Македонска бригада, бб",
        municipality: "Бутел",
        latitude: 42.0218175,
        longitude: 21.4427153,
        email: "petarzdravkovski@yahoo.com"
    },
    {
        id: 202,
        number: 202,
        schoolName: "Завод за рехабилитација на деца и младинци",
        address: "ул. II Македонска бригада, бб",
        municipality: "Бутел",
        latitude: 42.0231375,
        longitude: 21.4354139,
        email: "juzrdm-sk@mtsp.gov.mk"
    },
    {
        id: 203,
        number: 203,
        schoolName: "Јавна установа за згрижување на деца со воспитно социјални проблеми и нарушено поведение",
        address: "ул. Петар Манџуков,бб",
        municipality: "Бутел",
        latitude: 42.0324734,
        longitude: 21.4438055,
        email: "j_u_25maj@yahoo.com"
    },
    {
        id: 204,
        number: 204,
        schoolName: "ОOУ „11 Октомври“",
        address: "ул. Мирче Ацев, бр.102",
        municipality: "Центар",
        latitude: 41.9928517,
        longitude: 21.4370355,
        email: "oktomvri11@yahoo.com"
    },
    {
        id: 205,
        number: 205,
        schoolName: "ОOУ „Димитар Миладинов“",
        address: "ул. Кочо Рацин, бр.17",
        municipality: "Центар",
        latitude: 41.9895516,
        longitude: 21.4346687,
        email: "miladinov.dimitar@yahoo.com"
    },
    {
        id: 206,
        number: 206,
        schoolName: "ОOУ „Гоце Делчев“",
        address: "ул. Градски ѕид, бр.34",
        municipality: "Центар",
        latitude: 41.9971189,
        longitude: 21.4280679,
        email: "gocedelcevsk@yahoo.com"
    },
    {
        id: 207,
        number: 207,
        schoolName: "ОOУ „Јохан Хајнрих Песталоци“",
        address: "ул. Апостол Гусларот, бр.3",
        municipality: "Центар",
        latitude: 41.9974579,
        longitude: 21.4206952,
        email: "oupestaloci@gmail.com"
    },
    {
        id: 208,
        number: 208,
        schoolName: "ОOУ „Св.Кирил и Методиј“",
        address: "ул.1737, бр.1",
        municipality: "Центар",
        latitude: 41.9977339,
        longitude: 21.4339748,
        email: "oukimsk@yahoo.com ooukimsk@gmail.com"
    },
    {
        id: 209,
        number: 209,
        schoolName: "ОOУ „Кочо Рацин“",
        address: "ул. Салвадор Аљенде, бр.2",
        municipality: "Центар",
        latitude: 41.9871411,
        longitude: 21.4170621,
        email: "koco _racin@yahoo.com"
    },
    {
        id: 210,
        number: 210,
        schoolName: "ОOУ „Коле Неделковски“",
        address: "ул. Антоние Грубишиќ, бр.8",
        municipality: "Центар",
        latitude: 42.0003319,
        longitude: 21.4199056,
        email: "oukolenedelkovski@yahoo.com"
    },
    {
        id: 211,
        number: 211,
        schoolName: "ДМБУЦ „Илија Николовски Луј”",
        address: "ул. Црвена Скопска Општина, бр.4",
        municipality: "Центар",
        latitude: 41.9983603,
        longitude: 21.435559,
        email: "dmbuc.mkd@gmail.com"
    },
    {
        id: 212,
        number: 212,
        schoolName: "ОOУ „25 Мај“ Сингелиќ",
        address: "ул. Алија Авдовиќ, бр.6",
        municipality: "Гази Баба",
        latitude: 42.0127619,
        longitude: 21.5109032,
        email: "ou25_maj@yahoo.com"
    },
    {
        id: 213,
        number: 213,
        schoolName: "ОOУ „Дане Крапчев“ Маџари",
        address: "ул. Маџари, бр.9",
        municipality: "Гази Баба",
        latitude: 42.004995,
        longitude: 21.5071354,
        email: "oudanekrapcev@yahoo.com"
    },
    {
        id: 214,
        number: 214,
        schoolName: "ОOУ „Григор Прличев“ Железара",
        address: "ул. Гемиџиска, бр.57",
        municipality: "Гази Баба",
        latitude: 42.0147007,
        longitude: 21.4595531,
        email: "g.prlicev@gmail.com"
    },
    {
        id: 215,
        number: 215,
        schoolName: "ОOУ „Кирил и Методиј“ с.Стајковци",
        address: "ул. 6, бр.1, с. Стајковци",
        municipality: "Гази Баба",
        latitude: 42.0279191,
        longitude: 21.5133865,
        email: "coukirilimetodij@yahoo.com"
    },
    {
        id: 216,
        number: 216,
        schoolName: "ОOУ „Крсте Мисирков“ Маџари",
        address: "ул. Среќко Пужалка, бр.65а",
        municipality: "Гази Баба",
        latitude: 42.0009862,
        longitude: 21.5020149,
        email: "krstem@yahoo.com"
    },
    {
        id: 217,
        number: 217,
        schoolName: "ОOУ „Крум Тошев“ с.Трубарево",
        address: "ул. 2, бр.19, с.Трубарево",
        municipality: "Гази Баба",
        latitude: 41.9830449,
        longitude: 21.526931,
        email: "krumtosev@yahoo.com"
    },
    {
        id: 218,
        number: 218,
        schoolName: "ОOУ „Наум Наумовски Борче“ Маџари",
        address: "ул. Маџари, бр.25",
        municipality: "Гази Баба",
        latitude: 41.9987947,
        longitude: 21.4994953,
        email: "naum_naumovski_borce@yahoo.com"
    },
    {
        id: 219,
        number: 219,
        schoolName: "ОOУ „Наум Охридски“ с.Булачани",
        address: "ул.5, бр.1",
        municipality: "Гази Баба",
        latitude: 42.0497786,
        longitude: 21.5145975,
        email: "nohridski@yahoo.com"
    },
    {
        id: 220,
        number: 220,
        schoolName: "ОOУ „Стив Наумов“ Автокоманда",
        address: "ул. Лазар Поп Трајков, бр.28",
        municipality: "Гази Баба",
        latitude: 42.0032567,
        longitude: 21.4662736,
        email: "ou-stiv-naumov.gazi-baba@schools.edu.mk ou_stiv_naumov@yahoo.com"
    },
    {
        id: 221,
        number: 221,
        schoolName: "ОOУ „Вера Јоциќ“ Маџари",
        address: "ул. Разлошка, бр.5",
        municipality: "Гази Баба",
        latitude: 41.9950378,
        longitude: 21.5083213,
        email: "verajocik@yahoo.com"
    },
    {
        id: 222,
        number: 222,
        schoolName: "ОOУ „Његош“ с.Јурумлери",
        address: "ул. 2-а, бр.18, с.Јурумлери",
        municipality: "Гази Баба",
        latitude: 41.9696851,
        longitude: 21.5557733,
        email: "negoskolonija@yahoo.com"
    },
    {
        id: 223,
        number: 223,
        schoolName: "ООУ „Бајрам Шабани“ с.Грушино",
        address: "ул.1, бб, с.Грушино",
        municipality: "Арачиново",
        latitude: 42.0586643,
        longitude: 21.6218457,
        email: "sh.f.bajram.shabani.grushine@gmail.com"
    },
    {
        id: 224,
        number: 224,
        schoolName: "ООУ „Ѓерѓ Кастриоти Скендербеу“",
        address: "ул. 1, бб, с.Арачиново",
        municipality: "Арачиново",
        latitude: 42.02538,
        longitude: 21.5639736,
        email: "sh.f.gj.k.skenderbeu.aracinovo@gmail.com"
    },
    {
        id: 225,
        number: 225,
        schoolName: "ООУ „Браќа Миладиновци“ с.Миладиновци",
        address: "с.Миладиновци",
        municipality: "Илинден",
        latitude: 41.976637,
        longitude: 21.6466956,
        email: "brmiladinovci@yahoo.com"
    },
    {
        id: 226,
        number: 226,
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. 9, бр.179, Илинден",
        municipality: "Илинден",
        latitude: null,
        longitude: null,
        email: "ougocedelcevilinden@yahoo.com"
    },
    {
        id: 227,
        number: 227,
        schoolName: "ООУ „Ристо Крле“ с.Кадино",
        address: "ул. 10 бр. 34г, с. Кадино",
        municipality: "Илинден",
        latitude: 41.9691903,
        longitude: 21.5953282,
        email: "ristokrle_ou@yahoo.com"
    },
    {
        id: 228,
        number: 228,
        schoolName: "ООУ „Братство-Единство“ с.Средно Коњари",
        address: "с.Средно Коњари",
        municipality: "Петровец",
        latitude: 41.9559597,
        longitude: 21.7157167,
        email: "o.u.bratstvoedinstvo@hotmail.com"
    },
    {
        id: 229,
        number: 229,
        schoolName: "ООУ „Кочо Рацин“",
        address: "ул.1, бр.185",
        municipality: "Петровец",
        latitude: 41.9871411,
        longitude: 21.4170621,
        email: "oukocoracin@yahoo.com"
    },
    {
        id: 230,
        number: 230,
        schoolName: "ООУ „Аврам Писевски“ с.Брадовци",
        address: "ул. 2, бр. 10 с. Бардовци",
        municipality: "Карпош",
        latitude: 42.0268569,
        longitude: 21.3784023,
        email: "skolo_pro_koor@yahoo.com"
    },
    {
        id: 231,
        number: 231,
        schoolName: "ООУ „Братство“ Тафталиџе",
        address: "ул. Московска, бр.18",
        municipality: "Карпош",
        latitude: 42.0015208,
        longitude: 21.3884632,
        email: "ou_bratstvo@yahoo.com"
    },
    {
        id: 232,
        number: 232,
        schoolName: "ООУ „Димо Хаџи Димов“ Влае",
        address: "ул. Ангел Динев, бр.5",
        municipality: "Карпош",
        latitude: 42.0054097,
        longitude: 21.3740332,
        email: "dimohdimov@yahoo.com"
    },
    {
        id: 233,
        number: 233,
        schoolName: "ООУ „Христијан Тодоровски Карпош“",
        address: "ул. Орце Николов, бр.161",
        municipality: "Карпош",
        latitude: 42.0043798,
        longitude: 21.4131783,
        email: "htk.kontakt@gmail.com, htkarpos@gmail.com"
    },
    {
        id: 234,
        number: 234,
        schoolName: "ООУ „Јан Амос Коменски“, Тафталиџе",
        address: "ул. Варшавска, бр.23,",
        municipality: "Карпош",
        latitude: 42.0007911,
        longitude: 21.393746,
        email: "oujak@yahoo.com"
    },
    {
        id: 235,
        number: 235,
        schoolName: "ООУ „Лазо Трповски“",
        address: "ул. Радика, бр.9",
        municipality: "Карпош",
        latitude: 42.0059558,
        longitude: 21.3981375,
        email: "trplazo@t.mk"
    },
    {
        id: 236,
        number: 236,
        schoolName: "ООУ „Петар Поп Арсов“",
        address: "ул. Трифун Бузев, бб",
        municipality: "Карпош",
        latitude: 42.0063982,
        longitude: 21.3877433,
        email: "pparsov@yahoo.com"
    },
    {
        id: 237,
        number: 237,
        schoolName: "ООУ „Вера Циривири Трена“",
        address: "ул. Руѓер Бошковиќ, бр.9",
        municipality: "Карпош",
        latitude: 42.0036578,
        longitude: 21.408416,
        email: "oou.veraciriviri@gmail.com"
    },
    {
        id: 238,
        number: 238,
        schoolName: "ООУ „Владо Тасевски“",
        address: "ул. Миле Поп Јорданов, бр.74",
        municipality: "Карпош",
        latitude: 41.9961631,
        longitude: 21.3957021,
        email: "v.tasevski@yahoo.com"
    },
    {
        id: 239,
        number: 239,
        schoolName: "ООУ „Војдан Чернодрински“ Тафталиџе",
        address: "ул. Дрезденска, бр. 3",
        municipality: "Карпош",
        latitude: 41.9993236,
        longitude: 21.408762,
        email: "vojdancernodrinski@yahoo.com"
    },
    {
        id: 240,
        number: 240,
        schoolName: "ООУ „Димитар Поп Беровски“",
        address: "ул. Ѓуро Салај, бр 31",
        municipality: "Ѓорче Петров",
        latitude: 42.003555,
        longitude: 21.3577327,
        email: "d_berovski@yahoo.com"
    },
    {
        id: 241,
        number: 241,
        schoolName: "ООУ „Ѓорче Петров“",
        address: "ул. 4 Јули, бр.131",
        municipality: "Ѓорче Петров",
        latitude: 42.0078464,
        longitude: 21.3367534,
        email: "ougorcepetrov@yahoo.com"
    },
    {
        id: 242,
        number: 242,
        schoolName: "ООУ „Јоаким Крчовски“ с.Волково",
        address: "ул.102, бб, с. Волково",
        municipality: "Ѓорче Петров",
        latitude: 42.0546564,
        longitude: 21.3487789,
        email: "jkvolkovo@yahoo.com"
    },
    {
        id: 243,
        number: 243,
        schoolName: "ООУ „Мирче Ацев“",
        address: "ул. Мечкин Камен, бр.26",
        municipality: "Ѓорче Петров",
        latitude: 42.0081061,
        longitude: 21.3509919,
        email: "ouma.skopje@gmail.com"
    },
    {
        id: 244,
        number: 244,
        schoolName: "ООУ „Страшо Пинџур“ Новоселски Пат",
        address: "ул. Лука Геров, бр.21",
        municipality: "Ѓорче Петров",
        latitude: 42.0250599,
        longitude: 21.3502128,
        email: "ou.strasopindzur@yahoo.com"
    },
    {
        id: 245,
        number: 245,
        schoolName: "ООУ „Тихомир Милошевски“ с.Ново Село",
        address: "с.Ново Село",
        municipality: "Ѓорче Петров",
        latitude: 42.0311237,
        longitude: 21.3492447,
        email: "tihomirmilosevski@yahoo.com"
    },
    {
        id: 246,
        number: 246,
        schoolName: "ООУ „Бајрам Шабани“ с.Кондово",
        address: "с.Кондово",
        municipality: "Сарај",
        latitude: 42.012165,
        longitude: 21.3113944,
        email: "bajramsabani1@gmail.com"
    },
    {
        id: 247,
        number: 247,
        schoolName: "ООУ „Дитуриа“",
        address: "ул. 4, бр.105",
        municipality: "Сарај",
        latitude: 41.9983999,
        longitude: 21.3273945,
        email: "dituriasaraj3@gmail.com"
    },
    {
        id: 248,
        number: 248,
        schoolName: "OОУ „Дрита“ с.Рашче",
        address: "с.Рашче",
        municipality: "Сарај",
        latitude: 42.0215262,
        longitude: 21.2472414,
        email: "shkolla_drita@live.com"
    },
    {
        id: 249,
        number: 249,
        schoolName: "ООУ „Емин Дураку“ с.Буковиќ",
        address: "с.Буковиќ",
        municipality: "Сарај",
        latitude: 41.9718625,
        longitude: 21.2375536,
        email: "ou.eminduraku@yahoo.com"
    },
    {
        id: 250,
        number: 250,
        schoolName: "ООУ „Фаик Коница“ с.Радуша",
        address: "с.Радуша",
        municipality: "Сарај",
        latitude: 41.8193917,
        longitude: 20.890342,
        email: "ou.faikkonica@hotmail.com"
    },
    {
        id: 251,
        number: 251,
        schoolName: "ООУ „Ибе Паликуќа“ с.Бојане",
        address: "с.Бојане",
        municipality: "Сарај",
        latitude: 41.9999008,
        longitude: 21.1930089,
        email: "ibe.palikuqa@gmail.com"
    },
    {
        id: 252,
        number: 252,
        schoolName: "ООУ „Сами Фрашери“ с.Глумово",
        address: "с.Глумово",
        municipality: "Сарај",
        latitude: 41.981572,
        longitude: 21.3069615,
        email: "samifraseri@yahoo.com"
    },
    {
        id: 253,
        number: 253,
        schoolName: "ООУ „Бедри Таири“ с.Долно Свиларе",
        address: "ул. 1, бр.26,с.Долно Свиларе",
        municipality: "Сарај",
        latitude: 42.0274973,
        longitude: 21.2867382,
        email: "oubedritairi@hotmail.com"
    },
    {
        id: 254,
        number: 254,
        schoolName: "ООУ „Кирил Пејчиновиќ“",
        address: "ул. Пушкинова, бр.17",
        municipality: "Кисела Вода",
        latitude: 41.9780346,
        longitude: 21.4439764,
        email: "kirilpejcinovicsk@gmail.com kirilpejcinovicsk@yahoo.com"
    },
    {
        id: 255,
        number: 255,
        schoolName: "ООУ „Климент Охридски“ с.Драчево",
        address: "ул. Јустинијан Први, бр.98",
        municipality: "Кисела Вода",
        latitude: 41.9388113,
        longitude: 21.5200007,
        email: "kliment_ohridski_d@yahoo.com"
    },
    {
        id: 256,
        number: 256,
        schoolName: "ООУ „Круме Кепески“",
        address: "ул. Сава Ковачевиќ бр. 76",
        municipality: "Кисела Вода",
        latitude: 41.965149,
        longitude: 21.4491545,
        email: "ooukkepeskisk@gmail.com"
    },
    {
        id: 257,
        number: 257,
        schoolName: "ООУ „Кузман Шапкарев“ населба Драчево",
        address: "ул. Антон Димитров, бр.135",
        municipality: "Кисела Вода",
        latitude: 41.9411113,
        longitude: 21.5218638,
        email: "kuzmansapkarev@gmail.com"
    },
    {
        id: 258,
        number: 258,
        schoolName: "ООУ „Кузман Јосифовски Питу“",
        address: "ул. Aнтон Попов, бр. 2",
        municipality: "Кисела Вода",
        latitude: 41.9868774,
        longitude: 21.4325313,
        email: "ooukjpitu@yahoo.com"
    },
    {
        id: 259,
        number: 259,
        schoolName: "ООУ „Невена Георгиева Дуња“",
        address: "ул. Михаил Чаков, бр.2",
        municipality: "Кисела Вода",
        latitude: 41.9803545,
        longitude: 21.4451583,
        email: "ngeorgievadunja@gmail.com"
    },
    {
        id: 260,
        number: 260,
        schoolName: "ООУ „Партение Зографски“",
        address: "ул. Доситеј Обрадовиќ, бр.18",
        municipality: "Кисела Вода",
        latitude: 41.9825662,
        longitude: 21.436536,
        email: "partenija@t-home.mk"
    },
    {
        id: 261,
        number: 261,
        schoolName: "ООУ „Рајко Жинзифов“ Драчево",
        address: "ул. Иван Хаџиниколов, бр.2",
        municipality: "Кисела Вода",
        latitude: 41.9410596,
        longitude: 21.5104375,
        email: "rajko_zinzifov@yahoo.com,"
    },
    {
        id: 262,
        number: 262,
        schoolName: "ПОУ „Д-р Златан Сремец“ Скопје",
        address: "ул. Емил Зола, бр.5",
        municipality: "Кисела Вода",
        latitude: 41.9848456,
        longitude: 21.4365992,
        email: "zlatansremec@yahoo.com"
    },
    {
        id: 263,
        number: 263,
        schoolName: "Завод Димитар Влахов",
        address: "ул. Ѓорѓи Димитров, бб",
        municipality: "Кисела Вода",
        latitude: 41.9762559,
        longitude: 21.4400388,
        email: "dvlahov_braj@yahoo.com"
    },
    {
        id: 264,
        number: 264,
        schoolName: "ОOУ „Блаже Конески“",
        address: "ул„Венјамин Мачуковски“ бр.4",
        municipality: "Аеродром",
        latitude: 41.9863836,
        longitude: 21.4501327,
        email: "blaze_koneski1@yahoo.com"
    },
    {
        id: 265,
        number: 265,
        schoolName: "ООУ „Браќа Миладиновци“",
        address: "ул „Владимир Комаров“ бр.5",
        municipality: "Аеродром",
        latitude: 41.9914004,
        longitude: 21.4513437,
        email: "brakamiladinovci_skopje@yahoo.com"
    },
    {
        id: 266,
        number: 266,
        schoolName: "ООУ „Димитар Македонски“",
        address: "ул „Ѓуро Малешевац“ бр.2",
        municipality: "Аеродром",
        latitude: 41.9735885,
        longitude: 21.4762167,
        email: "dimitar_makedonski@yahoo.com"
    },
    {
        id: 267,
        number: 267,
        schoolName: "ООУ „Гоце Делчев“ \nГорно Лисиче",
        address: "ул „Горно Лисиче„ бб",
        municipality: "Аеродром",
        latitude: 41.9694849,
        longitude: 21.4869206,
        email: "ougocedelcev_sgl@yahoo.com"
    },
    {
        id: 268,
        number: 268,
        schoolName: "ООУ „Ѓорѓија Пулевски“",
        address: "Бул „Јане Сандански“ бр. 27 А",
        municipality: "Аеродром",
        latitude: 41.9890167,
        longitude: 21.4652146,
        email: "gpulevski@yahoo.com"
    },
    {
        id: 269,
        number: 269,
        schoolName: "ООУ „Лазо Ангеловски“",
        address: "ул „Видое Смилевски Бато“ бр.95",
        municipality: "Аеродром",
        latitude: 41.9830373,
        longitude: 21.4801276,
        email: "lazoangelovski@yahoo.com"
    },
    {
        id: 270,
        number: 270,
        schoolName: "ООУ „Љубен Лапе“",
        address: "ул. Васко Карангелески бр. 2",
        municipality: "Аеродром",
        latitude: 41.9841069,
        longitude: 21.4605078,
        email: "ljuben_lape@yahoo.com"
    },
    {
        id: 271,
        number: 271,
        schoolName: "ООУ „Александар Македонски”",
        address: "ул.1612 бр.4",
        municipality: "Аеродром",
        latitude: null,
        longitude: null,
        email: "aleksandar.makedonski5@yahoo.com"
    },
    {
        id: 272,
        number: 272,
        schoolName: "ООУ „Драга Стојанова“ с.Ракотинци",
        address: "ул. 1, бр.2А с.Ракотинци",
        municipality: "Сопиште",
        latitude: 41.9406998,
        longitude: 21.41641,
        email: "ou-draga-stojanova.sopiste@t.mk"
    },
    {
        id: 273,
        number: 273,
        schoolName: "ООУ „Алија Авдовиќ“ с.Батинци",
        address: "с. Батинци без уличен систем",
        municipality: "Студеничани",
        latitude: 41.9179341,
        longitude: 21.4780402,
        email: "alija_avdovic@yahoo.com"
    },
    {
        id: 274,
        number: 274,
        schoolName: "OОУ„Наим Фрашери”",
        address: "С.Студеничани",
        municipality: "Студеничани",
        latitude: 41.9144056,
        longitude: 21.5341365,
        email: "naimfraseri_st@yahoo.com"
    },
    {
        id: 275,
        number: 275,
        schoolName: "ООУ „Мустафа Кемал Ататурк“ Долно Количани",
        address: "Долно Количани бб",
        municipality: "Студеничани",
        latitude: 41.8867099,
        longitude: 21.486464,
        email: "ataturkkolicani@hotmail.com"
    },
    {
        id: 276,
        number: 276,
        schoolName: "ООУ„Марко Цепенков“",
        address: "ул. 1 бр.6 ст.Зелениково",
        municipality: "Зелениково",
        latitude: 41.873144,
        longitude: 21.600489,
        email: "markocepenkov@t.mk"
    },
    {
        id: 277,
        number: 277,
        schoolName: "ООУ „Ашим Агуши“ с.Радолишта",
        address: "с. Радолишта",
        municipality: "Струга",
        latitude: 41.1649428,
        longitude: 20.6265762,
        email: "sh.f.a_agushi@hotmail.com"
    },
    {
        id: 278,
        number: 278,
        schoolName: "ООУ „Браќа Миладиновци“",
        address: "ул. Јово Стефаноски-Риле бр.4",
        municipality: "Струга",
        latitude: 41.1751818,
        longitude: 20.6847695,
        email: "ou_b_miladinovci@yahoo.com"
    },
    {
        id: 279,
        number: 279,
        schoolName: "ООУ „Единство“ с.Октиси",
        address: "с. Октиси",
        municipality: "Струга",
        latitude: 41.2356734,
        longitude: 20.6016678,
        email: "ou_edinstvo@yahoo.com"
    },
    {
        id: 280,
        number: 280,
        schoolName: "ООУ „Гоце Делчев“ с.Јабланица",
        address: "с. Јабланица",
        municipality: "Струга",
        latitude: 41.3182357,
        longitude: 20.5729424,
        email: "gocedelcevjablanica@yahoo.com"
    },
    {
        id: 281,
        number: 281,
        schoolName: "ООУ „Гоце Делчев“ с.Подгорци",
        address: "с. Подгорци",
        municipality: "Струга",
        latitude: 41.2589091,
        longitude: 20.5975242,
        email: "gdelcev.podgorci@yahoo.com"
    },
    {
        id: 282,
        number: 282,
        schoolName: "ООУ „Јосип Броз Тито“",
        address: "Ул. Димче Ковачески, бр. 64",
        municipality: "Струга",
        latitude: 41.1749761,
        longitude: 20.6685149,
        email: "jbt.struga@gmail.com"
    },
    {
        id: 283,
        number: 283,
        schoolName: "ООУ „Климент Охридски“ с.Драслајца",
        address: "с. Драслајца",
        municipality: "Струга",
        latitude: 41.2071636,
        longitude: 20.6788763,
        email: "oudraslajca@yahoo.com"
    },
    {
        id: 284,
        number: 284,
        schoolName: "ООУ „Мурат Лабуништа“ Лабуништа",
        address: "с. Лабуништа",
        municipality: "Струга",
        latitude: 41.268539,
        longitude: 20.5975242,
        email: "muratlabunishti@gmail.com"
    },
    {
        id: 285,
        number: 285,
        schoolName: "ООУ „Нури Мазари“ с.Делогожда",
        address: "с. Делогожда",
        municipality: "Струга",
        latitude: 41.1751818,
        longitude: 20.6847695,
        email: "nurimazari@yahoo.com"
    },
    {
        id: 286,
        number: 286,
        schoolName: "ООУ „Орхан Џемаили“\nс.Горно Татеши",
        address: "с.Горно Татеши",
        municipality: "Струга",
        latitude: 41.260276,
        longitude: 20.6772327,
        email: "orhanxhemaili@yahoo.com"
    },
    {
        id: 287,
        number: 287,
        schoolName: "ООУ „Зини Хани“ с.Велешта",
        address: "с.Велешта",
        municipality: "Струга",
        latitude: 41.1751818,
        longitude: 20.6847695,
        email: "zini_hani@hotmail.com"
    },
    {
        id: 288,
        number: 288,
        schoolName: "ООУ „Страшо Пинџур“ с.Вевчани",
        address: "с.Вевчани",
        municipality: "Вевчани",
        latitude: 41.2407543,
        longitude: 20.5915649,
        email: "ouvevcani@gmail.com, oustrasopinxur@gmail.com"
    },
    {
        id: 289,
        number: 289,
        schoolName: "ОOУ „Даме Груев“ с.Кукулиш",
        address: "с.Куклиш бр. 99",
        municipality: "Струмица",
        latitude: 41.4071281,
        longitude: 22.6615805,
        email: "d.gruev@yahoo.com"
    },
    {
        id: 290,
        number: 290,
        schoolName: "ОOУ „Герас Цунев“ с.Просениково",
        address: "с.Просениково бр. 80",
        municipality: "Струмица",
        latitude: 41.4675142,
        longitude: 22.6771777,
        email: "g_cunev@yahoo.com"
    },
    {
        id: 291,
        number: 291,
        schoolName: "ОOУ „Гоце Делчев“ с.Вељуса",
        address: "с.Вељуса",
        municipality: "Струмица",
        latitude: 41.4770586,
        longitude: 22.5706982,
        email: "goce_delcev_eleusa@yahoo.com"
    },
    {
        id: 292,
        number: 292,
        schoolName: "ОOУ „Кирил и Методиј“ с.Дабиља",
        address: "с.Дабиљe бр.360",
        municipality: "Струмица",
        latitude: 41.4420124,
        longitude: 22.6883969,
        email: "skolodabile@yahoo.com"
    },
    {
        id: 293,
        number: 293,
        schoolName: "ООУ „Маршал Тито“",
        address: "ул. Кирил и Методиј, бр. 26",
        municipality: "Струмица",
        latitude: 41.4338795,
        longitude: 22.6361603,
        email: "mtitosr@yahoo.com"
    },
    {
        id: 294,
        number: 294,
        schoolName: "ООУ „Маршал Тито“ с.Муртино",
        address: "с. Муртино бр. 297",
        municipality: "Струмица",
        latitude: 41.4155624,
        longitude: 22.7241509,
        email: "ou.murtino@yahoo.com"
    },
    {
        id: 295,
        number: 295,
        schoolName: "ООУ „Никола Вапцаров“",
        address: "ул. Ценка Павлова, бр.1",
        municipality: "Струмица",
        latitude: 41.4294311,
        longitude: 22.6486115,
        email: "ounikolavapcarov@yahoo.com"
    },
    {
        id: 296,
        number: 296,
        schoolName: "ООУ „Сандо Масев“",
        address: "ул. Моша Пијаде, бр. 8",
        municipality: "Струмица",
        latitude: 41.4401417,
        longitude: 22.6362485,
        email: "sandomasev@yahoo.com"
    },
    {
        id: 297,
        number: 297,
        schoolName: "ООУ „Видое Подгорец“",
        address: "ул. 1 Мај, бр. 34",
        municipality: "Струмица",
        latitude: 41.436837,
        longitude: 22.6409092,
        email: "vidoepodgorec@yahoo.com"
    },
    {
        id: 298,
        number: 298,
        schoolName: "ОМУ „Боро Џони“",
        address: "ул. Ѓорѓи Трајков бб",
        municipality: "Струмица",
        latitude: 41.4365917,
        longitude: 22.6365057,
        email: "muzickosr@yahoo.com"
    },
    {
        id: 299,
        number: 299,
        schoolName: "Завод Бања Банско",
        address: "Бања Банско бб",
        municipality: "Струмица",
        latitude: 41.3841577,
        longitude: 22.7435352,
        email: "juzzr-st@mtsp.gov.mk"
    },
    {
        id: 300,
        number: 300,
        schoolName: "ООУ „Гоце Делчев“ с.Василево,",
        address: "с. Василево бр. 36",
        municipality: "Василево",
        latitude: 41.4757245,
        longitude: 22.641449,
        email: "oougd_vasilevo@yahoo.com"
    },
    {
        id: 301,
        number: 301,
        schoolName: "ООУ „Атанас Нивачински“ с.Нова Маала",
        address: "с.Нова Маала",
        municipality: "Василево",
        latitude: 41.5265815,
        longitude: 22.6988252,
        email: "oouatanas_nivicanski@hotmail.com"
    },
    {
        id: 302,
        number: 302,
        schoolName: "ООУ „Гоце Делчев“ с.Босилево",
        address: "Босилово бр.259",
        municipality: "Босилево",
        latitude: 41.4389865,
        longitude: 22.7315995,
        email: "gocedelcevb@yahoo.com"
    },
    {
        id: 303,
        number: 303,
        schoolName: "ООУ „Св.Кирил и Методиј“ с.Иловица",
        address: "с.Иловица",
        municipality: "Босилево",
        latitude: 41.4733839,
        longitude: 22.8060824,
        email: "svkirilimetodij@yahoo.com"
    },
    {
        id: 304,
        number: 304,
        schoolName: "ООУ „Борис Трајковски“ с.Моноспитово",
        address: "с. Моноспитово бр. 351",
        municipality: "Босилево",
        latitude: 41.4156243,
        longitude: 22.7524553,
        email: "оouboristrajkovski@gmail.com"
    },
    {
        id: 305,
        number: 305,
        schoolName: "ООУ „Видео Подгорец“ с.Колешино",
        address: "с. Колешино бр. 88",
        municipality: "Ново Село",
        latitude: 41.3811785,
        longitude: 22.8150199,
        email: "podgorec_vidoe@yahoo.com"
    },
    {
        id: 306,
        number: 306,
        schoolName: "ООУ „Мануш Турновски“",
        address: "ул. Климент Охридски, бр. 4",
        municipality: "Ново Село",
        latitude: 41.4141551,
        longitude: 22.8786273,
        email: "manushturnovski@gmail.com"
    },
    {
        id: 307,
        number: 307,
        schoolName: "ПОУ „Св.Климент Охридски”",
        address: "ул. Маршал Тито, бр.103",
        municipality: "Ново Село",
        latitude: 41.412907,
        longitude: 22.879117,
        email: "sv_klimentoh@yahoo.com"
    },
    {
        id: 308,
        number: 308,
        schoolName: "ООУ „Андреја Савевски-Ќиќиш“",
        address: "ул. Иво Рибар Лола, бр. 46",
        municipality: "Тетово",
        latitude: 45.7707805,
        longitude: 25.7997157,
        email: "um_askikis_tetovo@yahoo.com"
    },
    {
        id: 309,
        number: 309,
        schoolName: "ООУ „Братство Миѓени“",
        address: "ул. Љубе Божиновски Пиш, бр. 41",
        municipality: "Тетово",
        latitude: 42.0069115,
        longitude: 20.9715269,
        email: "bratstvomigjeni@tetova.gov.mk"
    },
    {
        id: 310,
        number: 310,
        schoolName: "ООУ „Ѓерѓ Кастриоти Скендербег“ с.Порој",
        address: "с.Порој",
        municipality: "Тетово",
        latitude: 42.0318364,
        longitude: 20.9931356,
        email: "shkolla291@hotmail.com"
    },
    {
        id: 311,
        number: 311,
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Иво Рибар Лола, бр. 96",
        municipality: "Тетово",
        latitude: 42.0136816,
        longitude: 20.9709344,
        email: "goce_delcev_te@hotmail.com"
    },
    {
        id: 312,
        number: 312,
        schoolName: "ООУ „Истикбал“",
        address: "ул. Браќа Миладинови, бр.85",
        municipality: "Тетово",
        latitude: 42.0025112,
        longitude: 20.9695218,
        email: "istikbal@tetova.gov.mk"
    },
    {
        id: 313,
        number: 313,
        schoolName: "ООУ „Кирил и Методиј“",
        address: "ул. Видое Смилевски Бато, бб",
        municipality: "Тетово",
        latitude: 42.0024486,
        longitude: 20.9762347,
        email: "um_kim_tet@yahoo.com"
    },
    {
        id: 314,
        number: 314,
        schoolName: "ООУ „Лирија“",
        address: "ул. Дервиш Цара, бр. 6",
        municipality: "Тетово",
        latitude: 42.0075484,
        longitude: 20.9701298,
        email: "liria.te@gmail.com"
    },
    {
        id: 315,
        number: 315,
        schoolName: "ООУ „Наим Фрашери“",
        address: "ул. 113, бр. 7",
        municipality: "Тетово",
        latitude: 41.9994227,
        longitude: 20.9575967,
        email: "naimfrasheri@tetova.gov.mk"
    },
    {
        id: 316,
        number: 316,
        schoolName: "ООУ „Беса“ с.Вешала",
        address: "с.Вешала",
        municipality: "Тетово",
        latitude: 42.0610686,
        longitude: 20.8456061,
        email: "shefajet_ramadani@hotmail.com"
    },
    {
        id: 317,
        number: 317,
        schoolName: "ООУ „Перпарими“ с.Речица",
        address: "с. Голема Речица",
        municipality: "Тетово",
        latitude: 41.9896637,
        longitude: 20.9451218,
        email: "shkollafilloreperparimi@yahoo.com"
    },
    {
        id: 318,
        number: 318,
        schoolName: "ООУ „Реџеп Вока“ с.Шипковица",
        address: "с. Шипковица",
        municipality: "Тетово",
        latitude: 42.0350346,
        longitude: 20.9161052,
        email: "rexhep_voka@mail.net.mk"
    },
    {
        id: 319,
        number: 319,
        schoolName: "ООУ „Рилиндја“ с.Селце, Тетово",
        address: "с.Селце",
        municipality: "Тетово",
        latitude: 42.0353991,
        longitude: 20.940232,
        email: "rilindja@tetova.gov.mk"
    },
    {
        id: 320,
        number: 320,
        schoolName: "ДМУ„Тодор Скаловски-Тетоец„",
        address: "ул. Иво Лола Рибар, бр.118",
        municipality: "Тетово",
        latitude: 42.0132441,
        longitude: 20.9705615,
        email: "dmutetoec@gmail.com"
    },
    {
        id: 321,
        number: 321,
        schoolName: "ООУ „Фан Ноли“ с.Требош",
        address: "с. Требош, бр.101 бб",
        municipality: "Желино",
        latitude: 42.0130317,
        longitude: 21.032628,
        email: "sh-fan.noli@hotmail.com"
    },
    {
        id: 322,
        number: 322,
        schoolName: "ООУ „Хасан Тахсини“ с.Рогле",
        address: "с.Рогле",
        municipality: "Желино",
        latitude: 41.9678774,
        longitude: 21.1660139,
        email: "htsz_2011@yahoo.com"
    },
    {
        id: 323,
        number: 323,
        schoolName: "ООУ „Ибрахим Темо“ с.Стримница",
        address: "ул.101, бр.366 с.Стримница",
        municipality: "Желино",
        latitude: 41.9673964,
        longitude: 21.0356086,
        email: "sh.f.ibrahim.temo@gmail.com"
    },
    {
        id: 324,
        number: 324,
        schoolName: "ООУ „Луиѓ Гуракуќи“ с.Желино",
        address: "с. Желино",
        municipality: "Желино",
        latitude: 41.9803419,
        longitude: 21.0609438,
        email: "luigjgurakuqi@gmail.com"
    },
    {
        id: 325,
        number: 325,
        schoolName: "ООУ „Пашко Васа“ с.Групчин",
        address: "с. Групчин",
        municipality: "Желино",
        latitude: 41.9661291,
        longitude: 21.1257737,
        email: "sh.f.pashkovasa@gmail.com"
    },
    {
        id: 326,
        number: 326,
        schoolName: "ООУ„Раметула Амети“",
        address: "с. Чифлик",
        municipality: "Желино",
        latitude: 42.0003319,
        longitude: 21.4199056,
        email: "shfkrametulameti@gmail.com"
    },
    {
        id: 327,
        number: 327,
        schoolName: "ОOУ „Сами Фрашери“ с.Пирок",
        address: "с. Пирок",
        municipality: "Боговиње",
        latitude: 41.9099458,
        longitude: 20.9134083,
        email: "samifrasheri.pirok@gmail.com"
    },
    {
        id: 328,
        number: 328,
        schoolName: "ОOУ „Дервиш Цара“ с.Долно Палчиште",
        address: "с. Долно Палчиште",
        municipality: "Боговиње",
        latitude: 41.9695423,
        longitude: 20.9372516,
        email: "dervishc1994@gmail.com; dervishcara@yahoo.com"
    },
    {
        id: 329,
        number: 329,
        schoolName: "ООУ „Лирија“ с.Жеровјане",
        address: "ул. 101, бб с.Жеровјане",
        municipality: "Боговиње",
        latitude: 41.9167101,
        longitude: 20.9475007,
        email: "liria1965@gmail.com"
    },
    {
        id: 330,
        number: 330,
        schoolName: "OОУ „Абдил Фрашери“ с.Боговиње",
        address: "с. Боговиње",
        municipality: "Боговиње",
        latitude: 41.933472,
        longitude: 20.944984,
        email: "abdyl_frasheri@yahoo.com"
    },
    {
        id: 331,
        number: 331,
        schoolName: "ООУ „Сабедин Бајрами“ с.Камењане",
        address: "ул. 101, бб, с.Камењане",
        municipality: "Боговиње",
        latitude: 41.933472,
        longitude: 20.944984,
        email: "sab_bajrami@yahoo.com"
    },
    {
        id: 332,
        number: 332,
        schoolName: "OОУ „11 Октомври“ с.Урвич",
        address: "с.Урвич",
        municipality: "Боговиње",
        latitude: 41.9483137,
        longitude: 20.8944189,
        email: "shf-11tetori@live.com"
    },
    {
        id: 333,
        number: 333,
        schoolName: "ООУ „7 Марси“ с.Челопек",
        address: "с.Челопек",
        municipality: "Брвеница",
        latitude: 41.9310298,
        longitude: 21.0147445,
        email: "ou7marsi@yahoo.com"
    },
    {
        id: 334,
        number: 334,
        schoolName: "ООУ „Коста Рацин“ с.Брвеница",
        address: "ул. Браќа Стефановиќ, бб",
        municipality: "Брвеница",
        latitude: 41.9693021,
        longitude: 20.9829722,
        email: "kostaracin@yahoo.com"
    },
    {
        id: 335,
        number: 335,
        schoolName: "ООУ „Гоце Делчев“ с.Стенче",
        address: "с. Стенче",
        municipality: "Брвеница",
        latitude: 41.8749702,
        longitude: 21.0011458,
        email: "ougocedelcevstence@hotmail.com"
    },
    {
        id: 336,
        number: 336,
        schoolName: "ОOУ „Шемшево“ с.Шемшево",
        address: "с.Шемшово",
        municipality: "Јегуновце",
        latitude: 42.0258059,
        longitude: 21.0773374,
        email: "ousemsevo@hotmail.com"
    },
    {
        id: 337,
        number: 337,
        schoolName: "ООУ „Симче Настовски“ с.Вратница",
        address: "с.Вратница",
        municipality: "Јегуновце",
        latitude: 42.1389414,
        longitude: 21.1132454,
        email: "simcenastovski@yahoo.com"
    },
    {
        id: 338,
        number: 338,
        schoolName: "ОOУ „Алескандар Здравковски“ с.Јегуновце",
        address: "с.Јегуновце",
        municipality: "Јегуновце",
        latitude: 42.1389414,
        longitude: 21.1132454,
        email: "zdravkovskialeksandar@yahoo.com"
    },
    {
        id: 339,
        number: 339,
        schoolName: "ООУ „Екрем Чабеј“ с.Слатино",
        address: "ул. 103 бр. 6, с. Слатино",
        municipality: "Теарце",
        latitude: 42.1085958,
        longitude: 21.022196,
        email: "refikhasani@gmail.com"
    },
    {
        id: 340,
        number: 340,
        schoolName: "ООУ „Фаик Коница“ с.Доброште",
        address: "с.Доброште",
        municipality: "Теарце",
        latitude: 42.104853,
        longitude: 21.0788277,
        email: "p.s_faikkonica@hotmail.com"
    },
    {
        id: 341,
        number: 341,
        schoolName: "ООУ „Исмаил Ќемали“ с.Нераште",
        address: "с.Теарце",
        municipality: "Теарце",
        latitude: 42.0762938,
        longitude: 21.0523014,
        email: "ismail_qemali@hotmail.com"
    },
    {
        id: 342,
        number: 342,
        schoolName: "ООУ „Кирил Пејчиновиќ“ с.Теарце",
        address: "с.Теарце",
        municipality: "Теарце",
        latitude: 42.0765953,
        longitude: 21.0524742,
        email: "pskirilpejcinoviq@gmail.com"
    },
    {
        id: 343,
        number: 343,
        schoolName: "ООУ „Асдрени“ с.Глоѓ",
        address: "с.Глоѓи",
        municipality: "Теарце",
        latitude: 42.0859139,
        longitude: 21.0602117,
        email: "asdreni.shkolla@gmail.com,"
    },
    {
        id: 344,
        number: 344,
        schoolName: "ООУ „Блаже Конески“",
        address: "ул. Љубљанска, бр. 1",
        municipality: "Велес",
        latitude: 41.7160409,
        longitude: 21.7750671,
        email: "oublazekoneski@yahoo.com"
    },
    {
        id: 345,
        number: 345,
        schoolName: "OОУ „Благоја Кирков“",
        address: "ул. Кресненско востание бр. 4",
        municipality: "Велес",
        latitude: 41.7164563,
        longitude: 21.7722966,
        email: "blagojkirkov@yahoo.com"
    },
    {
        id: 346,
        number: 346,
        schoolName: "ООУ „Јордан Хаџи Константинов-Џинот“",
        address: "ул. Иво Лола Рибар, бр. 2",
        municipality: "Велес",
        latitude: 41.7164563,
        longitude: 21.7722966,
        email: "oudzinot@yahoo.com"
    },
    {
        id: 347,
        number: 347,
        schoolName: "OОУ „Кирил и Митодиј“",
        address: "ул. Архиепископ Михаил, бр.156",
        municipality: "Велес",
        latitude: 41.7141445,
        longitude: 21.7832971,
        email: "coukim@t-home.mk"
    },
    {
        id: 348,
        number: 348,
        schoolName: "ОOУ „Рајко Жинзифов“ с.Горно Оризари",
        address: "ул. Сараевска, бб Горно Оризари",
        municipality: "Велес",
        latitude: 41.6867632,
        longitude: 21.7331462,
        email: "rajkozinzifovveles@yahoo.com"
    },
    {
        id: 349,
        number: 349,
        schoolName: "ООУ „Стојан Бурчевски Буридан“ с.Иванковци",
        address: "ул. Гоце Делчев, бб с.Иванковци",
        municipality: "Велес",
        latitude: 41.72049,
        longitude: 21.7900541,
        email: "stojanburcevski@yahoo.com"
    },
    {
        id: 350,
        number: 350,
        schoolName: "ООУ „Васил Главинов“",
        address: "ул. Никола Карев, бр. 2",
        municipality: "Велес",
        latitude: 41.7164731,
        longitude: 21.7663632,
        email: "oouvasilglavinov@yahoo.com"
    },
    {
        id: 351,
        number: 351,
        schoolName: "ОМУ „Стефан Гајдов“",
        address: "ул. Благој Нечев, бр. 8",
        municipality: "Велес",
        latitude: 41.7188113,
        longitude: 21.7842939,
        email: "stefangajdov@yahoo.com"
    },
    {
        id: 352,
        number: 352,
        schoolName: "ПОУ „Маца Овчарова“",
        address: "ул. Иво Лола Рибар, бр. 4",
        municipality: "Велес",
        latitude: null,
        longitude: null,
        email: "poumacaovcarova@yahoo.com"
    },
    {
        id: 353,
        number: 353,
        schoolName: "ООУ „Петар Поп Арсов“ с.Богомила",
        address: "с.Богомила",
        municipality: "Чашка",
        latitude: 41.5943098,
        longitude: 21.4767756,
        email: "oupetarpoparsov@yahoo.com"
    },
    {
        id: 354,
        number: 354,
        schoolName: "ООУ „Тодор Јанев“ с.Чашка",
        address: "ул. 8 - ми Септември, бр.1",
        municipality: "Чашка",
        latitude: 41.6482638,
        longitude: 21.6905968,
        email: "outodorjanev@yahoo.com"
    },
    {
        id: 355,
        number: 355,
        schoolName: "ООУ „Лирија“ Г.Јаболчиште",
        address: "с. Горно Јаболчиште, бб",
        municipality: "Чашка",
        latitude: 41.725349,
        longitude: 21.4886997,
        email: "oulirija@yahoo.com"
    },
    {
        id: 356,
        number: 356,
        schoolName: "ООУ „Даме Груев“ с.Градско",
        address: "ул. Александар Македонски бр.68",
        municipality: "Градско",
        latitude: 41.5771544,
        longitude: 21.9459307,
        email: "damegruevgradsko@yahoo.com"
    },
    {
        id: 357,
        number: 357,
        schoolName: "ООУ „Димитар Влахов“",
        address: "ул. Сремски фронт, бб",
        municipality: "Штип",
        latitude: 41.7502944,
        longitude: 22.2027071,
        email: "ou_dimitar_vlahov_stip@yahoo.com"
    },
    {
        id: 358,
        number: 358,
        schoolName: "ООУ „Гоце Делчев“",
        address: "ул. Иво Лола Рибар, бр.179",
        municipality: "Штип",
        latitude: 41.7401776,
        longitude: 22.1999466,
        email: "ou_goce_delcev_stip@yahoo.com"
    },
    {
        id: 359,
        number: 359,
        schoolName: "ООУ „Тошо Арсов“",
        address: "бул. ЈНА, бб",
        municipality: "Штип",
        latitude: 41.749664,
        longitude: 22.1919255,
        email: "outosoarsov_stip@yahoo.com"
    },
    {
        id: 360,
        number: 360,
        schoolName: "ООУ „Ванчо Прке“",
        address: "ул. Васил Главинов, бб",
        municipality: "Штип",
        latitude: 41.7360755,
        longitude: 22.1934529,
        email: "ou_vanco_prke_stip@yahoo.com"
    },
    {
        id: 361,
        number: 361,
        schoolName: "ООУ „Славејко Арсов“",
        address: "ул. Крушевска Република, бр.68",
        municipality: "Штип",
        latitude: 41.758042,
        longitude: 22.2038661,
        email: "ou_slavejkoarsov@yahoo.com"
    },
    {
        id: 362,
        number: 362,
        schoolName: "ОМУ „Сергеј Михајлов“",
        address: "ул. Рајко Жинзифов, бб",
        municipality: "Штип",
        latitude: 41.7381762,
        longitude: 22.1910083,
        email: "dmucsergejmihajlov_stip@yahoo.com"
    },
    {
        id: 363,
        number: 363,
        schoolName: "ООУ „Страшо Пинџур“ с.Карбинци",
        address: "с.Карбинци",
        municipality: "Карбинци",
        latitude: 41.7882098,
        longitude: 22.262246,
        email: "s_pinjur@yahoo.com"
    }
];

export {
    schools
};