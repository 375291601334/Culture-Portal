/* eslint-disable quote-props */
import directorOne from '../../images/directors/1Alexandrovskaya.jpg';
import directorTwo from '../../images/directors/2Bujnicki.jpg';
import directorThree from '../../images/directors/3Dervoed.jpg';
import directorFour from '../../images/directors/4Elston.jpg';
import directorFive from '../../images/directors/5Rahlenko.jpg';
import Alexandrovskaya from '../../images/directors/1';
import Bujnicki from '../../images/directors/2';
import Dervoed from '../../images/directors/3';
import Elston from '../../images/directors/4';
import Rahlenko from '../../images/directors/5';

export const directorsArr = ['Александровская Лариса Помпеевна', 'Буйницкий Игнат Терентьевич', 'Дервоед Роман Алексеевич', 'Лев Михайлович Эльстон', 'Леон Гдальевич Рахленко'];

export const citiesArr = ['Минск', 'Полочаны', 'Орша', 'Гомель'];

export const dirrectorsCities = {
  Минск: ['Александровская Лариса Помпеевна', 'Леон Гдальевич Рахленко'],
  Полочаны: ['Буйницкий Игнат Терентьевич'],
  Орша: ['Дервоед Роман Алексеевич'],
  Гомель: ['Лев Михайлович Эльстон'],
};

export const c = [
  {
    gallery: Alexandrovskaya,
    name: 'Александровская Лариса Помпеевна',
    img: directorOne,
    info: 'Белорусская советская оперная певица (сопрано), режиссёр, публицист и общественный деятель, народная артистка СССР.',
    biography: {
      dates: ['1902', '1920', '1924-1928', '1927', '1930-1933', '1933', '1941-1945', '1951-1960', '1980'],
      events: {
        '1902': 'Родилась в Минске.',
        '1920': 'Начала выступать как певица в труппе театра Главполитпросвета Западного фронта.',
        '1924—1928': 'Училась в Минском музыкальном техникуме.',
        '1927': 'Исполняла белорусские народные песни на Международной музыкальной выставке во Франкфурте-на-Майне (Германия).',
        '1930—1933': 'Занималась в Государственной студии оперы и балета (Минск). Ученица В. А. Цветкова и А. П. Боначича.',
        '1933': 'Cолистка Белорусского театра оперы и балета в Минске. Исполняла как сопрановые, так и меццо-сопрановые партии.',
        '1941-1945': 'Выступала с концертами на фронтах, в госпиталях и в партизанских отрядах.',
        '1951—1960': 'Главный режиссёр Белорусского театра оперы и балета. В год ей удавалось выпускать по два премьерных спектакля.',
        '1980': 'Умерла. Похоронена в Минске на Восточном кладбище.',
      },
    },
    compositions: [
      '1951 — «Запорожец за Дунаем» С.С.Гулак-Артемовского',
      '1951 — «Тихий Дон» И.И.Дзержинского',
      '1952 — «Страшный двор» С.Монюшко',
      '1952 — «Русалка» А.С.Даргомыжского',
      '1952 — «Мазепа» П.И.Чайковского',
      '1953 — «Аида» Дж.Верди',
      '1953 — «Девушка из Полесья» Е.К.Тикоцкого',
      '1954 — «Борис Годунов» М.П.Мусоргского',
      '1954 — «Травиата» Дж.Верди',
      '1955 — «Трубадур» Дж.Верди',
      '1956 — «Надежда Дурова» А.В.Богатырёва',
      '1957 — «Михась Подгорный» Е.К.Тикоцкого',
      '1958 — «Ясный рассвет» А.Е.Туренкова',
      '1960 — «Пиковая дама» П. И. Чайковского',
    ],
    place: 'Минск',
    coordinates: { lat: 53.9, lng: 27.56667 },
    video: 'https://www.youtube.com/watch?v=v3LC9JtorMM',
  },

  {
    gallery: Bujnicki,
    name: 'Буйницкий Игнат Терентьевич',
    img: directorTwo,
    info: 'Белорусский актёр, режиссёр, театральный деятель, основатель первого профессионального национального белорусского театра. Театр Буйницкого показывал спектакли в местечках и деревнях Белоруссии, гастролировал в Вильнюсе, Минске, Полоцке, Санкт-Петербурге, Варшаве и других городах. Его деятельность заложила основы белорусского профессионального театрального искусства. Большинство спектаклей Игнат Буйницкий ставил сам. В 1917 году был одним из инициаторов создания «Первого товарищества белорусской драмы и комедии» в Минске.',
    biography: {
      dates: ['1861', '1907', '1910', '1913', '1914—1916', '1917'],
      events: {
        '1861': 'Родился в усадьбе Поливачи ныне Глубокского района Витебской области в семье мелкого шляхтича герба «Лебедь», Тарквиния-Теофила Зигфридова-Гияцинтова Буйницкого. Затем окончил Рижское землемерное училище. Актерское образование получил, посещая частную драматическую студию в Вильнюсе.',
        '1907': 'Создал в фольварке Поливачи любительскую труппу. Особенностью выступлений было то, что со сцены звучал белорусский язык, исполнялись знакомые простым людям народные танцы.',
        '1910': 'На основе любиьельской труппы была сформирована постоянная и начаты продолжительные гастроли по Беларуси.',
        '1913': 'Организовал Прозорокское белорусское кредитное общество, в котором каждый крестьянин под небольшой процент мог получить заём.',
        '1914—1916': 'Принимал активное участие в деятельности виленского общества «В помощь фронту».',
        '1917': 'Oтправился на Западный фронт Первой мировой войны./nВыступил одним из инициаторов создания «Первого товарищества белорусской драмы и комедии» в Минске, на базе которого возник Национальный академический театр имени Янки Купалы./nУмер на сцене во время репетиции (занимался солдатской самодеятельностью). Сначала был похоронен там же, в Молодечно, но позже перезахоронен в Прозороках на центральной площади.',
      },
    },
    compositions: [
      '«По ревизии» М.Крапивницкого',
      '«Пошились в дурни» М.Крапивницкого',
      '«Хам» Э.Ожешко',
      '«В зимний вечер» Э.Ожешко',
      '«Модный шляхтич» К.Каганца',
    ],
    place: 'Полочаны',
    coordinates: { lat: 54.2256, lng: 26.7044 },
    video: 'https://www.youtube.com/watch?v=FpHsAWuSoEI',
  },

  {
    gallery: Dervoed,
    name: 'Дервоед Роман Алексеевич',
    img: directorThree,
    info: 'Театральный режиссёр, белорусский актёр.',
    biography: {
      dates: ['1985', '2006', '2007', '2008', '2013'],
      events: {
        '1985': 'Родился в Орше.',
        '2006': 'Окончил Могилёвский государственный колледж искусств по специальности «актёр театра и кино» (курс В. П. Куржалова).',
        '2007': 'Организовал в Гомеле театр-студию «Колесо», являлся его художественным руководителем и режиссёром (поставил спектакли «Сезонные явления» Е.Шпартко, в стиле театра абсурда, и «Король Лир» У.Шекспира, в стиле театра-ритуал, в которых участвовали актёры Гомельского кукольного театра и Гомельского драматического театра, а также студенты ГГУ им. Ф.Скорины).',
        '2008': 'Актёр, режиссёр Национального академического драматического театра имени М. Горького.',
        '2013': 'Окончил Белорусскую государственную академию искусств по специальности «режиссура драмы» (курс народного артиста Беларуси Б.И.Луценко); стажировался в Национальном драматическом театре имени М.Горького.',
      },
    },
    compositions: [
      '2008 - «Распутник» Э.Э.Шмитта — ассистент режиссёра',
      '2009 - «Мачеха» О.Бальзака — ассистент режиссёра',
      '2010 - «Эдип» Е.Минчуковой — режиссёр-стажёр',
      '2012 - «Загадочный визит» по пьесе Ф.Дюрренматта — режиссёр (совместно с Б. И. Луценко)',
      '2012 - «Будьте здоровы» П.Шено',
      '2013 - «Родня» по пьесе «Старший сын» А.В.Вампилова',
      '2014 - «Приватная закупка»',
      '2015 - «По щучьему веленью» по мотивам русских народных сказок — режиссёр (совместно с С. М. Ковальчиком)',
      '2015 - «Сон в летнюю ночь или Король лир» У.Шекспир',
      '2015 - «Ужин с Кирой Найтли» Ф.Ноябрьский',
      '2017 - «Посмертная награда для Генерала»',
      '2017 - «Хаос» по пьесе «Мика Мюллюахо»',
      '2018 - «Лавина» по пьесе Тунджер Джудженоглу (совместно с И. Гогия, М. Козолупом, И. Гёзалова, О. Катамадзе)',
      '2018 - «ТварЪ» по пьесе студийцев MetaModern',
      '2018 - «Бюджет» инсценировка по информационному материалу интернет-ресурсаTUT.BY',
    ],
    place: 'Орша',
    coordinates: { lat: 54.5081, lng: 30.4172 },
    video: 'https://www.youtube.com/watch?v=gc9zCCB3KhM',
  },

  {
    gallery: Elston,
    name: 'Лев Михайлович Эльстон',
    img: directorFour,
    info: 'Советский театральный режиссёр. Заслуженный деятель искусств Карельской АССР.',
    biography: {
      dates: ['1900', '1921', '1922', '1924—1936', '1937—1944', '1944—1949', '1949—1953', '1958—1962'],
      events: {
        '1900': 'Родился в Николаеве, Херсонская губерния, Российская империя.',
        '1921': 'Окончил в Одессе драматическую студию под руководством Н.И.Собольщикова-Самарина.',
        '1922': 'Начал работу режиссёром в театрах.',
        '1924—1936': 'Руководил Уральским рабочим реалистическим театром',
        '1937—1944': 'Руководил драматическим театром в Тамбове (также являлся основателем Тамбовского отделения Всероссийского театрального общества)',
        '1944—1949': 'Руководил театром в Симферополе',
        '1949—1953': 'Руководил театром в Кирове',
        '1953—1958': 'Руководил театром в Орле',
        '1958—1962': 'Руководил в Гомельском театре.',
      },
    },
    compositions: [
      '1945 — «Победители» Б.Чирскова',
      '1947 — «Человек с ружьём»',
      '1950 — «Макар Дубрава» А.Корнейчука',
      '1951 — «Семья» Попова',
      '1952 — «Ромео и Джульетта» У.Шекспира',
      '1952 — «Женитьба» Н.Гоголя',
      '1953 — «Двенадцатая ночь» У.Шекспира',
      '1953 — «Канун грозы» Маляревского',
      '1953 — «Дорогой бессмертия» В.Брагина и Г.Товстоногова',
      '1955 — «Дон Карлос»',
      '1956 — «Принцесса Турандот» К.Гоцци',
      '1956 — «Кремлёвские куранты» Н.Погодина',
      '1957 — «Крепостные актёры» Ульянинского',
      '1957 — «Интервенция» Л.Славина',
      '1958 — «Угрюм-река» по роману В.Шишкова',
      '1959 — «Собака на сене» Лопе де Вега',
      '1960 — «Человек в отставке» А.Софронова',
      '1962 — «Океан» А.Штейна',
      '1962 — «Именем Революции» М.Шатрова',
    ],
    place: 'Гомель',
    coordinates: { lat: 52.4345, lng: 30.9754 },
    video: 'https://www.youtube.com/watch?v=sdozKdB1qpk',
  },

  {
    gallery: Rahlenko,
    name: 'Леон Гдальевич Рахленко',
    img: directorFive,
    info: 'Cоветский актёр, режиссёр, педагог. Народный артист СССР',
    biography: {
      dates: ['1907', '1924—1927', '1926—1927', '1927—1928', '1928—1929', '1929—1981', '1986'],
      events: {
        '1907': 'Родился в пос.Тереховка, Гомельский уезд, Могилёвская губерния, Российская империя',
        '1924—1927': 'Учился в Ленинградском техникуме сценических искусств (ученик Л.С.Вивьена и С.Э.Радлова).',
        '1926—1927': 'Артист и ассистент режиссёра Ленинградского рабочего театра Пролеткульта.',
        '1927—1928': 'Художественный руководитель театральной рабочей студии Киевского Совета профсоюзов.',
        '1928—1929': 'Художественный руководитель рабочей театральной самодеятельности текстильных фабрик в Клинцах(Брянская область).',
        '1929—1981': 'Актёр и режиссёр театра им.Я.Купалы в Минске. Режиссёрскую деятельность начал под руководством Е.А.Мировича.',
        '1986': 'Умер и похоронен в Минске на Восточном кладбище.',
      },
    },
    compositions: [
      '1935 — «Жизнь зовет» В.Н.Билль-Белоцерковского',
      '1936 — «Волки и овцы» А.Н.Островского',
      '1937 — «Скупой» Мольера и «Соловей» З.Бядули',
      '1938 — «Партизаны» К.Крапивы, «Без вины виноватые» А.Н.Островского',
      '1939 — «Кто смеётся последним» К.Крапивы',
      '1941 — «В степях Украины» А.Е.Корнейчука',
      '1942 — «Фронт» А.Е.Корнейчука',
      '1943 — «Русские люди» К.М.Симонова',
      '1947 — «Глубокие корни» Д.Гоу и А.д Юссо',
      '1953 — «Коварство и любовь» Ф.Шиллера',
      '1954 — «Огненный мост» Б.С.Ромашова',
      '1956 — «Кремлёвские куранты» Н.Ф.Погодина',
      '1957 — «Грозовой год» А.Я.Каплера',
    ],
    place: 'Минск',
    coordinates: { lat: 53.9, lng: 27.56667 },
    video: 'https://www.youtube.com/watch?v=kimvRGqEe-U',
  },
];
