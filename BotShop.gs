const config = {
  admin_uid: 0,
  token: "", 
  sheet: "",
  webhook: "",
  apiUrl: "https://api.telegram.org/bot",
  no_image: "https://imakebots.ru/resource/img/no-image.jpeg",
  debugger: false
};

const config_lang = {
  ru: {
    name_lang: "🇷🇺 Русский",
    start: {
      keyboard: {
        btn_1: "Каталог",
        btn_2: "Корзина",
        btn_3: "Заказы",
        btn_4: "Оплата и доставка",        
      },
      user: {
        message: "Приветствую тебя, {user}!\n\nВыберите Каталог для просмотра товаров.",
      }
    },
    admin: {
      hello: "Приветствую, Администратор. Выберите действие:",
      controller: {
        btn: {
          catalog: "Каталог",
          pay_delivery: "Оплата и доставка",
          subscribe: "Рассылка",
          orders: "Заказы",
          users: "Пользователи"
        }
      },
      set: {
        hide: "Видимость объекта изменена"
      },
      catalog: {
        rootname: "Корень каталога",
        form: {
          text: "{old_value}Введите значение для поля <b>{db_name}</b>",
          text_old: "Старое значение для <b>{db_name}</b>: {value}\n-----\n",
          photo: "{old_value}Отправьте картинку для поля <b>{db_name}</b>",
          photo_old: "Старое значение для <b>{db_name}</b>\n-----\n"
        },
        description: "Описание",
        name: "Название",
        image: "Изображение",
        price: "Стоимость",
        unit: "Ед.изм",
        preview_0: "<b>Передпросмотр категории:</b>\n\n<b>Название:</b> {name}\n<b>Описание:</b>\n{body}",
        preview_1: "<b>Передпросмотр товара:</b>\n\n<b>Название:</b> {name}\n<b>Описание:</b>\n{body}\n<b>Стоимость:</b> {price}\n<b>Ед.измерения:</b> {unit}\n",
        error: {
          load: "Ошибка записи переданных данных. Попробуйте позже.",
          category: "Не удалось найти категорию. Попробуйте позже.",
          method: "Вы отправили не тот тип данных",
        }
      },
      category: {
        btn: {
          create: "Добавить категорию"
        },
        no_empty: "<b>{name}</b>\n-----\nДанные:",
        empty: "<b>{name}</b>\n-----\nДанных нет, можете добавить",
        has_children: "Удалить не получиться. Категория имеет вложенные объекты.",
        delete: "Вы уверены, что хотите удалить категорию <b>{name}</b>?",
      },
      product: {
        btn: {
          create: "Добавить товар"
        },
        delete: "Вы уверены, что хотите удалить товар <b>{name}</b>?"
      },
      icon: {
          hide_0: "\uD83D\uDE48",
          hide_1: "\uD83D\uDC35",
          edit: "✏️",
          remove: "❌"
      },
      order: {
        setStatus: "Перевести: {status}",
      },
      payDelivery: {
        btn_edit: "✏️ Редактировать",
        form: {
          text: "{old_value}Введите значение для поля <b>{db_name}</b>",
          text_old: "Старое значение для <b>{db_name}</b>: {value}\n-----\n",
          photo: "{old_value}Отправьте картинку для поля <b>{db_name}</b>",
          photo_old: "Старое значение для <b>{db_name}</b>\n-----\n"
        },
        description: "Описание",
        image: "Изображение",
      }
    },
    payDelivery: {
      empty: "Раздел не наполнен"
    },
    catalog: {
      name: "Каталог",
      breadcrumbs: "*****⬇️⬇️⬇️⬇️⬇️*****\n\n\n<b>{breadcrumbs}</b>",
      category: "<b>{name}</b>\n\n{body}",
      category_view: "Посмотреть категорию",
      navigation: "<b>{breadcrumbs}</b>\nПоказано {num} из {total}",
      empty: "<b>{breadcrumbs}</b>\n---\nНет данных",
      see_more: "+ Загрузить еще",
      product: "<b>{name}</b>\n\n{body}\nСтоимость: {price} руб./{unit}",
      product_in_basket: "В корзину {count}",
      product_basket_success: "Товар добавлен в корзину"
    },
    basket: {
      empty: "Ваша корзина пустая. Перейдите в каталог для совершения покупки.",
      model: "<b>Корзина</b>\n\n<b>{name}</b>\n{body}\nСтоимость: {price} руб./{unit}",
      calculation: "{price} * {count} = {total} руб.",
      description: {
        _0: "Расчет суммы за выбранное кол-во товара",
        _1: "Количество товара в корзине",
        _2: "Какой по счету товар отображен",
      },
      model_about_page: "{page} из {total}",
      order: "✔ Оформить {totalSum} руб.",
      delete: "✖",
      up: "▲",
      down: "▼",
      action_1_success: "Количество товара увеличено",
      action_0_success: "Количество товара уменьшено",
      action_count_error: "Не удалось изменить количество товара в корзине",
      model_prev: "<<",
      model_next: ">>"
    },
    order: {
      delivery: {
        _0: "Самовывоз",
        _1: "Доставка"
      },
      pay: {
        _0: "Наличными",
        _1: "Картой через терминал",
        _2: "С карты на карту",
      },
      pickupPoint: "г. Москва, ул. Пушкина, дом. Колотушкина",
      form: {
        text: {
          _0: "<b>Оформление заказа</b>\n\nУкажите ваш телефон в формате +79991234567{error}",
          _1: "<b>Оформление заказа</b>\n\nВыберите тип доставки\nСамовывоз по адресу: {pickupPoint}",
          _2: "<b>Оформление заказа</b>\n\nУкажите адрес доставки",
          _3: "<b>Оформление заказа</b>\n\nВыберите тип оплаты"
        },
        error: {
          _0: "\n---\nВы указали не верный формат телефона"
        }
      },
      preview: {
        toAdminMain: "<b>Новый заказ №{hash}</b>\n{body}\n{items}",
        main: "<b>Оформление заказа №{hash}</b>\n{body}\n{items}",
        body: "{phone_body}{delivery_body}{pay_body}",
        phone: "\n\uD83D\uDD38 <b>Телефон:</b> {phone}",
        delivery_0: "\n\uD83D\uDD38 <b>Самовывоз:</b> {address}",
        delivery_1: "\n\uD83D\uDD38 <b>Доставка:</b> {address}",
        pay: "\n\uD83D\uDD38 <b>Оплата:</b> {pay}\n",
        item: "\uD83D\uDD39 {name}: {price} руб./{unit} * {count} = {sum} руб.\n",
        items: "{items}-----\nИтого: {total} руб.",
      },
      status: {
        new: "новый",
        inWork: "в работе",
        completed: "выполненный",
        canceled: "отмененный"
      },
      body: "<b>{type} - Заказ №{hash}</b>\n\n\uD83D\uDD38 <b>Дата:</b> {date}\n\uD83D\uDD38 <b>Телефон:</b> {phone}{delivery}\n\uD83D\uDD38 <b>Оплата:</b> {pay}\n\uD83D\uDD38 <b>Статус заказа:</b> {status}\n\n{items_body}\n\nПоказан {page} из {total}",
      body_admin: "<b>ADMIN - {type} - Заказ №{hash}</b>\n\n\uD83D\uDD38 <b>Пользователь:</b> {user}\n\uD83D\uDD38 <b>Дата:</b> {date}\n\uD83D\uDD38 <b>Телефон:</b> {phone}{delivery}\n\uD83D\uDD38 <b>Оплата:</b> {pay}\n\uD83D\uDD38 <b>Статус заказа:</b> {status}\n\n{items_body}\n\nПоказан {page} из {total}",
      finish: "✔ Оформить заказ",
      empty: "<b>{type}</b>\n\nВ этой категории заказов нет",
      success: "Спасибо. Заказ успешно оформлен.",
      orders: "Посмотреть свои заказы",
      catalog: "Перейти в Каталог",
      prev: "<<<",
      next: ">>>",
      type_0: "Активные заказы",
      type_1: "Архивные заказы",
    },
    user: {
      hello: "Приветствую Вас, {name}.\nЯ очень жду вашего сообщения.\n------\nСпасибо."
    },
    go: {
      back: "Вернуться",
      yes: "Да",
      no: "Нет",
      finish: "Завершить",
      cancel: "Отменить",
      skip: "Пропустить",
    },
    error: {
      _403: "Доступ запрещен",
      _404: "Объект не найден",
      again: "Попробуйте позже"
    }
  }
}


/**
 * Настройки роутера
 * @type {{buttonCommands: *[], linkCommands: *[]}}
 */
const config_route = {
  linkCommands: [
    {
      template: /^\/start$/,
      method: 'start::run'
    },
    {
      template: /^\/catalog$/,
      method: 'catalog::run'
    },
    {
      template: /^\/basket$/,
      method: 'basket::run'
    },

    {
      template: /^\/orders$/,
      method: 'orders::run'
    },
    {
      template: /^\/paydelivery$/,
      method: 'payDelivery::run'
    },
    {
      template: /^\/admin$/,
      method: 'admin::run'
    },
  ],
  buttonCommands: [
    {
      name: 'start.keyboard.btn_1', // Каталог для пользователя
      method: 'catalog::run'
    },
    {
      name: 'start.keyboard.btn_2', // Корзина
      method: 'basket::run'
    },
    {
      name: 'start.keyboard.btn_3', // Заказы для пользователя
      method: 'orders::run'
    },
    {
      name: 'start.keyboard.btn_4', // Оплата и доставка для пользователя
      method: 'payDelivery::run'
    },
  ]
};

/**
 * Класс родитель Model
 */
class Model {
  /**
   * Получим новый объект
   */
  static find() {
    return new this();
  }

  /**
   * Получим занчение настроек колонок таблицы
   * @returns {string[]|string|number}
   */
  getColumns() {
    return mapClasses[this.constructor.name].table().columns;
  }

  /**
   * Получаем название листа
   * @returns {*}
   */
  getSheetName() {
    return mapClasses[this.constructor.name].table().name;
  }

  /**
   * Получаем файл таблицы
   * @returns {*}
   */
  getFile() {
    return SpreadsheetApp.openById(config.sheet);
  }

  /**
   * Получаем лист
   * @returns {*}
   */
  getSheet() {
    return this.getFile().getSheetByName(this.getSheetName());
  }

  /**
   * Получаем диапазон ячейки
   * @param column
   * @returns {string}
   */
  getRange(column) {
    // получаем буквенный индекс
    let letter = getLetterByIndex(column);
    // вернем диапазон столбца
    return letter + "1:" + letter;
  }

  /**
   * Сохраняекм объект
   * @returns {*}
   */
  save() {
    // проверим наличие hash
    if (isSet(this.hash)) {
      // если он есть - обновляем
      return this.update();
    } else {
      // если его нет добавляем
      return this.insert();
    }
  }

  /**
   * Создаем модель
   * @returns {Model}
   */
  insert() {
    // получим массив столбцов
    let columns = this.getColumns();
    // получим таблицу
    let sheet = this.getSheet();
    // создаем hash
    this.hash = getRandomStr(8);
    // перебираем
    let newData = columns.map(function (key) {
      // получим результат
      return isSet(this[key]) ? this[key] : null;
    }.bind(this));
    // записываем
    sheet.appendRow(newData);
    // вернем
    return this;
  }

  /**
   * Обновляем данные в таблице
   * @returns {Model}
   */
  update() {
    // получим индекс столбца
    let columnHashIdx = this.findIndex('hash');
    // получим данные из базы
    let objOldData = this.findOneBy('hash', this.hash);
    // проверим на наличие
    if (!isNull(objOldData)) {
      // получим таблицу
      let sheet = this.getSheet();
      // получим index строки
      let rowIdx = this.getRowIndex(columnHashIdx, this.hash);
      // перебирем данные из базы
      for (let key in objOldData) {
        // проверим
        if (objOldData[key] !== this[key]) {
          // получим index столбца
          let columnKeyIdx = this.findIndex(key);
          // запишем в таблицу
          sheet
            .getRange(rowIdx, columnKeyIdx)
            .setValue(this[key]);
        }
      }
    }
    // вернем текущий объект
    return this;
  }

  /**
   * Получаем индекс строки
   * @param column
   * @param value
   * @returns {number|null}
   */
  getRowIndex(column, value) {
    // определяем диапазон ячеек в таблице
    const range = this.getSheet().getRange(this.getRange(column));
    // получаем через поиск по переданному значению
    const result = range.createTextFinder(value).matchEntireCell(true).findNext();
    // вернем результат
    return !isNull(result) // если он не null
      ? result.getRow() // вернем номер строки
      : null; // или null
  }

  /**
   * Вернем результат: один или массив объектов
   * @param data
   * @param returnArray
   * @returns {*}
   */
  getResult(data, returnArray = false) {
    // проверим
    if (data.length) {
      // если не нужен массив объектов
      if (!returnArray) {
        // вернем первый объект
        return this.getSelfObject(data[0]);
      } else {
        // вернем массив объектов
        return data.map(function (item) {
          return this.getSelfObject(item);
        }.bind(this));
      }
    }
    // по умолчанию вернем null
    return returnArray ? [] : null;
  }

  /**
   * Преобразуем массив в объект по настройкам слобцов
   * @param data
   * @returns {*}
   */
  getSelfObject(data) {
    // если в данных есть значения
    if (data.length) {
      // создаем объект класса
      let object_ = new mapClasses[this.constructor.name]();
      // получаем массив столбцов
      let columns = this.getColumns();
      // перебираем ключи толбцов
      columns.forEach(function (key, idx) {
        // добавляем в объект
        object_[key] = data[idx]
      });
      // вернем объект
      return object_;
    }
    // по умолчанию вернем null
    return null;
  }

  /**
   * Получим индекс столбца
   * @param column
   * @returns {*}
   */
  findIndex(column) {
    return findIndex(this.getColumns(), column, 1);
  }

  /**
   * Получим все результаты
   * @returns {*}
   */
  all() {
    return this.getResult(this.getSheet().getDataRange().getValues(), true);
  }

  /**
   * Получим максимальное значение по столбцу
   * @param column
   * @returns {number}
   */
  getMaxByColumn(column) {
    let columnIdx = this.findIndex(column);
    let sheet = this.getSheet();
    let result = sheet.getRange(2, columnIdx, sheet.getLastRow()).getValues();
    return Math.max.apply(null, result);
  }

  /**
   * Поиск одного результата в таблице по значению
   * @param column
   * @param value
   * @returns {*}
   */
  findOneBy(column, value) {
    // получим index столбца
    let columnIdx = this.findIndex(column);
    // получим index строки
    let row_id = this.getRowIndex(columnIdx, value)
    // количество столбцов вправо
    let numCols = this.getColumns().length;
    // вернем результат (все результаты строки) если он есть
    return !isNull(row_id)
      ? this.getResult(this.getSheet().getRange(row_id, 1, 1, numCols).getValues())
      : null;
  }

  /**
   * Получаем значение по привязке
   * @param class_
   * @param foreignKey
   * @param localKey
   * @returns {*}
   */
  hasOne(class_, foreignKey, localKey) {
    return mapClasses[class_].find().findOneBy(foreignKey, this[localKey]);
  }

  /**
   * Получаем одну модель по параметрам
   * @param params
   * @param sort
   * @returns {*|Array}
   */
  findOneByParams(params = [], sort = null) {
    return this.getResultByParams(params, "one", sort);
  }

  /**
   * Получаем все модели по параметрам
   * @param params
   * @param sort
   * @returns {*|Array}
   */
  findAllByParams(params = [], sort = null) {
    return this.getResultByParams(params, "all", sort);
  }

  /**
   * Получим по параметрам и с сортировкой
   * @param params
   * @param type
   * @param sort
   * @returns {*}
   */
  getResultByParams(params, type, sort) {
    // получаем результаты по заданным параметрам
    let result = this.findByParams(params);
    // проверяем
    if (result.length) {
      // если задана сортировка
      if (!isNull(sort)) {
        // настройки сортровки
        let [column, direction] = sort;
        // сортируем
        result.sort(function (a, b) {
          return a[column] > b[column]
            ? (direction ? 1 : -1)
            : (direction ? -1 : 1);
        });
      }
      // вернем первый результат
      return type === "one" ? result[0] : result;
    }
    // по умолчанию вернем null
    return [];
  }

  /**
   * Вернем количество найденных
   * @param params
   * @returns {number}
   */
  getCountByParams(params = []) {
    return this.findByParams(params, false).length;
  }

  /**
   * Получаем результат по параметрам фильтрации
   * params = [
   *  {
   *    field: {
   *      column: "name_column"
   *      type: "number | string | date",
   *      action: "like | _like | like_ | not_like | === | !== | > | < | >= | <= | null | not_null | between | not_between"
   *      value: value | [values]
   *    }
   *  }
   * ]
   * @param params
   * @param returnAsObjects
   * @returns {*}
   */
  findByParams(params = [], returnAsObjects = true) {
    // проверяем
    if (params.length) {
      // получаем столбцы
      const columns = this.getColumns();
      // готовим массив фильтров
      let filters = {};
      // перебираем
      params.forEach(function (param) {
        // получим столбцы
        let [column, type, action, value] = param;
        // номер столбца
        let numColumn = columns.indexOf(column) + 1;
        // проверяем
        if (numColumn) {
          // получаем фильтр
          filters["_" + numColumn] = this.getFilterCriteria(column, type, action, value);
        }
      }.bind(this));
      // получаем таблицу
      const sheet = this.getSheet();
      // определяем диапазон
      const range = sheet.getRange(sheet.getDataRange().getA1Notation());
      // создаем фильр
      const filter = range.createFilter();
      // применяем настройки фитрации
      for (let key in filters) {
        filter.setColumnFilterCriteria(+key.slice(1), filters[key]);
      }
      // получаем результаты
      const result = this.getResultAfterFilter(returnAsObjects);
      // удалим фильтрацию
      filter.remove();
      // вернем результаты
      return result;
    }
    // вернем пустой массив
    return [];
  }

  /**
   * Получаем результат после фильтрации
   * @param returnAsObjects
   * @returns {*}
   */
  getResultAfterFilter(returnAsObjects = true) {
    // получим таблицу
    const sheet = this.getSheet();
    // получим данные с таблицы
    const data = sheet.getDataRange().getValues();
    // отфильруем данные
    let result = data.filter((item, key) => {
      // если это не первая строка и не скрыта фильтром
      return key ? !sheet.isRowHiddenByFilter(key += 1) : false;
    });
    // вернем массив с объектами или чистый массив
    return returnAsObjects ? this.getResult(result, true) : result;
  }

  /**
   * Вернем настройку фильтра
   * @param column
   * @param type
   * @param action
   * @param value
   * @returns {*}
   */
  getFilterCriteria(column, type, action, value) {
    /**
     * value - может быть
     *  строка ("tech")
     *  число (10)
     *  массив строк (["tech","business"])
     *  массив чисел ([10,20,30])
     *  диапазон из 2 чисел  (1, 25) только при between
     */
      // проверим action
    let isBetween = action.toLowerCase().includes("between");
    // проверим на массив
    let valueIsArray = Array.isArray(value);
    // подготовим массив для данных
    let values = [];
    // проверим
    if (isBetween) {
      // если это between - то заменим массив
      values = value;
    } else {
      // проверим на массив
      if (valueIsArray) {
        // получим диапазон столбца
        let range = this.getRange(this.findIndex(column));
        // рисуем формулу "=REGEXMATCH()"
        let formula = "REGEXMATCH(TO_TEXT(" + range + "); \"(" + value.join("|") + ")\")";
        // дополним
        values = action === "===" ? ["=" + formula] : ["=NOT(" + formula + ")"];
      } else {
        // добавим в массив
        values.push(value);
      }
    }
    // вернем настройку
    return SpreadsheetApp
      .newFilterCriteria()
      [this.getFilterCriteriaMethod(type, action, Array.isArray(value))](...values)
      .build();
  }

  /**
   * Получим необходимы метод фильтрации
   * @param type
   * @param action
   * @param isArray
   * @returns {string}
   */
  getFilterCriteriaMethod(type, action, isArray) {
    if (action === "null") {
      return "whenCellEmpty";
    } else if (action === "not_null") {
      return "whenCellNotEmpty";
    } else if (action === "like") {
      if (type === "string") {
        return "whenTextContains";
      }
    } else if (action === "_like") {
      if (type === "string") {
        return "whenTextStartsWith";
      }
    } else if (action === "like_") {
      if (type === "string") {
        return "whenTextEndsWith";
      }
    } else if (action === "not_like") {
      if (type === "string") {
        return "whenTextDoesNotContain";
      }
    } else if (action === "===") {
      if (type === "string") {
        return isArray
          ? "whenFormulaSatisfied"
          : "whenTextEqualTo";
      } else if (type === "number") {
        return isArray
          ? "whenFormulaSatisfied"
          : "whenNumberEqualTo";
      } else if (type === "date") {
        return isArray
          ? "whenFormulaSatisfied"
          : "whenDateEqualTo";
      }
    } else if (action === "!==") {
      if (type === "string") {
        return isArray
          ? "whenFormulaSatisfied"
          : "whenTextNotEqualTo";
      } else if (type === "number") {
        return isArray
          ? "whenFormulaSatisfied"
          : "whenNumberNotEqualTo";
      } else if (type === "date") {
        return isArray
          ? "whenFormulaSatisfied"
          : "whenDateNotEqualTo";
      }
    } else if (action === ">") {
      if (type === "number") {
        return "whenNumberGreaterThan";
      } else if (type === "date") {
        return "whenDateAfter";
      }
    } else if (action === ">=") {
      if (type === "number") {
        return "whenNumberGreaterThanOrEqualTo";
      }
    } else if (action === "<") {
      if (type === "number") {
        return "whenNumberLessThan";
      } else if (type === "date") {
        return "whenDateBefore";
      }
    } else if (action === "<=") {
      if (type === "number") {
        return "whenNumberLessThanOrEqualTo";
      }
    } else if (action === "between") {
      if (type === "number") {
        return "whenNumberBetween";
      }
    } else if (action === "not_between") {
      if (type === "number") {
        return "whenNumberNotBetween";
      }
    }
    // по умолчанию вернем
    return "whenCellEmpty";
  }

  /**
   * Удалим строку
   */
  delete() {
    // найти по hash
    let rowIndex = this.getRowIndex(this.findIndex('hash'), this.hash);
    // удалим
    this.getSheet().deleteRow(rowIndex);
  }

  /**
   * Получаем следующую позицию
   * @param column
   * @returns {number}
   */
  getNextPosition(column = "position") {
    // получим максимальное значение по столбцу
    let max = this.getMaxByColumn(column);
    // увеличим на 100
    return 100 - (max % 100) + max;
  }
}

/**
 * Класс корзна пользователя
 */
class Basket extends Model {
  /**
   * Настройки таблицы
   */
  static table() {
    return {
      name: "Baskets",
      columns: ['hash', 'uid', 'product_hash', 'count', 'created_at'],
    }
  }

  /**
   * Создаем запись
   * @param hash
   * @param uid
   * @param count
   * @returns {*}
   */
  static create(hash, uid, count = 1) {
    let model = new this();
    // наполним первичными данными
    model.uid = uid;
    model.product_hash = hash;
    model.count = count;
    model.created_at = getDateToSeconds();
    // сохраним и вернем результат
    return model.save();
  }

  /**
   * Получим количество
   * @returns {*}
   */
  getCount() {
    return this.count;
  }

  /**
   * Запишем количество
   * @param count
   * @returns {*}
   */
  setCount(count) {
    this.count = count;
    return this.save();
  }

  /**
   * Стоимость корзины
   * @param uid
   * @returns {T | number}
   */
  static getTotalSum(uid) {
    // получим все запсис
    return this.find().findAllByParams([["uid", "number", "===", uid]])
    // переберем значения и сложим начиная от 0
      .reduce(function (sum, model, idx) {
        // получим продукт
        let product = Product.find().findOneBy("hash", model.product_hash);
        // проверим
        if (product) {
          // добавим значение если продукт есть
          return sum + (product.price * model.count);
        }
      }, 0);
  }

  /**
   * Очистим корзину
   * @param uid
   */
  static clear(uid) {
    // получим все значения
    this.find().findAllByParams([["uid", "number", "===", uid]])
    // переберем
      .forEach(function (model) {
        // удалим каждое
        model.delete();
      });
  }
}

/**
 * Класс Бот
 */
class Bot {
  /**
   * Создаем объект класса
   * @param token
   * @param data
   */
  constructor(token, data) {
    // записываем токен бота
    this.token = token;
    // и полученный объект с данными от Телеграм
    this.data = data;
  }

  /**
   * Получаем данные обновления
   * @returns {*|null}
   */
  getUpdate() {
    return this.data || null;
  }

  /**
   * Получим тип обновлений
   * @returns {*}
   */
  getUpdateType() {
    let update = this.getUpdate();
    let types = [
      'message',
      'callback_query',
      'edited_message',
      'inline_query',
      'channel_post'
    ];
    // перебираем
    for (let type of types) {
      if (type in update) {
        return type;
      }
    }
    // по умолчанию вернем null
    return null;
  }

  /**
   * Получим сообщение
   * @returns {*}
   */
  getMessage() {
    if (this.isMessage()) {
      return this.getUpdate().message || null;
    } else if (this.isCallBack()) {
      return this.getCallbackQuery().message || null;
    }
    return null;
  }

  /**
   * Получим callback объект
   * @returns {*|null}
   */
  getCallbackQuery() {
    return ('callback_query' in this.getUpdate()) ? this.getUpdate().callback_query : null;
  }

  /**
   * @return mixed
   * @returns {*|null}
   */
  getInlineQuery() {
    return ('inline_query' in this.getUpdate()) ? this.getUpdate().inline_query : null;
  }

  /**
   * Получаем данные автора сообщения
   * @returns {*}
   */
  getFrom() {
    if (this.isMessage()) {
      return ('from' in this.getMessage()) ? this.getMessage().from : null;
    } else if (this.isInline()) {
      return ('from' in this.getInlineQuery()) ? this.getInlineQuery().from : null;
    } else if (this.isCallBack()) {
      return ('from' in this.getCallbackQuery()) ? this.getCallbackQuery().from : null;
    }
    return null;
  }

  /**
   * Получим чат
   * @returns {*|null}
   */
  getChat() {
    return ('chat' in this.getMessage()) ? this.getMessage().chat : null;
  }

  /**
   * Получаем данные пользователя
   * @returns {{uid: (*|number), firstname: (string|string), lang: (string|string), lastname: (string|string), username: (string|string)}}
   */
  getUserData() {
    // вернем данные для создания обновления пользователя
    return {
      // его uid
      uid: this.getFrom().id,
      // его первое имя
      firstname: this.getFromFirstName(),
      // его второе имя
      lastname: this.getFromLastName(),
      // его username
      username: this.getFromUserName(),
      // его языковую настройку
      lang: this.getFromUserLang()
    }
  }

  /**
   * Entities - форматировние
   * @returns {*}
   */
  getEntities() {
    // если это сообщение
    if (this.isMessage()) {
      // если это текствое сообщение
      if (this.isText()) {
        // вернем текстовое форматирование если оно существует
        return ('entities' in this.getMessage())
          ? this.getMessage().entities
          : null;
      } else {
        // если это не текствое сообщение, тогда вернем форматирование описания
        return ('caption_entities' in this.getMessage())
          ? this.getMessage().caption_entities
          : null;
      }
    } else {
      // если это другой тип данных вернем null
      return null;
    }
  }

  /**
   * MessageText - получаем текст или описание объекта
   * @returns {*}
   */
  getMessageText() {
    // медиа объекты с возможным описанием
    let medias = [
      'audio',
      'document',
      'photo',
      'animation',
      'video',
      'voice'
    ];
    // если это текствое сообщение
    if (this.isText()) {
      // вернем текст сообщения
      return this.getMessage().text ?? null;
    } // если это медиа сообщение с описанием
    else if (medias.includes(this.getMessageType())) {
      // вернем описание объекта
      return this.getMessage().caption ?? null;
    } else {
      // если не подходит условия вернем null
      return null;
    }
  }

  /**
   * Message Type
   * @returns {*}
   */
  getMessageType() {
    // получаем объект сообщения
    let message = this.getMessage();
    let types = [
      'text',
      'photo',
      'audio',
      'document',
      'animation',
      'sticker',
      'voice',
      'video_note',
      'video',
      'location'
    ];
    // перебираем
    for (let type of types) {
      if (type in message) {
        return type;
      }
    }
    // по умолчанию вернем null
    return null;
  }

  /**
   * Message File Id
   * @returns {*}
   */
  getMessageFileId() {
    // получаем объект сообщения
    let message = this.data.message;
    // получим тип сообщения
    let type = this.getMessageType();
    // вернем результат
    return type === "photo"
      ? message.photo.pop().file_id
      : message[type].file_id;
  }

  /**
   * Message ID
   * @returns {any}
   */
  getMessageId() {
    return ('message_id' in this.getMessage()) ? this.getMessage().message_id : null;
  }

  /**
   * Значение на кнопке
   * @returns {null}
   */
  getCallbackQueryData() {
    return ('data' in this.getCallbackQuery()) ? this.getCallbackQuery().data : null;
  }

  /**
   * CallBack ID
   * @returns {null}
   */
  getCallbackQueryId() {
    return ('id' in this.getCallbackQuery()) ? this.getCallbackQuery().id : null;
  }

  /**
   * Тип чата
   * @returns {null}
   */
  getChatType() {
    return ('type' in this.getChat()) ? this.getChat().type : null;
  }

  /**
   * Чат ID
   * @returns {number}
   */
  getChatId() {
    return ('id' in this.getChat()) ? this.getChat().id : 0;
  }

  /**
   * Пользователь ID
   * @returns {number}
   */
  getFromId() {
    return ('id' in this.getFrom()) ? this.getFrom().id : 0;
  }

  /**
   * Фамилия
   * @returns {string}
   */
  getFromFirstName() {
    return ('first_name' in this.getFrom()) ? this.getFrom().first_name : "";
  }

  /**
   * Имя
   * @returns {string}
   */
  getFromLastName() {
    return ('last_name' in this.getFrom()) ? this.getFrom().last_name : "";
  }

  /**
   * Username
   * @returns {string}
   */
  getFromUserName() {
    return ('username' in this.getFrom()) ? this.getFrom().username : "";
  }

  /**
   * настройки языковые
   * @returns {string}
   */
  getFromUserLang() {
    return ('language_code' in this.getFrom()) ? this.getFrom().language_code : "ru";
  }

  /**
   * Полное имя
   * @returns {string}
   */
  getFromFullName() {
    return (this.getFromFirstName() + " " + this.getFromLastName()).trim();
  }

  /**
   * Проверка на сообщение
   * @returns {boolean}
   */
  isMessage() {
    return this.getUpdateType() === "message";
  }

  /**
   * Проверка на кнопку
   * @returns {boolean}
   */
  isCallBack() {
    return this.getUpdateType() === "callback_query";
  }

  /**
   * Проверка на встроенный запрос
   * @returns {boolean}
   */
  isInline() {
    return this.getUpdateType() === "inline_query";
  }

  /**
   * Проверка на текст
   * @returns {boolean}
   */
  isText() {
    return this.getMessageType() === "text";
  }

  /**
   * Проверка на картинку
   * @returns {boolean}
   */
  isPhoto() {
    return this.getMessageType() === "photo";
  }

  /**
   * Проверка на аудио
   * @returns {boolean}
   */
  isAudio() {
    return this.getMessageType() === "audio";
  }

  /**
   * Проверка на документ
   * @returns {boolean}
   */
  isDocument() {
    return this.getMessageType() === "document";
  }

  /**
   * Проверка на анимацию
   * @returns {boolean}
   */
  isAnimation() {
    return this.getMessageType() === "animation";
  }

  /**
   * Проверка на стикер
   * @returns {boolean}
   */
  isSticker() {
    return this.getMessageType() === "sticker";
  }

  /**
   * Проверка на голосовое сообщение
   * @returns {boolean}
   */
  isVoice() {
    return this.getMessageType() === "voice";
  }

  /**
   * Проверка на видео заметку
   * @returns {boolean}
   */
  isVideoNote() {
    return this.getMessageType() === "video_note";
  }

  /**
   * Проверка на видео
   * @returns {boolean}
   */
  isVideo() {
    return this.getMessageType() === "video";
  }

  /**
   * Проверка на локацию
   * @returns {boolean}
   */
  isLocation() {
    return this.getMessageType() === "location";
  }

  /**
   * Проверка на тип чата группа
   * @returns {boolean}
   */
  isGroup() {
    return ["group", "supergroup"].includes(this.getChatType());
  }

  /**
   * Проверка на тип чата приватный
   * @returns {boolean}
   */
  isPrivate() {
    return this.getChatType() === "private";
  }

  /**
   * Отправляем действие пользователю
   * @param chat_id
   * @param action
   *
   * typing
   * upload_photo
   * record_video
   * upload_video
   * record_voice
   * upload_voice
   * upload_document
   * choose_sticker
   * find_location
   * record_video_note
   * upload_video_note
   *
   * @param chat_id
   * @param action
   * @returns {*}
   */
  sendChatAction(chat_id, action = "typing") {
    // готовим данные
    let payload = {
      method: "sendChatAction",
      chat_id: String(chat_id),
      action: action,
    };
    // вернем результат отправки
    return this.query(payload);
  }

  /**
   * Уведомление в клиенте
   * @param text
   * @param type
   * @returns {*}
   */
  notice(text = null, type = false) {
    if (this.isCallBack()) {
      // готовим данные
      let payload = {
        method: "answerCallbackQuery",
        callback_query_id: String(this.getCallbackQueryId()),
        show_alert: type,
      };
      if (!isNull(text)) {
        payload.text = text;
      }
      // вернем результат отправки
      return this.query(payload);
    }
  }

  /**
   * Уведомление с удалением
   * @param text
   * @param type
   */
  noticeDelete(text = null, type = false) {
    if (this.isCallBack()) {
      this.notice(text, type);
      this.deleteMessageSelf();
    }
  }

  /**
   * Удаляем сообщение без параметров
   * @returns {*}
   */
  deleteMessageSelf() {
    // предотвращаем повторное удаление
    if (this.deleted_message !== this.getChatId() + "_" + this.getMessageId()) {
      return this.deleteMessage(this.getChatId(), this.getMessageId());
    }
  }

  /**
   * Удаляем сообщение
   * @param chat_id
   * @param message_id
   * @returns {*}
   */
  deleteMessage(chat_id, message_id) {
    // записываем какое сообщение удалили
    this.deleted_message = chat_id + "_" + message_id;
    // готовим данные
    let payload = {
      method: "deleteMessage",
      chat_id: String(chat_id),
      message_id: String(message_id)
    };
    // вернем результат
    return this.query(payload);
  }

  /**
   * Кнопка inline
   * @param text
   * @param callback_data
   * @param url
   * @param switch_inline_query
   * @returns {{text: *}}
   */
  buildInlineKeyboardButton(text, callback_data = null, url = null, switch_inline_query = null) {
    // рисуем кнопке текст
    let replyMarkup = {
      text: text
    };
    // пишем одно из обязательных дополнений кнопке
    if (!isNull(url)) {
      replyMarkup.url = url;
    } else if (!isNull(callback_data)) {
      replyMarkup.callback_data = callback_data;
    } else if (!isNull(switch_inline_query)) {
      replyMarkup.switch_inline_query = switch_inline_query;
    }
    // возвращаем кнопку
    return replyMarkup;
  }

  /**
   * Набор кнопок inline
   * @param options
   * @returns {string}
   */
  buildInlineKeyBoard(options) {
    // собираем кнопки
    return JSON.stringify({
      inline_keyboard: options,
    });
  }

  /**
   * Кнопка клавиатуры
   * @param text
   * @param request_contact
   * @param request_location
   * @returns {{request_location: boolean, text: *, request_contact: boolean}}
   */
  buildKeyboardButton(text, request_contact = false, request_location = false) {
    return {
      text: text,
      request_contact: request_contact,
      request_location: request_location,
    };
  }

  /**
   * Готовим набор кнопок клавиатуры
   * @param options
   * @param onetime
   * @param resize
   * @param selective
   * @returns {string}
   */
  buildKeyBoard(options, onetime = false, resize = true, selective = true) {
    return JSON.stringify({
      keyboard: options,
      one_time_keyboard: onetime,
      resize_keyboard: resize,
      selective: selective
    });
  }

  /**
   * Отправляем сообщение
   * @param chat_id
   * @param text
   * @param buttons
   * @param keyBoard
   * @param disableUrl
   * @returns {*}
   */
  sendMessage(chat_id, text, buttons = null, keyBoard = false, disableUrl = false) {
    // готовим данные
    let payload = {
      method: "sendMessage",
      chat_id: String(chat_id),
      text: text,
      parse_mode: "HTML",
      disable_web_page_preview: disableUrl
    };
    // если переданны кнопки то добавляем их к сообщению
    if (!isNull(buttons) && Array.isArray(buttons)) {
      payload.reply_markup = keyBoard
        ? this.buildKeyBoard(buttons)
        : this.buildInlineKeyBoard(buttons);
    }
    // вернем результат отправки
    return this.query(payload);
  }

  /**
   * Отправляем видео с inline кнопками
   * @param chat_id
   * @param video
   * @param caption
   * @param buttons
   * @param url
   * @returns {*}
   */
  sendVideo(chat_id, video, caption = null, buttons = null, url = false) {
    // готовим данные
    let payload = {
      method: "sendVideo",
      chat_id: String(chat_id),
      video: video,
      parse_mode: "HTML",
      disable_web_page_preview: url
    };
    // если есть описание
    if (!isNull(caption)) {
      payload.caption = caption;
    }
    // если переданны кнопки то добавляем их к сообщению
    if (!isNull(buttons) && Array.isArray(buttons)) {
      payload.reply_markup = this.buildInlineKeyBoard(buttons);
    }
    // вернем результат отправки
    return this.query(payload);
  }

  /**
   * Отправляем фотографию
   * @param chat_id
   * @param photo
   * @param caption
   * @param buttons
   * @param url
   * @returns {*}
   */
  sendPhoto(chat_id, photo, caption = null, buttons = null, url = false) {
    // готовим данные
    let payload = {
      method: "sendPhoto",
      chat_id: String(chat_id),
      photo: photo,
      parse_mode: "HTML",
      disable_web_page_preview: url
    };
    // если есть описание
    if (!isNull(caption)) {
      payload.caption = caption;
    }
    // если переданны кнопки то добавляем их к сообщению
    if (!isNull(buttons) && Array.isArray(buttons)) {
      payload.reply_markup = this.buildInlineKeyBoard(buttons);
    }
    // вернем результат отправки
    return this.query(payload);
  }

  /**
   * Обновляем клавиатуру
   * @param chat_id
   * @param message_id
   * @param buttons
   * @returns {*}
   */
  editMessageReplyMarkup(chat_id, message_id, buttons) {
    // готовим данные
    let payload = {
      method: "editMessageReplyMarkup",
      chat_id: String(chat_id),
      message_id: String(message_id),
      reply_markup: this.buildInlineKeyBoard(buttons)
    };
    // вернем результат отправки
    return this.query(payload);
  }

  /**
   * Редактируем сообщение
   * @param chat_id
   * @param message_id
   * @param text
   * @param buttons
   * @param keyBoard
   * @param disableUrl
   * @returns {*}
   */
  editMessageText(chat_id, message_id, text, buttons = null, keyBoard = false, disableUrl = false) {
    // готовим данные
    let payload = {
      method: "editMessageText",
      chat_id: String(chat_id),
      message_id: String(message_id),
      text: text,
      parse_mode: "HTML",
      disable_web_page_preview: disableUrl,
    };
    if (!isNull(buttons) && Array.isArray(buttons)) {
      payload.reply_markup = keyBoard
        ? this.buildKeyBoard(buttons)
        : this.buildInlineKeyBoard(buttons);
    }
    // вернем результат отправки
    return this.query(payload);
  }

  /**
   * Редактируем медиа
   * @param chat_id
   * @param message_id
   * @param media
   * @param buttons
   * @returns {*}
   */
  editMessageMedia(chat_id, message_id, media, buttons = null) {
    // готовим данные
    let payload = {
      method: "editMessageMedia",
      chat_id: String(chat_id),
      message_id: String(message_id),
      media: JSON.stringify(media),
    };
    // если переданны кнопки то добавляем их к сообщению
    if (!isNull(buttons) && Array.isArray(buttons)) {
      payload.reply_markup = this.buildInlineKeyBoard(buttons);
    }
    // вернем результат отправки
    return this.query(payload);
  }

  /**
   * Создадим объект медиа
   * @param media
   * @param type
   * @param caption
   * @returns {{parse_mode: string, media: *, type: *}}
   */
  inputMedia(media, type, caption = null) {
    // готовим данные
    let media_ = {
      type: type,
      media: media,
      parse_mode: 'html'
    };
    // если есть описание
    if (!isNull(caption)) {
      media_.caption = caption;
    }
    // отправляем объект
    return media_;
  }

  /**
   * Запрос в Телеграм
   * @param payload
   * @returns {any}
   */
  query(payload) {
    // готовим данные
    let data = {
      method: "post",
      payload: payload
    };
    return JSON.parse(UrlFetchApp.fetch(config.apiUrl + this.token + "/", data).getContentText());
  }
}


/**
 * Класс категория
 */
class Category extends Model {
  /**
   * Настройки таблицы
   * @returns {{columns: string[], name: string}}
   */
  static table() {
    return {
      name: "Categories",
      columns: ['hash', 'name', 'parent', 'type', 'description', 'position', 'hide', 'uid'],
    }
  }

  /**
   * Набор данных для формы
   * @returns {*[]}
   */
  static getFields() {
    return [
      {
        type: "text",
        db_name: "name",
        validate: "string",
        required: true
      },
      {
        type: "text",
        db_name: "description",
        validate: "string",
        required: true
      },
      {
        type: "photo",
        db_name: "image",
        validate: false,
        required: false
      },
    ];
  }

  /**
   * Создаем объект
   * @param parent
   * @param uid
   * @returns {*}
   */
  static create(parent, uid) {
    let model = new this();
    model.name = "";
    model.description = "";
    model.parent = parent;
    model.uid = uid;
    model.type = 0;
    model.hide = 0;
    model.position = model.getNextPosition();
    return model.save();
  }

  /**
   * Получаем родителя
   * @returns {*}
   * @private
   */
  _parent() {
    return this.hasOne("Category", "hash", "parent");
  }

  /**
   * Получаем видимость
   * @returns {*}
   */
  getHide() {
    return this.hide;
  }

  /**
   * Устанавливаем видимость
   * @param hide
   */
  setHide(hide) {
    this.hide = hide;
    this.save();
  }

  /**
   * Получаем название
   * @returns {*}
   */
  getName() {
    return this.name;
  }

  /**
   * Устанавливаем название
   * @param name
   * @returns {*}
   */
  setName(name) {
    this.name = name;
    return this.save();
  }

  /**
   * Получаем описание
   * @returns {*}
   */
  getDescription() {
    return this.description;
  }

  /**
   * Устанавливаем описание
   * @param description
   * @returns {*}
   */
  setDescription(description) {
    this.description = description;
    return this.save();
  }

  /**
   * Получаем картинку
   * @returns {*}
   */
  getImage() {
    return this.hasOne("Media", "parent", "hash");
  }

  /**
   * Устанавливаем картинку
   * @param image
   * @returns {*}
   */
  setImage(image) {
    // получим картинку
    let image_ = this.getImage();
    // если она есть
    if (!isNull(image_)) {
      // заменим
      image_.file_id = image;
      // сохраним новое значение
      return image_.save();
    } else {
      // если нет картинки то создадим
      return Media.create(this.hash, "photo", "category", image);
    }
  }

  /**
   * Получим тип
   * @returns {*}
   */
  getType() {
    return this.type;
  }

  /**
   * Установим тип
   * @param type
   * @returns {*}
   */
  setType(type) {
    this.type = type;
    return this.save();
  }

  /**
   * Получаем вложенные объекты
   * @returns {*}
   */
  hasChildren() {
    // данные для поиска
    let search_param = [
      ["parent", "string", "===", this.hash]
    ];
    // получаем количество вложенных категорий
    let items_count = this.getCountByParams(search_param);
    // если категорий нет
    if (!items_count) {
      // получаем количество вложенных товаров
      items_count = Product.find().getCountByParams(search_param);
    }
    // вернем результат
    return items_count;
  }

  /**
   * Хлебные крошки для категории
   * @param parent
   * @param data
   * @returns {string}
   */
  static breadCrumbs(parent, data = []) {
    // получаем категорию
    let category = Category.find().findOneBy("hash", parent);
    // проверяем
    if (!isNull(category)) {
      if (category.parent) {
        Category.breadCrumbs(category.parent, data);
      }
      data.push(category.name);
    }
    return data.join(" :: ");
  }
}

/**
 * Класс Lang
 */
class Lang {
  /**
   * Создаем объект Lang
   * @param userLang
   */
  constructor(userLang = 'ru') {
    // получаем данные из общих настроек
    this.langParams = config_lang;
    // записываем языковую настроку пользователя
    this.setLang(userLang);
  }

  /**
   * Уставнавливаем параметр lang
   * @param userLang
   */
  setLang(userLang) {
    // если настроки по переданному параметру существуют
    this.lang = isSet(this.langParams[userLang])
      ? userLang // то устанавливаем
      : 'ru'; // иначе вернем по умолчанию
  }

  /**
   * Получаем значение из массива
   * @param arr
   * @param obj
   * @returns {*}
   */
  getParamByDot(arr, obj) {
    // получаем первый элемент массива
    let name = arr.shift();
    // проверяем есть ли еще в массиве другие параметры
    if (arr.length > 0) {
      // направляем на рекурсию
      return this.getParamByDot(arr, obj[name]);
    }
    // вернем настройку
    return obj[name];
  }

  /**
   * Готовим значение
   * @param param
   * @param data
   * @returns {*}
   */
  getParam(param, data = {}) {
    // получаем текстовую настройку
    let text = this.getParamByDot(param.split('.'), this.langParams[this.lang]);
    // если настройка не найдена
    if (!isSet(text)) {
      // то вернем заглушку
      return "Unknown Text";
    } // Если настройка найдена
    else {
      // проверяем переданы ли значения под замену
      if (Object.keys(data).length > 0) {
        // перебираем значения
        for (let key in data) {
          // создаем шаблон
          let template = new RegExp('{' + key + '}', 'gi');
          // заменяем
          text = text.replace(template, data[key]);
        }
      }
      // вернем настройку
      return text;
    }
  }
}

/**
 * Класс Media
 */
class Media extends Model {
  /**
   * Настройки таблицы
   * @returns {{columns: string[], name: string}}
   */
  static table() {
    return {
      name: "Medias",
      columns: ['hash', 'parent', 'type', 'parent_type', 'file_id'],
    }
  }

  /**
   * Создаем модель медиа
   * @param parent
   * @param type
   * @param parent_type
   * @param file_id
   * @returns {*}
   */
  static create(parent, type, parent_type, file_id) {
    let model = new this();
    model.parent = parent;
    model.type = type;
    model.parent_type = parent_type;
    model.file_id = file_id;
    return model.save();
  }
}

/**
 * Класс заказ
 */
class Order extends Model {
  /**
   * Настройки таблицы
   * @returns {{columns: string[], name: string}}
   */
  static table() {
    return {
      name: "Orders",
      columns: ['hash', 'uid', 'phone', 'delivery', 'address', 'pay', 'type', 'status', 'created_at'],
    }
  }

  /**
   * Возможные переводы статусов
   * @returns {{new: string[], canceled: Array, inWork: string[], completed: Array}}
   */
  static setStatuses() {
    return {
      new: ["inWork", "completed", "canceled"],
      inWork: ["completed", "canceled"],
      completed: [],
      canceled: [],
    };
  }

  /**
   * Поля для заказа
   * @returns {*[]}
   */
  static getFields() {
    return [
      {
        type: "text",
        skip: false,
        validate: "^[+]{1}[1-9][0-9]{9,14}$",
        name: "phone",
        buttons: false
      },
      {
        type: "callBack",
        skip: false,
        validate: false,
        name: "delivery",
        buttons: 2
      },
      {
        type: "text",
        skip: {
          step: "delivery",
          value: 0
        },
        validate: false,
        name: "address",
        buttons: false
      },
      {
        type: "callBack",
        skip: false,
        validate: false,
        name: "pay",
        buttons: 3
      },
    ];
  }

  /**
   * Статусы заказов
   * @returns {{_0: string[], _1: string[]}}
   */
  static statuses() {
    return {
      _0: [
        "new",
        "inWork"
      ],
      _1: [
        "completed",
        "canceled"
      ]
    }
  }

  /**
   * Создаем модель
   * @param uid
   * @returns {*}
   */
  static create(uid) {
    let model = new this();
    model.uid = uid;
    model.phone = "";
    model.address = "";
    model.delivery = "";
    model.pay = "";
    model.type = 0;
    model.status = "new";
    model.created_at = getDateToSeconds();
    return model.save();
  }

  /**
   * Получаем телефон
   * @returns {*}
   */
  getPhone() {
    return this.phone;
  }

  /**
   * Устанавливаем телефон
   * @param phone
   * @returns {*}
   */
  setPhone(phone) {
    this.phone = phone;
    return this.save();
  }

  /**
   * Получаем адрес
   * @returns {*}
   */
  getAddress() {
    return this.address;
  }

  /**
   * Устанавливаем адрес
   * @param address
   * @returns {*}
   */
  setAddress(address) {
    this.address = address;
    return this.save();
  }

  /**
   * Получаем доставку
   * @returns {*}
   */
  getDelivery() {
    return this.delivery;
  }

  /**
   * Устанавливаем доставку
   * @param delivery
   * @returns {*}
   */
  setDelivery(delivery) {
    this.delivery = delivery;
    return this.save();
  }

  /**
   * Получаем тип платежа
   * @returns {*}
   */
  getPay() {
    return this.pay;
  }

  /**
   * Устанавливаем тип платежа
   * @param pay
   * @returns {*}
   */
  setPay(pay) {
    this.pay = pay;
    return this.save();
  }

  /**
   * Получаем тип
   * @returns {*}
   */
  getType() {
    return this.type;
  }

  /**
   * Устанавливаем тип
   * @param type
   * @returns {*}
   */
  setType(type) {
    this.type = type;
    return this.save();
  }

  /**
   * Получаем статус
   * @returns {*}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Устанавливаем статус
   * @param status
   * @returns {*}
   */
  setStatus(status) {
    this.status = status;
    return this.save();
  }

  /**
   * Получаем пользователя
   * @returns {*}
   * @private
   */
  _user() {
    return this.hasOne("User", "uid", "uid");
  }

  /**
   * Удаляем все недооформленные заказы пользователя
   * @param uid
   */
  static deleteOld(uid) {
    // получаем все незаполненные заказы
    this.find().findAllByParams([
      ["uid", "number", "===", uid],
      ["type", "number", "===", 0]
    ])
    // перебираем их
      .forEach(function (order) {
        // удаляем каждый
        order.delete();
      });
  }
}

/**
 * Класс элемент заказа
 */
class OrderItem extends Model {
  /**
   * Настройки таблицы
   * @returns {{columns: string[], name: string}}
   */
  static table() {
    return {
      name: "OrderItems",
      columns: ['hash', 'parent', 'product_name', 'product_price', 'product_unit', 'product_count'],
    }
  }

  /**
   * Создаем модель
   * @param order_hash
   * @param count
   * @param product
   * @returns {*}
   */
  static create(order_hash, count, product) {
    let model = new this();
    model.parent = order_hash;
    model.product_name = product.name;
    model.product_price = product.price;
    model.product_unit = product.unit;
    model.product_count = count;
    return model.save();
  }
}

/**
 * Класс вспомогательных страниц
 */
class Page extends Model {
  /**
   * Настройки таблицы
   * @returns {{columns: string[], name: string}}
   */
  static table() {
    return {
      name: "Pages",
      columns: ['hash', 'type', 'image', 'description', 'description_entities'],
    }
  }

  /**
   * Набор данных для формы
   * @returns {*[]}
   */
  static getFields() {
    return [
      {
        type: "text",
        db_name: "description",
        validate: "string",
        required: true
      },
      {
        type: "photo",
        db_name: "image",
        validate: false,
        required: false
      },
    ];
  }

  /**
   * Получаем страницу
   * @param type
   * @returns {*}
   */
  static getPage(type) {
    // ищем страницу в таблице
    let page = this.find().findOneBy("type", type);
    // если страницы нет
    if (!page) {
      // создаем
      page = this.create(type);
    }
    // вернем результат
    return page;
  }

  /**
   * Создаем страницу
   * @param type
   * @returns {*}
   */
  static create(type) {
    let model = new this();
    model.type = type;
    model.image = "";
    model.description = "";
    model.description_entities = "";
    model.entities = "";
    return model.save();
  }

  /**
   * Получаем описание
   * @returns {*}
   */
  getDescription() {
    return isEmpty(this.description)
      ? null
      : prepareMessageWithEntities(this.description, this.getDescriptionEntities());
  }

  /**
   * Устанавливаем описание
   * @param description
   * @returns {*}
   */
  setDescription(description) {
    this.description = description;
    return this.save();
  }

  /**
   * Получаем форматирование описания
   * @returns {null}
   */
  getDescriptionEntities() {
    return isEmpty(this.description_entities)
      ? null
      : JSON.parse(this.description_entities);
  }

  /**
   * Устанавливаем форматирование описанию
   * @param entities
   * @returns {*}
   */
  setDescriptionEntities(entities) {
    this.description_entities = entities;
    return this.save();
  }

  /**
   * Получаем картинку
   * @returns {null}
   */
  getImage() {
    return isEmpty(this.image)
      ? null
      : this.image;
  }

  /**
   * Устанавливаем картинку
   * @param image
   * @returns {*}
   */
  setImage(image) {
    this.image = image;
    return this.save();
  }
}

/**
 * Класс товар
 */
class Product extends Model {
  /**
   * Настройки таблицы
   * @returns {{columns: string[], name: string}}
   */
  static table() {
    return {
      name: "Products",
      columns: ['hash', 'parent', 'name', 'description', 'price', 'unit', 'position', 'type', 'hide', 'uid'],
    }
  }

  /**
   * Набор данных для формы
   * @returns {*[]}
   */
  static getFields() {
    return [
      {
        type: "text",
        db_name: "name",
        validate: "string",
        required: true
      },
      {
        type: "text",
        db_name: "description",
        validate: "string",
        required: true
      },
      {
        type: "photo",
        db_name: "image",
        validate: false,
        required: false
      },
      {
        type: "text",
        db_name: "price",
        validate: "number",
        required: true
      },
      {
        type: "text",
        db_name: "unit",
        validate: "string",
        required: true
      },
    ]
  }

  /**
   * Создаем объект
   * @param parent
   * @param uid
   * @returns {*}
   */
  static create(parent, uid) {
    let model = new this();
    model.parent = parent;
    model.type = 0;
    model.position = model.getNextPosition();
    model.hide = 0;
    model.uid = uid;
    model.name = "";
    model.description = "";
    model.price = "";
    model.unit = "";
    return model.save();
  }

  /**
   * Получаем родителя
   * @returns {*}
   * @private
   */
  _parent() {
    return this.hasOne("Category", "hash", "parent");
  }

  /**
   * Получаем видимость
   * @returns {*}
   */
  getHide() {
    return this.hide;
  }

  /**
   * Устанавливаем видимость
   * @param hide
   */
  setHide(hide) {
    this.hide = hide;
    this.save();
  }

  /**
   * Получаем название
   * @returns {*}
   */
  getName() {
    return this.name;
  }

  /**
   * Устанавливаем название
   * @param name
   * @returns {*}
   */
  setName(name) {
    this.name = name;
    return this.save();
  }

  /**
   * Получаем описание
   * @returns {*}
   */
  getDescription() {
    return this.description;
  }

  /**
   * Устанавливаем описание
   * @param description
   * @returns {*}
   */
  setDescription(description) {
    this.description = description;
    return this.save();
  }

  /**
   * Получаем стоимость
   * @returns {*}
   */
  getPrice() {
    return this.price;
  }

  /**
   * Устанавливаем стоимость
   * @param price
   * @returns {*}
   */
  setPrice(price) {
    this.price = price;
    return this.save();
  }

  /**
   * Получаем еденицу измерения
   * @returns {*}
   */
  getUnit() {
    return this.unit;
  }

  /**
   * Устанавливаем единицу измерения
   * @param unit
   * @returns {*}
   */
  setUnit(unit) {
    this.unit = unit;
    return this.save();
  }

  /**
   * Получаем тип
   * @returns {*}
   */
  getType() {
    return this.type;
  }

  /**
   * Устанавливаем тип
   * @param type
   * @returns {*}
   */
  setType(type) {
    this.type = type;
    return this.save();
  }

  /**
   * Получаем картинку
   * @returns {*}
   */
  getImage() {
    return this.hasOne("Media", "parent", "hash");
  }

  /**
   * Устанавливаем картинку
   * @param image
   * @returns {*}
   */
  setImage(image) {
    // ищем картинку в таблице
    let image_ = this.getImage();
    // если картинка есть
    if (!isNull(image_)) {
      // меняем значение
      image_.file_id = image;
      // сохраняем изменения
      return image_.save();
    } else {
      // если картинки нет добавляем
      return Media.create(this.hash, "photo", "product", image);
    }
  }
}

/**
 * Класс Роутер
 */
class Route {
  /**
   * Создаем экземпляр
   * @param wh
   */
  constructor(wh) {
    this.config = config_route;
    this.wh = wh;
  }

  /**
   * Получаем объект команды
   * @param text
   * @returns {*}
   */
  checkCommand(text) {
    // текстовые ссылки
    if (this.config.linkCommands.length > 0) {
      // перебираем команды
      for (let linkCommand of this.config.linkCommands) {
        // если есть совпадения
        if (linkCommand.template.test(text)) {
          // добавим флаг
          linkCommand.result = true;
          // вернем объект с методом
          return linkCommand;
        }
      }
    }
    // кнопки клавиатуры - текстовые команды
    if (this.config.buttonCommands.length > 0) {
      for (let buttonCommand of this.config.buttonCommands) {
        let template_ = new RegExp("^" + this.wh.lang.getParam(buttonCommand.name) + "$");
        if (template_.test(text)) {
          buttonCommand.result = true;
          return buttonCommand;
        }
      }
    }
    // если дошли до этой строчки то вернем флаг false
    return {
      result: false
    };
  }

  /**
   * Проверяем необходимость передать данные в запланированный метод
   * @returns {*}
   */
  write() {
    // получим запись действия пользователя
    let action = this.wh.user.getAction();
    // проверим
    if (action.length !== 0) {
      // вернем объект
      return {
        result: true,
        method: action
      };
    }
    // вернем по умолчанию
    return {
      result: false
    };
  }

  /**
   * Маршрутизируем
   */
  run() {
    // если это сообщение
    if (this.wh.bot.isMessage()) {
      // получаем данные для перехода пользователя в запланированный метод получения данных
      let write = this.write();
      // если это текстовое сообщение
      if (this.wh.bot.isText()) {
        // проверяем на команды
        let command = this.checkCommand(this.wh.bot.getMessageText());
        // если есть совпадение по шаблону
        if (write.result && !command.result) {
          // направим по заданному адресу
          this.goToAction(write.method);
        } else if (command.result) {
          // обнулим action
          this.wh.user.setAction("");
          // направим по заданному адресу
          this.goToAction(command.method);
        }
      } else {
        // если это какие-нибудь медиа
        if (write.result) {
          // направим по заданному адресу
          this.goToAction(write.method);
        }
      }
    } else if (this.wh.bot.isCallBack()) {
      // обнулим action
      this.wh.user.setAction("");
      // получим путь
      let method = this.wh.bot.getCallbackQueryData();
      // направим по заданному адресу
      this.goToAction(method);
    }
  }

  /**
   * Направим по адресу
   * @param method
   * @returns {boolean}
   */
  goToAction(method) {
    // парсим параметры
    let [class_, params] = method.split('::');
    // собираем название класса
    let class_name = 'Controller' + ucfirst(class_, false);
    // проверим наличие класса
    if (Object.keys(mapControllers).includes(class_name)) {
      // создадим объект класса
      let object = new mapControllers[class_name](this.wh);
      // парсим на метод
      let method_ = params.split("_").shift();
      // проверим наличие метода у класса
      if (typeof object[method_] === "function") {
        // вызываем метод контроллера
        object[method_]()
      }
    }
    // выходим
    return true;
  }
}

/**
 * Класс Пользователь
 */
class User extends Model {
  /**
   * Настройки таблицы
   * @returns {{columns: string[], name: string}}
   */
  static table() {
    return {
      name: "Users",
      columns: ['hash', 'uid', 'name', 'username', 'lang', 'action', 'created_at', 'updated_at'],
    }
  }

  /**
   * Получаем или обновляем объект пользователя
   * @param data
   * @returns {*}
   */
  static getUser(data) {
    // ищем пользователя в базе
    let user = this.find().findOneBy('uid', data.uid);
    // фиксируем дату-время
    const date = getDateToSeconds();
    // если пользователь не найден
    if (isNull(user)) {
      // создаем его
      user = new this();
      // заполняем неизменяемые поля
      user.uid = data.uid
      user.action = "";
      user.created_at = date;
    }
    // создаем или обновляем изменяемые поля
    user.name = (data.firstname + " " + data.lastname).trim();
    user.username = data.username;
    user.lang = data.lang;
    user.updated_at = date;
    // вернем или null или объект пользователя
    return user.save();
  }

  /**
   * Получаем действие
   * @returns {*}
   */
  getAction() {
    return this.action;
  }

  /**
   * Устанавливаем действие
   * @param action
   */
  setAction(action) {
    this.action = action;
    this.save();
  }
}

/**
 * Класс родитель для контроллеров
 */
class Controller {
  /**
   * Констуктор класса
   * @param wh
   */
  constructor(wh) {
    // записываем объект в свойство
    this.wh = wh;
  }
}


/**
 * Контроллер администратора
 */
class ControllerAdmin extends Controller {
  /**
   * Проверка на админа
   * @param wh
   * @returns {boolean}
   */
  static before(wh) {
    // закрываем доступ не для админов
    if (!wh.isAdmin()) {
      // гасим
      if (wh.bot.isCallBack()) {
        wh.bot.notice();
      }
      // выводим ошибку доступа
      wh.bot.sendMessage(wh.bot.getFromId(), wh.lang.getParam("error._403"));
      throw new Error("stop");
    }
  }

  /**
   * Запускаем
   */
  run() {
    // гасим удаляем
    if (this.wh.bot.isCallBack()) {
      this.wh.bot.noticeDelete();
    }
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // готовим кнопки
    let buttons = [
      [this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("admin.controller.btn.catalog"), "adminCatalog::run_0")],
      [this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("admin.controller.btn.pay_delivery"), "adminPayDelivery::run_0")],
      [this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("admin.controller.btn.orders"), "adminOrders::run_0")],
      [this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("go.back"), "start::run_0")],
    ];
    // выводим сообщение админу
    this.wh.bot.sendMessage(this.wh.bot.getFromId(), this.wh.lang.getParam("admin.hello"), buttons);
  }
}

/**
 * Контроллер Администратора - Каталог
 */
class ControllerAdminCatalog extends Controller  {
  /**
   * Отображаем данные
   * @param params_
   */
  run(params_ = null) {
    // гасим удаляем
    if (this.wh.bot.isCallBack()) {
      this.wh.bot.noticeDelete();
    }
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // удаляем лишнее
    this.deleteCatalogItems();
    // 1 - parent
    let params = paramsFromText(
      !isNull(params_)
        ? params_
        : this.wh.bot.getCallbackQueryData()
    );
    // получаем набор данных
    let data = this.getData(params[1]);
    // выводим сообщение админу
    this.wh.bot.sendMessage(this.wh.bot.getFromId(), data.text, data.buttons);
  }

  /**
   * Получаем данные для отображения
   * @param parent
   * @returns {{buttons: Array, text: *}}
   */
  getData(parent) {
    let go_back, parent_name;
    // определяем куда возвращаться
    if (parent !== "0" && parent) {
      let category = Category.find().findOneBy("hash", parent);
      go_back = "adminCatalog::run_" + category.parent;
      parent_name = Category.breadCrumbs(category.hash);
    } else {
      go_back = "admin::run_0";
      parent_name = this.wh.lang.getParam("admin.catalog.rootname");
    }
    // определим параметры поиска
    let search_params = [
      ["parent", "string", "===", parent],
      ["type", "number", "===", 1]
    ];
    // определим параметры по сортировке
    let search_sort = ["position", true];
    // определяем по умолчанию что это категории
    let items_type = 0;
    // получаем все категории
    let items = Category.find().findAllByParams(search_params, search_sort);
    // объявляем массив кнопок
    let buttons = [];
    // если категорий не найдено то ищем товары
    if (!items.length) {
      // переопределяем что это товары
      items_type = 1;
      // получаем все товары
      items = Product.find().findAllByParams(search_params, search_sort);
    }
    // если есть все таки что-то
    if (items.length) {
      // перебираем
      items.forEach(function (item, key) {
        // добавляем массив
        buttons[key] = [];
        // иконка для видимости
        let hideIcon = this.wh.lang.getParam("admin.icon.hide_" + item.hide);
        // если это товары тогда перегруппируем кнопки
        if (items_type) {
          // кнопка название это будет кнопка редактирования
          buttons[key].push(
            this.wh.bot.buildInlineKeyboardButton(
              this.wh.lang.getParam("admin.icon.edit") + " " + item.name,
              "adminCatalog::form_" + item.hash + "_0_1_1"
            )
          );
        } else {
          // если это категория то это переход во внутрь
          buttons[key].push(
            this.wh.bot.buildInlineKeyboardButton(
              item.name,
              "adminCatalog::run_" + item.hash
            )
          );
        }
        // кнопка скрыть для всех
        buttons[key].push(
          this.wh.bot.buildInlineKeyboardButton(
            hideIcon,
            "adminCatalog::hide_" + items_type + "_" + item.hash
          )
        );
        if (!items_type) {
          // кнопка редактировать для категории
          buttons[key].push(
            this.wh.bot.buildInlineKeyboardButton(
              this.wh.lang.getParam("admin.icon.edit"),
              "adminCatalog::form_" + item.hash + "_0_1_0"
            )
          );
        }
        // кнопка удалить для всех
        buttons[key].push(
          this.wh.bot.buildInlineKeyboardButton(
            this.wh.lang.getParam("admin.icon.remove"),
            "adminCatalog::deleteAsk_" + items_type + "_" + item.hash
          )
        );
      }.bind(this));
    } else {
      // переопределяем что это категории - если нет товаров
      items_type = 0;
    }
    // больше 30 позиций добавить не даем
    if (items.length < 30) {
      // добавим ряд кнопок
      buttons[buttons.length] = [];
      // категории можно добавить если уже не товаров
      if (!items_type) {
        // кнопка добавить категорию
        buttons[buttons.length - 1].push(
          this.wh.bot.buildInlineKeyboardButton(
            this.wh.lang.getParam("admin.category.btn.create"),
            "adminCatalog::form_" + parent + "_0_0_0"
          )
        );
      }
      // товар можно добавить только в категорию и только если в ней нет уже категорий, и если это не корень
      if (parent && !items.length || items_type) {
        // кнопка добавить товар
        buttons[buttons.length - 1].push(
          this.wh.bot.buildInlineKeyboardButton(
            this.wh.lang.getParam("admin.product.btn.create"),
            "adminCatalog::form_" + parent + "_0_0_1"
          )
        );
      }
    }
    // добавим еще один ряд кнопок
    buttons[buttons.length] = [];
    // кнопка вернуться
    buttons[buttons.length - 1].push(
      this.wh.bot.buildInlineKeyboardButton(
        this.wh.lang.getParam("go.back"),
        go_back
      )
    );
    // вернем массив кнопок
    return {
      buttons: buttons,
      text: items.length
        ? this.wh.lang.getParam("admin.category.no_empty", {name: parent_name})
        : this.wh.lang.getParam("admin.category.empty", {name: parent_name})
    }
  }

  /**
   * Изменение видимости
   */
  hide() {
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - type, 2 - hash
    let params = paramsFromText(this.wh.bot.getCallbackQueryData());
    // получаем объект
    let item = +params[1]
      ? Product.find().findOneBy("hash", params[2])
      : Category.find().findOneBy("hash", params[2]);
    // проверяем
    if (!isNull(item)) {
      // меняем видимость
      item.setHide(+!item.getHide());
      // гасим
      this.wh.bot.notice(this.wh.lang.getParam("admin.set.hide"));
      // получаем данные
      let data = this.getData(item.parent);
      // меняем кнопки
      let result = this.wh.bot.editMessageReplyMarkup(
        this.wh.bot.getFromId(),
        this.wh.bot.getMessageId(),
        data.buttons
      );
    } else {
      this.wh.bot.notice(this.wh.lang.getParam("error._404"));
    }
  }

  /**
   * Запрос на удаление
   */
  deleteAsk() {
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - type, 2 - hash
    let params = paramsFromText(this.wh.bot.getCallbackQueryData());
    // получаем класс объекта
    let modelClass = +params[1] ? "Product" : "Category";
    // получаем объект
    let item = mapClasses[modelClass].find().findOneBy("hash", params[2]);
    // проверяем
    if (item) {
      // если это категория
      if (!+params[1]) {
        // проверяем вложенные объекты
        if (item.hasChildren()) {
          // удалить нельзя
          this.wh.bot.notice(this.wh.lang.getParam("admin.category.has_children"), true);
          return;
        }
      }
      // выводим запрос на удаление
      this.wh.bot.noticeDelete();
      // объявим набор кнопок
      let buttons = [];
      // готовим кнопки
      buttons.push([
        this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("go.yes"), "adminCatalog::delete_" + params[1] + "_" + item.hash),
        this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("go.no"), "adminCatalog::run_" + item.parent)
      ]);
      // выводи запрос
      this.wh.bot.sendMessage(
        this.wh.bot.getFromId(),
        this.wh.lang.getParam("admin." + modelClass.toLowerCase() + ".delete", {name: item.name}),
        buttons
      );
    } else {
      this.wh.bot.notice(this.wh.lang.getParam("error._404"));
    }
  }

  /**
   * Выводим форму
   * @param params_
   */
  form(params_ = null) {
    // гасим удаляем
    if (this.wh.bot.isCallBack()) {
      this.wh.bot.noticeDelete();
    }
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - parent | hash, 2 - step, 3 - type, 4 - cat|prod
    let params = paramsFromText(!isNull(params_) ? params_ : this.wh.bot.getCallbackQueryData());
    // объявим набор кнопок
    let buttons = [];
    // определим тип объекта
    let modelType = !+params[4] ? "Category" : "Product";
    // получим настройки для формы
    let formFields = mapClasses[modelType].getFields();
    // какое поле заполняем
    let field = formFields[+params[2]];
    // проверим наличие
    if (isSet(field)) {
      // получаем модель
      let item = !+params[3]
        ? mapClasses[modelType].create(params[1], this.wh.bot.getFromId())
        : mapClasses[modelType].find().findOneBy("hash", params[1]);
      // ставим пользователю метку
      this.wh.user.setAction("adminCatalog::update_" + item.hash + "_" + params[2] + "_1_" + params[4]);
      // возможность пропустить
      let skip = !field.required;
      // получаем старое значение
      let methodGet = "get" + ucfirst(field.db_name);
      // здесь придет или null или текст  или массив для photo
      let value = item[methodGet]();
      // старое значение по умолчанию пустое
      let oldValue = "";
      // объявляем
      let params_db = {};
      // заполняем запрос параметром
      params_db.db_name = this.wh.lang.getParam("admin.catalog." + field.db_name);
      // высчитываем следующий шаг
      let next_step = +params[2] + 1;
      // проверяем
      if (!isEmpty(value) && isSet(value) && !isNull(value)) {
        // возможность пропустить
        skip = true;
        // проверяем по типу
        if (field.type === "photo") {
          // добавим file_id
          params_db.file_id = value.file_id;
          // добавим кнопку
          buttons.push([
            this.wh.bot.buildInlineKeyboardButton(
              this.wh.lang.getParam("admin.icon.remove"),
              "adminCatalog::deleteMedia_" + value.hash + "_" + params[2] + "_" + params[4]
            )
          ])
        } else if (field.type === "text") {
          params_db.value = value;
          // заполняем старое значение
          oldValue = this.wh.lang.getParam("admin.catalog.form." + field.type + "_old", params_db);
        }
      }
      // заполняем старое значение
      params_db.old_value = oldValue;
      // выводим кнопку пропустить
      if (skip) {
        // кнопка пропустить
        buttons.push([
          this.wh.bot.buildInlineKeyboardButton(
            this.wh.lang.getParam("go.skip"),
            "adminCatalog::form_" + item.hash + "_" + next_step + "_1_" + params[4]
          )
        ]);
      }
      // готовим текст
      let text = this.wh.lang.getParam("admin.catalog.form." + field.type, params_db);
      // кнопка отменить
      buttons.push([
        this.wh.bot.buildInlineKeyboardButton(
          this.wh.lang.getParam("go.cancel"),
          "adminCatalog::run_" + item.parent
        )
      ]);
      // выводим сообщение
      if ('file_id' in params_db) {
        this.wh.bot.sendPhoto(this.wh.bot.getFromId(), params_db.file_id, text, buttons);
      } else {
        this.wh.bot.sendMessage(this.wh.bot.getFromId(), text, buttons);
      }
    } else {
      // если шагов больше нет то отправляем на предпросмотр
      this.preview("param_" + params[4] + "_" + params[1]);
    }
  }

  /**
   * Добавим или обновим данные
   */
  update() {
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - hash, 2 - step, 3 - type, 4 - cat|prod
    let params = paramsFromText(this.wh.user.getAction());
    // получим модель объекта
    let modelType = !+params[4] ? "Category" : "Product";
    // получим настройки для формы
    let formFields = mapClasses[modelType].getFields();
    // какое поле заполняем
    let field = formFields[+params[2]];
    // метод записи
    let methodSet = "set" + ucfirst(field.db_name);
    // метод проверки
    let methodIs = "is" + ucfirst(field.type);
    // объявим набор кнопок
    let buttons = [];
    // объявим переменную
    let result;
    // готовим кнопку на отмену для вывода с предупреждениями
    buttons.push([this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("go.back"), "adminCatalog::run_0")]);
    // проверяем что пришло
    if (this.wh.bot[methodIs]()) {
      // получаем
      let item = mapClasses[modelType].find().findOneBy("hash", params[1]);
      // проверяем
      if (item) {
        // если это загрузка картинки
        if (field.type === "photo") {
          // загружаем картинку
          result = !!item[methodSet](this.wh.bot.getMessageFileId());
        } // если это текст
        else if (field.type === "text") {
          // получим значение
          let variable_text = this.wh.bot.getMessageText();
          // если ждем число - приводим к нему
          if (field.validate && field.validate === "number") {
            variable_text = isNaN(+variable_text) ? 1 : +variable_text;
          }
          // записываем в объект
          result = !!item[methodSet](variable_text);
        } else {
          // если не подходит запрос
          result = false;
        }
        // проверяем загрузку данных
        if (result) {
          // ставим пользователю пустой action
          this.wh.user.setAction("");
          // высчитываем следующий шаг
          let next_step = +params[2] + 1;
          // проверяем есть ли еще шаги
          if (isSet(formFields[next_step])) {
            // направляем на форму
            this.form("param_" + item.hash + "_" + next_step + "_1_" + params[4]);
          } else {
            // если шагов больше нет то отправляем на предпросмотр
            this.preview("param_" + params[4] + "_" + item.hash);
          }
        } else {
          // если произошла ошибка загрузки данных выводим ошибку
          this.wh.bot.sendMessage(this.wh.bot.getFromId(), this.wh.lang.getParam("admin.catalog.error.load"), buttons);
        }
      } else {
        // если категория не найдена выводим предупреждение
        this.wh.bot.sendMessage(this.wh.bot.getFromId(), this.wh.lang.getParam("admin.catalog.error.category"), buttons);
      }
    } else {
      // если это не тот метод которого ждем выводим предупреждение
      this.wh.bot.sendMessage(this.wh.bot.getFromId(), this.wh.lang.getParam("admin.catalog.error.method"), buttons);
    }
  }

  /**
   * Удаляем медиа
   */
  deleteMedia() {
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - media_hash, 2 - step, 3 - cat|prod
    let params = paramsFromText(this.wh.bot.getCallbackQueryData());
    // получаем медиа
    let media = Media.find().findOneBy("hash", params[1]);
    // проверяем
    if (media) {
      // удаляем медиа
      media.delete();
      // гасим удаляем
      this.wh.bot.noticeDelete();
      // переадресуем
      this.form("param_" + media.parent + "_" + params[2] + "_1_" + params[3]);
    } else {
      // выводим предупреждение
      this.wh.bot.notice(this.wh.lang.getParam("error._404"));
    }
  }

  /**
   * Выводим на предпросмотр
   * @param params_
   */
  preview(params_ = null) {
    // гасим удаляем
    if (this.wh.bot.isCallBack()) {
      this.wh.bot.noticeDelete();
    }
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - type, 2 - hash
    let params = paramsFromText(!isNull(params_) ? params_ : this.wh.bot.getCallbackQueryData());
    // получаем категорию
    let item = +params[1]
      ? Product.find().findOneBy("hash", params[2])
      : Category.find().findOneBy("hash", params[2]);
    //проверяем
    if (item) {
      // объявим набор кнопок
      let buttons = [];
      // получим данные
      let data = +params[1]
        ? {
          name: item.getName(),
          body: item.getDescription(),
          price: item.getPrice(),
          unit: item.getUnit()
        }
        : {
          name: item.getName(),
          body: item.getDescription(),
        };
      // готовим текст
      let text = this.wh.lang.getParam("admin.catalog.preview_" + params[1], data);
      // проверяем
      if (item.getType()) {
        buttons.push([
          this.wh.bot.buildInlineKeyboardButton(
            this.wh.lang.getParam("go.finish"),
            "adminCatalog::run_" + item.parent
          )
        ]);
      } else {
        buttons.push([
          this.wh.bot.buildInlineKeyboardButton(
            this.wh.lang.getParam("go.finish"),
            "adminCatalog::finish_" + params[1] + "_" + item.hash
          ),
          this.wh.bot.buildInlineKeyboardButton(
            this.wh.lang.getParam("go.cancel"),
            "adminCatalog::run_" + item.parent
          ),
        ]);
      }
      // получаем картинку
      let image = item.getImage();
      // проверяем
      if (image) {
        // выводим превью
        this.wh.bot.sendPhoto(this.wh.bot.getFromId(), image.file_id, text, buttons);
      } else {
        // выводим превью
        this.wh.bot.sendMessage(this.wh.bot.getFromId(), text, buttons);
      }
    } else {
      // если категория не найдена выводим предупреждение
      this.wh.bot.sendMessage(
        this.wh.bot.getFromId(),
        this.wh.lang.getParam("error._404"),
        [[this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("go.back"), "adminCatalog::run_0")]]
      );
    }
  }

  /**
   * Переводим в добавленное
   */
  finish() {
    // гасим удаляем
    if (this.wh.bot.isCallBack()) {
      this.wh.bot.noticeDelete();
    }
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - type, 2 - hash
    let params = paramsFromText(this.wh.bot.getCallbackQueryData());
    // получаем
    let item = +params[1]
      ? Product.find().findOneBy("hash", params[2])
      : Category.find().findOneBy("hash", params[2]);
    //проверяем
    if (item) {
      // переводим в статус закончено
      item.setType(1);
      // переадресуем в каталог
      new ControllerAdminCatalog(this.wh).run("param_" + item.parent);
    } else {
      // если категория не найдена выводим предупреждение
      this.wh.bot.sendMessage(
        this.wh.bot.getFromId(),
        this.wh.lang.getParam("error._404"),
        [[this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("go.back"), "adminCatalog::run_0")]]
      );
    }
  }

  /**
   * Удаляем объект
   */
  delete() {
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - type, 2 - hash
    let params = paramsFromText(this.wh.bot.getCallbackQueryData());
    // получим класс объекта
    let modelClass = +params[1] ? "Product" : "Category";
    // получаем
    let item = mapClasses[modelClass].find().findOneBy("hash", params[2]);
    // проверяем
    if (item) {
      // гасим удаляем
      this.wh.bot.noticeDelete();
      // получаем картинку
      let image = item.getImage();
      // удаляем картинку
      if (image) {
        image.delete();
      }
      // удаляем
      item.delete();
      // переадресуем на каталог
      new ControllerAdminCatalog(this.wh).run("param_" + item.parent);
    } else {
      this.wh.bot.notice(this.wh.lang.getParam("error._404"));
    }
  }

  /**
   * Удаляем не остребованные
   */
  deleteCatalogItems() {
    // определим параметры поиска
    let search_params = [
      ["uid", "number", "===", this.wh.bot.getFromId()],
      ["type", "number", "===", 0]
    ];
    // удаляем все недозаполненные категории
    let categories = Category.find().findAllByParams(search_params);
    // проверяем
    if (categories.length) {
      // перебираем
      categories.forEach(function (category) {
        // получаем картинку
        let image = category.getImage();
        // удаляем картинку
        if (image) {
          image.delete();
        }
        // удаляем категорию
        category.delete();
      });
    }
    // удаляем все недозаполненные товары
    let products = Product.find().findAllByParams(search_params);
    // проверяем
    if (products.length) {
      // перебираем
      products.forEach(function (product) {
        // получаем картинки
        let image = product.getImage();
        // удаляем картинку
        if (image) {
          image.delete();
        }
        // удаляем категорию
        product.delete();
      });
    }
  }
}

/**
 * Контроллер администратора - Заказы
 */
class ControllerAdminOrders extends Controller  {
  /**
   * Выводим заказы
   * @param params_
   */
  run(params_ = null) {
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - type orders, 2 - page
    let params = paramsFromText(!isNull(params_)
      ? params_
      : (this.wh.bot.isCallBack()
        ? this.wh.bot.getCallbackQueryData()
        : "param_0_0_0")
    );
    // подстрахуем
    params[1] = isSet(params[1]) ? +params[1] : 0;
    params[2] = isSet(params[2]) ? +params[2] : 0;
    params[3] = isSet(params[3]) ? +params[3] : 0;
    // проверяем
    if (isSet(Order.statuses()["_" + params[1]])) {
      // получаем заказы по статусам
      let orders = Order.find().findAllByParams([
        ["type", "number", "===", 1],
        ["status", "string", "===", Order.statuses()["_" + params[1]]]
      ], [
        "created_at", true
      ]);
      // получим общее количество заказов
      let orders_count = orders.length;
      // отфильтруем заказы
      orders = orders.filter(function (order, idx) {
        return idx >= +params[2] && idx < +params[2] + 1;
      })
      // проверим
      if (orders.length) {
        // получим значение заказа
        let order = orders[0];
        // получаем текст
        let text = this.getTextOrder(order, +params[1], +params[2], orders_count);
        // получаем кнопки
        let buttons = this.getButtonsOrder(+params[1], orders_count, +params[2], order);
        // выводим сообщение
        if (!+params[3]) {
          // гасим удалим
          if (this.wh.bot.isCallBack()) {
            this.wh.bot.noticeDelete();
          }
          // отправляем
          this.wh.bot.sendMessage(this.wh.bot.getFromId(), text, buttons);
        } else {
          // гасим
          if (this.wh.bot.isCallBack()) {
            this.wh.bot.notice();
          }
          // редактируем сообщение
          this.wh.bot.editMessageText(this.wh.bot.getFromId(), this.wh.bot.getMessageId(), text, buttons);
        }
      } else {
        if (this.wh.bot.isCallBack()) {
          this.wh.bot.noticeDelete();
        }
        // выводим уведомление
        this.wh.bot.sendMessage(
          this.wh.bot.getFromId(),
          this.wh.lang.getParam("order.empty", {
            type: this.wh.lang.getParam("order.type_" + params[1])
          }),
          [[
            this.wh.bot.buildInlineKeyboardButton(
              this.wh.lang.getParam("order.type_" + +!+params[1]),
              "adminOrders::run_" + +!+params[1] + "_0")
          ]]
        );
      }
    } else {
      // получаем значение ошибки
      let error = this.wh.lang.getParam("error._404");
      // выводим предупреждение
      if (this.wh.bot.isCallBack()) {
        this.wh.bot.notice(error);
      } else {
        this.wh.bot.sendMessage(this.wh.bot.getFromId(), error);
      }
    }
  }

  /**
   * Текст для экрана
   * @param order
   * @param type_orders
   * @param page
   * @param total
   * @returns {*}
   */
  getTextOrder(order, type_orders, page, total) {
    // получаем все модели из корзины
    let items = OrderItem.find().findAllByParams([
      ["parent", "string", "===", order.hash]
    ]);
    // готовим для товаров
    let items_text = "";
    // общая сумма
    let totalSum = 0;
    // проверяем
    if (items.length) {
      // перебираем модели
      items.forEach(function (item) {
        // высчитываем сумму
        let itemSum = (+item.product_price * +item.product_count);
        // пишем строку
        items_text += this.wh.lang.getParam("order.preview.item", {
          name: item.product_name,
          price: item.product_price,
          unit: item.product_unit,
          count: item.product_count,
          sum: itemSum
        });
        // пополняем
        totalSum += itemSum;
      }.bind(this));
    }
    // получим пользователя
    let user = order._user();
    // вернем результат
    return this.wh.lang.getParam("order.body_admin", {
      type: this.wh.lang.getParam("order.type_" + type_orders),
      user: user ? order._user().name : "Unknown user",
      hash: order.hash.toUpperCase(),
      date: getDateToFormat(order.created_at),
      phone: order.getPhone(),
      delivery: this.wh.lang.getParam("order.preview.delivery_" + order.getDelivery(), {
        address: +order.getDelivery() ? order.getAddress() : this.wh.lang.getParam("order.pickupPoint")
      }),
      pay: this.wh.lang.getParam("order.pay._" + order.getPay()),
      status: this.wh.lang.getParam("order.status." + order.getStatus()),
      items_body: this.wh.lang.getParam("order.preview.items", {
        items: items_text,
        total: totalSum
      }),
      page: +page + 1,
      total: total
    });
  }

  /**
   * Кнопки для экрана
   * @param type_orders
   * @param total
   * @param page
   * @param order
   * @returns {Array}
   */
  getButtonsOrder(type_orders, total, page, order) {
    let buttons = [];
    // проверяем пагинацию
    if (total > 1) {
      // парамерт для кнопки назад
      let prev = ((page - 1) < 0) ? (total - 1) : (page - 1);
      // параметр для кнопки вперед
      let next = ((page + 1) >= total) ? 0 : (page + 1);
      // готовим кнопки туда - сюда
      buttons.push([
        this.wh.bot.buildInlineKeyboardButton(
          this.wh.lang.getParam("order.prev"),
          "adminOrders::run_" + type_orders + "_" + prev + "_1"
        ),
        this.wh.bot.buildInlineKeyboardButton(
          this.wh.lang.getParam("order.next"),
          "adminOrders::run_" + type_orders + "_" + next + "_1"
        ),
      ]);
    }
    // получим возможности переводов
    let setSatatuses = Order.setStatuses()[order.status];
    // перевод статусов
    if (isSet(setSatatuses) && setSatatuses.length) {
      // перебираем
      setSatatuses.forEach(function (status) {
        buttons.push([this.wh.bot.buildInlineKeyboardButton(
          this.wh.lang.getParam("admin.order.setStatus", {
            status: ucfirst(this.wh.lang.getParam("order.status." + status))
          }),
          "adminOrders::setStatus_" + order.hash + "_" + status
        )]);
      }.bind(this));
    }
    // переключатель между типами
    buttons.push([this.wh.bot.buildInlineKeyboardButton(
      this.wh.lang.getParam("order.type_" + +!+type_orders),
      "adminOrders::run_" + +!+type_orders + "_0"
    )]);
    // кнопка вернуться
    buttons.push([this.wh.bot.buildInlineKeyboardButton(
      this.wh.lang.getParam("go.back"),
      "admin::run_0"
    )]);
    // вернем кнопки
    return buttons;
  }

  /**
   * Меняем статус
   */
  setStatus() {
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - hash, 2 - status
    let params = paramsFromText(this.wh.bot.getCallbackQueryData());
    // найдем заказ
    let order = Order.find().findOneBy("hash", params[1]);
    // проверим
    if (order) {
      // меняем заказу статус
      order.setStatus(params[2]);
      // статусы
      let statusCollections = Order.statuses()
      // получим тип заказов
      let key = Object.keys(statusCollections).filter(function (collection) {
        return statusCollections[collection].includes(params[2]);
      })[0];
      // параметры запроса
      let search_params = [
        ["type", "number", "===", 1],
        ["status", "string", "===", statusCollections[key]]
      ];
      let allOrders = Order.find().findAllByParams(search_params, ["created_at", true]);
      let index = 0;
      if (allOrders.length) {
        for (let i = 0; i <= allOrders.length; i += 1) {
          if (allOrders[i].hash === order.hash) {
            index = i;
            break;
          }
        }
      }
      let type = key.split("_")[1];
      // гасим
      this.wh.bot.noticeDelete();
      // переадресуем
      this.run("params_" + type + "_" + index + "_0")
    } else {
      // выведем ошибку
      this.wh.bot.notice(this.wh.lang.getParam("error.again"));
    }
  }
}

/**
 * Контроллер администратора - Оплата и доставка
 */
class ControllerAdminPayDelivery extends Controller {
  /**
   * Запускаем
   */
  run() {
    // гасим удаляем
    if (this.wh.bot.isCallBack()) {
      this.wh.bot.noticeDelete();
    }
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // получаем страницу
    let page = Page.getPage("payDelivery");
    // получаем текст
    let text = isNull(page.getDescription())
      ? this.wh.lang.getParam("payDelivery.empty")
      : page.getDescription();
    // проверим картинку
    let image = page.getImage();
    // готовим кнопки
    let buttons = [
      [this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("admin.payDelivery.btn_edit"), "adminPayDelivery::form_0")],
      [this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("go.back"), "admin::run_0")],
    ];
    // проверим как отправляем
    if (image) {
      this.wh.bot.sendPhoto(this.wh.bot.getFromId(), image, text, buttons);
    } else {
      this.wh.bot.sendMessage(this.wh.bot.getFromId(), text, buttons);
    }
  }

  /**
   * Форма редактирования
   * @param params_
   */
  form(params_ = null) {
    // гасим удаляем
    if (this.wh.bot.isCallBack()) {
      this.wh.bot.noticeDelete();
    }
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - step
    let params = paramsFromText(!isNull(params_) ? params_ : this.wh.bot.getCallbackQueryData());
    // объявим набор кнопок
    let buttons = [];
    // получим настройки для формы
    let formFields = Page.getFields();
    // какое поле заполняем
    let field = formFields[+params[1]];
    // проверим наличие
    if (isSet(field)) {
      // получаем модель
      let item = Page.getPage("payDelivery");
      // ставим пользователю метку
      this.wh.user.setAction("adminPayDelivery::update_" + params[1]);
      // возможность пропустить
      let skip = !field.required;
      // получаем старое значение
      let methodGet = "get" + ucfirst(field.db_name);
      // здесь придет или null или текст
      let value = item[methodGet]();
      // старое значение по умолчанию пустое
      let oldValue = "";
      // объявляем
      let params_db = {};
      // заполняем запрос параметром
      params_db.db_name = this.wh.lang.getParam("admin.payDelivery." + field.db_name);
      // высчитываем следующий шаг
      let next_step = +params[1] + 1;
      // проверяем
      if (!isNull(value)) {
        params_db.value = value;
        // возможность пропустить
        skip = true;
        // проверяем по типу
        if (field.type === "photo") {
          // добавим кнопку
          buttons.push([
            this.wh.bot.buildInlineKeyboardButton(
              this.wh.lang.getParam("admin.icon.remove"),
              "adminPayDelivery::deleteMedia_" + params[1]
            )
          ])
        } else if (field.type === "text") {
          // заполняем старое значение
          oldValue = this.wh.lang.getParam("admin.payDelivery.form." + field.type + "_old", params_db);
        }
      }
      // заполняем старое значение
      params_db.old_value = oldValue;
      // выводим кнопку пропустить
      if (skip) {
        // кнопка пропустить
        buttons.push([
          this.wh.bot.buildInlineKeyboardButton(
            this.wh.lang.getParam("go.skip"),
            "adminPayDelivery::form_" + next_step
          )
        ]);
      }
      // готовим текст
      let text = this.wh.lang.getParam("admin.payDelivery.form." + field.type, params_db);
      // кнопка отменить
      buttons.push([
        this.wh.bot.buildInlineKeyboardButton(
          this.wh.lang.getParam("go.cancel"),
          "adminPayDelivery::run_0"
        )
      ]);
      // выводим сообщение
      if (field.type === "photo" && !isNull(value)) {
        this.wh.bot.sendPhoto(this.wh.bot.getFromId(), value, text, buttons);
      } else {
        this.wh.bot.sendMessage(this.wh.bot.getFromId(), text, buttons);
      }
    } else {
      // если шагов больше нет то отправляем на начало
      this.run();
    }
  }

  /**
   * Метод обновления данных
   * @param params_
   */
  update(params_ = null) {
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - step
    let params = paramsFromText(this.wh.user.getAction());
    // получим настройки для формы
    let formFields = Page.getFields();
    // какое поле заполняем
    let field = formFields[+params[1]];
    // метод записи
    let methodSet = "set" + ucfirst(field.db_name);
    // метод проверки
    let methodIs = "is" + ucfirst(field.type);
    // объявим набор кнопок
    let buttons = [];
    // объявим переменную
    let result;
    // готовим кнопку на отмену для вывода с предупреждениями
    buttons.push([this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("go.back"), "adminPayDelivery::run_0")]);
    // проверяем что пришло
    if (this.wh.bot[methodIs]()) {
      // получаем
      let item = Page.getPage("payDelivery");
      // если это загрузка картинки
      if (field.type === "photo") {
        // загружаем картинку
        result = !!item[methodSet](this.wh.bot.getMessageFileId());
      } // если это текст
      else if (field.type === "text") {
        // получим значение
        let variable_text = this.wh.bot.getMessageText();
        // если ждем число - приводим к нему
        if (field.validate && field.validate === "number") {
          variable_text = isNaN(+variable_text) ? 1 : +variable_text;
        } else {
          // получаем форматирование
          let entities = this.wh.bot.getEntities();
          // проверяем
          if (!isNull(entities)) {
            // определяем метод
            let entitiesMethod = "set" + this.wh.prepareMethod(field.db_name + "_entities");
            // записываем
            item[entitiesMethod](JSON.stringify(entities));
          }
        }
        // записываем в объект
        result = !!item[methodSet](variable_text);
      } else {
        // если не подходит запрос
        result = false;
      }
      // проверяем загрузку данных
      if (result) {
        // ставим пользователю пустой action
        this.wh.user.setAction("");
        // высчитываем следующий шаг
        let next_step = +params[1] + 1;
        // проверяем есть ли еще шаги
        if (isSet(formFields[next_step])) {
          // направляем на форму
          this.form("param_" + next_step);
        } else {
          // если шагов больше нет то отправляем на начало
          this.run();
        }
      } else {
        // если произошла ошибка загрузки данных выводим ошибку
        this.wh.bot.sendMessage(this.wh.bot.getFromId(), this.wh.lang.getParam("admin.catalog.error.load"), buttons);
      }
    } else {
      // если это не тот метод которого ждем выводим предупреждение
      this.wh.bot.sendMessage(this.wh.bot.getFromId(), this.wh.lang.getParam("admin.catalog.error.method"), buttons);
    }
  }

  /**
   * Удаляем медиа
   */
  deleteMedia() {
    // ставим проверку на админа
    ControllerAdmin.before(this.wh);
    // 1 - step
    let params = paramsFromText(this.wh.bot.getCallbackQueryData());
    // получаем медиа
    let page = Page.getPage("payDelivery");
    // гасим удаляем
    this.wh.bot.noticeDelete();
    // удаляем картинку
    page.setImage("");
    // переадресуем
    this.form("param_" + params[1]);
  }
}

/**
 * Контроллер пользователя - Корзина
 */
class ControllerBasket extends Controller  {
  /**
   * Выводим товар из корзины
   * @param params_
   */
  run(params_ = null) {
    // 1 - page, 2 - type
    let params = paramsFromText(!isNull(params_)
      ? params_
      : (this.wh.bot.isCallBack()
          ? this.wh.bot.getCallbackQueryData()
          : "param_0"
      )
    );
    // тип вывода
    let type_view = isSet(params[2]) ? !!+params[2] : false;
    // гасим удаляем
    if (this.wh.bot.isCallBack()) {
      type_view ? this.wh.bot.notice() : this.wh.bot.noticeDelete();
    }
    // выводим инфо
    let search_params = [
      ["uid", "number", "===", this.wh.user.uid]
    ];
    let search_sort = ["created_at", true];
    // получаем общее количество
    let total = Basket.find().getCountByParams(search_params);
    // проверяем
    if (total) {
      // получаем модель корзины
      let model = Basket.find().findAllByParams(search_params, search_sort).filter(function (item, idx) {
        return idx >= +params[1] && idx < (+params[1] + 1)
      }.bind(this));
      // проверяем
      if (model.length) {
        model = model[0];
        // получаем товар
        let product = Product.find().findOneByParams([
          ["hash", "string", "===", model.product_hash],
          ["hide", "number", "===", 1]
        ]);
        // проверяем
        if (!Array.isArray(product)) {
          // готовим текст
          let text = this.getModelText(product);
          // получаем medias
          let image = product.getImage();
          // ссылка на картинку
          let mediaUrl = image ? image.file_id : config.no_image;
          // готовим кнопки
          let buttons = this.getModelButtons(total, model, product, +params[1]);
          // отправляем позицию
          !type_view
            ? this.wh.bot.sendPhoto(this.wh.bot.getFromId(), mediaUrl, text, buttons)
            : this.wh.bot.editMessageMedia(
            this.wh.bot.getFromId(),
            this.wh.bot.getMessageId(),
            this.wh.bot.inputMedia(mediaUrl, 'photo', text),
            buttons
            );
        } else {
          // удаляем из корзины
          model.delete();
          // переадресуем в начало
          this.run("param_0");
        }
      } else {
        // выводим предупреждение
        this.wh.bot.sendMessage(this.wh.bot.getFromId(), this.wh.lang.getParam("error.again"));
      }
    } else {
      // корзина пустая
      this.wh.bot.sendMessage(this.wh.bot.getFromId(), this.wh.lang.getParam("basket.empty"));
    }
  }

  /**
   * Получим текст товара
   * @param product
   * @returns {*}
   */
  getModelText(product) {
    return this.wh.lang.getParam("basket.model", {
      name: product.getName(),
      body: product.getDescription(),
      price: product.getPrice(),
      unit: product.getUnit()
    });
  }

  /**
   * Получим кнопки для экрана
   * @param total
   * @param model
   * @param product
   * @param pageModel
   * @returns {Array}
   */
  getModelButtons(total, model, product, pageModel) {
    let buttons = [];
    /**
     * 1 ряд расчет стоимости: товар * кол-во = сумма
     * 2 ряд удалить - прибавить - кол-во - убавить
     * 3 ряд пагинатор между моделями
     * 4 ряд оформить - итого сумма
     */
    // расчет стоимости
    buttons.push([this.wh.bot.buildInlineKeyboardButton(
      this.wh.lang.getParam("basket.calculation", {
        price: product.getPrice(),
        count: model.count,
        total: (product.getPrice() * model.count)
      }),
      "basket::description_0"
    )]);
    // управление позицией
    buttons.push([
      // удалить
      this.wh.bot.buildInlineKeyboardButton(
        this.wh.lang.getParam("basket.delete"),
        "basket::delete_" + model.hash
      ),
      // убавить
      this.wh.bot.buildInlineKeyboardButton(
        this.wh.lang.getParam("basket.down"),
        "basket::setCount_0_" + model.hash + "_" + pageModel
      ),
      // количество
      this.wh.bot.buildInlineKeyboardButton(
        model.count,
        "basket::description_1"
      ),
      // добавить
      this.wh.bot.buildInlineKeyboardButton(
        this.wh.lang.getParam("basket.up"),
        "basket::setCount_1_" + model.hash + "_" + pageModel
      ),
    ]);
    // пагинация в корзине
    if (total > 1) {
      // парамерт для кнопки назад
      let prevModel = ((pageModel - 1) < 0) ? (total - 1) : (pageModel - 1);
      // параметр для кнопки вперед
      let nextModel = ((pageModel + 1) >= total) ? 0 : (pageModel + 1);
      // готовим кнопки
      buttons.push([
        this.wh.bot.buildInlineKeyboardButton(
          this.wh.lang.getParam("basket.model_prev"),
          "basket::run_" + prevModel + "_1"
        ),
        this.wh.bot.buildInlineKeyboardButton(
          this.wh.lang.getParam("basket.model_about_page", {
            page: (pageModel + 1),
            total: total
          }),
          "basket::description_2"
        ),
        this.wh.bot.buildInlineKeyboardButton(
          this.wh.lang.getParam("basket.model_next"),
          "basket::run_" + nextModel + "_1"
        ),
      ]);
    }
    // итого
    buttons.push([this.wh.bot.buildInlineKeyboardButton(
      this.wh.lang.getParam("basket.order", {
        totalSum: Basket.getTotalSum(this.wh.bot.getFromId())
      }),
      "basket::order_0"
    )]);
    // вернем кнопки
    return buttons;
  }

  /**
   * Изменяем количество товара в корзине
   */
  setCount() {
    // 1 - type, 2 - model_hash, 3 - pageModel
    let params = paramsFromText(this.wh.bot.getCallbackQueryData());
    // параметры поиска
    let search_params = [
      ["uid", "number", "===", this.wh.user.uid]
    ];
    // получаем общее количество
    let total = Basket.find().getCountByParams(search_params);
    // проверяем
    if (total) {
      // получаем модель корзины
      let model = Basket.find().findOneBy("hash", params[2]);
      // проверяем
      if (model) {
        // получаем товар
        let product = Product.find().findOneByParams([
          ["hash", "string", "===", model.product_hash],
          ["hide", "number", "===", 1]
        ]);
        // проверяем
        if (!Array.isArray(product)) {
          // если действие увеличить
          if (+params[1]) {
            // делаем действие
            model.setCount(model.getCount() + 1);
          } // если действие уменьшить
          else {
            // если товара более 1
            if (model.getCount() > 1) {
              // делаем действие
              model.setCount(model.getCount() - 1);
            } else {
              // просто гасим
              this.wh.bot.notice();
            }
          }
          this.wh.bot.notice(this.wh.lang.getParam("basket.action_" + params[1] + "_success"));
          // готовим кнопки
          let buttons = this.getModelButtons(total, model, product, +params[3]);
          // меняем кнопки
          this.wh.bot.editMessageReplyMarkup(this.wh.bot.getFromId(), this.wh.bot.getMessageId(), buttons);
        } else {
          // выводим предупреждение
          this.wh.bot.noticeDelete(this.wh.lang.getParam("error._404"));
          // удаляем из корзины
          model.delete();
          // переадресуем в начало
          this.run("param_0");
        }
      } else {
        // выводим предупреждение
        this.wh.bot.notice(this.wh.lang.getParam("error.again"));
      }
    } else {
      // корзина пустая
      this.wh.bot.noticeDelete(this.wh.lang.getParam("basket.empty"));
      // переадресуем
      this.run("param_0");
    }
  }

  /**
   * Удалим товар из корзины
   */
  delete() {
    // 1  - model hash
    let params = paramsFromText(this.wh.bot.getCallbackQueryData());
    // получаем модель
    let model = Basket.find().findOneBy("hash", params[1]);
    // проверяем
    if (model) {
      // удаляем модель
      model.delete();
      // переадресуем на run
      this.run("param_0_0");
    } else {
      this.wh.bot.notice(this.wh.lang.getParam("error._404"));
    }
  }

  /**
   * Отображаем подсказку
   */
  description() {
    // 1 - message
    let params = paramsFromText(this.wh.bot.getCallbackQueryData());
    // выводим уведомление
    this.wh.bot.notice(this.wh.lang.getParam("basket.description._" + params[1]), true);
  }

  /**
   * Процедура заказа
   * @returns {*}
   */
  order() {
    // удалить все не оформленные заказы
    Order.deleteOld(this.wh.bot.getFromId());
    // проверяем наличие в корзине
    let search_params = [
      ["uid", "number", "===", this.wh.user.uid]
    ];
    // получаем все товары
    let allFilter = Basket.find().findAllByParams(search_params)
      .filter(function (model) {
        // получаем товар
        let product = Product.find().findOneByParams([
          ["hash", "string", "===", model.product_hash],
          ["hide", "number", "===", 1]
        ]);
        // проверяем
        if (!Array.isArray(product)) {
          return true;
        } else {
          // удаляем из корзины
          model.delete();
          return false;
        }
      });
    // проверяем еще раз
    if (allFilter.length) {
      // гасим
      this.wh.bot.noticeDelete();
      // создаем заказ
      let order = Order.create(this.wh.bot.getFromId());
      // выводим форму
      return this.form("param_" + order.hash + "_0");
    }
    // переадресуем в начало
    this.run("param_0_0");
  }

  /**
   * Выведем форму оформления заказа
   * @param params_
   * @returns {*}
   */
  form(params_ = null) {
    // получим корзину
    let total = Basket.find().getCountByParams([["uid", "number", "===", this.wh.user.uid]])
    // проверим
    if (total) {
      // гасим
      if (this.wh.bot.isCallBack() && isNull(params_)) {
        this.wh.bot.notice();
      }
      // 1 - hash, 2 - field, 3 - error
      let params = paramsFromText(!isNull(params_) ? params_ : this.wh.bot.getCallbackQueryData());
      // подстрахуем
      params[3] = isSet(params[3]) ? params[3] : null;
      // получим заказ
      let order = Order.find().findOneByParams([["hash", "string", "===", params[1]], ["type", "number", "===", 0]]);
      // проверим
      if (!Array.isArray(order)) {
        // получаем настройки поля формы
        let field = Order.getFields()[+params[2]];
        // проверим
        if (isSet(field)) {
          // запишем действие пользователю
          this.wh.user.setAction("basket::update_" + order.hash + "_" + params[2]);
          // получим текст + если есть ошибка - добавим ее
          let text = this.wh.lang.getParam("order.form.text._" + params[2], {
            error: !isNull(params[3]) ? this.wh.lang.getParam("order.form.error._" + params[3]) : "",
            pickupPoint: this.wh.lang.getParam("order.pickupPoint")
          });
          // добавим кнопки
          let buttons = [];
          // если это запрос на нажатие кнопок добавим их
          if (field.type === "callBack") {
            for (let i = 0; i < field.buttons; i += 1) {
              buttons.push([this.wh.bot.buildInlineKeyboardButton(
                this.wh.lang.getParam("order." + field.name + "._" + i),
                "basket::update_" + order.hash + "_" + params[2] + "_" + i
              )]);
            }
          }
          // выводим сообщение
          return this.wh.bot.sendMessage(
            this.wh.bot.getFromId(),
            text,
            buttons.length
              ? buttons
              : null
          );
        } else {
          // переадресовать на preview
          return this.preview("params_" + order.hash);
        }
      }
    }
    // по умолчанию выведем ошибку
    this.wh.bot.notice(this.wh.lang.getParam("error._404"));
  }

  /**
   * Сохраняем данные заказа
   * @returns {*}
   */
  update() {
    // 1 - hash, 2 - field, 3 - ?button_answer
    let params = paramsFromText(
      this.wh.bot.isCallBack()
        ? this.wh.bot.getCallbackQueryData()
        : this.wh.user.getAction()
    );
    // получим заказ
    let order = Order.find().findOneByParams([["hash", "string", "===", params[1]], ["type", "number", "===", 0]]);
    // проверим
    if (!Array.isArray(order)) {
      // получаем настройки поля формы
      let field = Order.getFields()[+params[2]];
      // проверим
      if (isSet(field)) {
        // проверим что пришло
        if (this.wh.bot["is" + ucfirst(field.type, false)]()) {
          // получим значение
          let value = field.type === "callBack" ? params[3] : this.wh.bot.getMessageText();
          // гасим удаляем
          if (this.wh.bot.isCallBack()) {
            this.wh.bot.noticeDelete();
          }
          // проверим валидацию
          if (field.validate) {
            // создадим шаблон
            let template = new RegExp(field.validate);
            // проверим
            if (!template.test(value)) {
              // вернем ошибку
              return this.form("params_" + params[1] + "_" + params[2] + "_" + params[2]);
            }
          }
          // удалим action
          this.wh.user.setAction("");
          // запишем результат
          order["set" + ucfirst(field.name, false)](value);
          // определим следующий шаг
          let nextStep = +params[2] + 1;
          // получим его
          let nextField = Order.getFields()[nextStep];
          // проверим
          if (nextField) {
            // проверим есть ли необходимость пропускать шаг
            if (nextField.skip) {
              // проверим условия
              if (order["get" + ucfirst(nextField.skip.step, false)]() == nextField.skip.value) {
                // перешагнем
                nextStep += 1;
              }
            }
            // переадресуем на форму"
            return this.form("params_" + params[1] + "_" + (nextStep))
          } else {
            // переадресовать на preview
            return this.preview("params_" + order.hash);
          }
        }
      }
    }
    // по умолчанию выведем ошибку
    this.wh.bot.notice(this.wh.lang.getParam("error.again"));
  }

  /**
   * Предпросмотр заказа
   * @param params_
   */
  preview(params_ = null) {
    // гасим удаляем
    if (this.wh.bot.isCallBack()) {
      this.wh.bot.noticeDelete();
    }
    // 1 - order_hash
    let params = paramsFromText(!isNull(params_) ? params_ : this.wh.bot.getCallbackQueryData());
    // получим закза
    let order = Order.find().findOneBy("hash", params[1]);
    // проверим
    if (order) {
      // проверяем наличие в корзине
      let search_params = [
        ["uid", "number", "===", this.wh.user.uid]
      ];
      // получаем все товары
      let products_ = Basket.find().findAllByParams(search_params)
        .filter(function (model) {
          // получаем товар
          let product = Product.find().findOneByParams([
            ["hash", "string", "===", model.product_hash],
            ["hide", "number", "===", 1]
          ]);
          // проверяем
          if (!Array.isArray(product)) {
            // дозаполняем модель
            model.product_name = product.name;
            model.product_price = product.price;
            model.product_unit = product.unit;
            model.product_count = model.count;
            // оставим ее в массиве
            return true;
          } else {
            // удаляем из корзины
            model.delete();
            // удалим из массива
            return false;
          }
        });
      // проверим
      if (products_.length) {
        // товары
        let text = this.getTextToPreview(order, products_);
        // кнопки
        let buttons = [
          [this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("order.finish"), "basket::finish_" + order.hash)],
          [this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("go.cancel"), "basket::run_0")],
        ];
        // выведем инфо
        this.wh.bot.sendMessage(this.wh.bot.getFromId(), text, buttons);
      } else {
        // переадресуем на корзину
        this.run("params_0");
      }
    } else {
      // выводим предупреждение
      this.wh.bot.sendMessage(this.wh.bot.getFromId(), this.wh.lang.getParam("error.again"));
    }
  }

  /**
   * Завершаем оформление
   */
  finish() {
    // 1 - order_hash
    let params = paramsFromText(this.wh.bot.getCallbackQueryData());
    // получаем заказ
    let order = Order.find().findOneByParams([
      ["hash", "string", "===", params[1]],
      ["type", "number", "===", 0]
    ]);
    // проверяем
    if (!Array.isArray(order)) {
      // получаем все модели из корзины
      let models = Basket.find().findAllByParams([
        ["uid", "number", "===", this.wh.user.uid]
      ]);
      // проверяем
      if (models.length) {
        // переменная
        let count_p = 0;
        // массив с товарами
        let orderItems = [];
        // перебираем
        models.forEach(function (model) {
          // получаем продукт
          let product = Product.find().findOneByParams([
            ["hash", "string", "===", model.product_hash],
            ["hide", "number", "===", 1]
          ]);
          // проверяем
          if (!Array.isArray(product)) {
            // увеличиваем
            count_p += 1;
            // Записываем items
            orderItems.push(OrderItem.create(order.hash, model.count, product));
          }
        });
        // проверяем
        if (count_p) {
          // переводим заказ в статус заказано
          order.setType(1);
          // удаляем сообщение
          this.wh.bot.noticeDelete();
          // очищаем корзину
          Basket.clear(this.wh.bot.getFromId());
          // уведомление админу и в группу
          this.noticeAdmin(order, orderItems);
          // переадресуем на "Спасибо"
          this.thanks();
        } else {
          this.wh.bot.noticeDelete(this.wh.lang.getParam("basket.empty"), true);
        }
      } else {
        // выводим предупреждение
        this.wh.bot.noticeDelete(this.wh.lang.getParam("basket.empty"), true);
      }
    } else {
      // выводим предупреждение
      this.wh.bot.noticeDelete(this.wh.lang.getParam("error.object.404"));
    }
  }

  /**
   * Уведомление админу
   * @param order
   * @param products_
   */
  noticeAdmin(order, products_) {
    // отправим админу
    this.wh.bot.sendMessage(config.admin_uid, this.getTextToPreview(order, products_, true));
  }

  /**
   * Подготовим текст для сообщения
   * @param order
   * @param products_
   * @param admin
   * @returns {*}
   */
  getTextToPreview(order, products_, admin = false) {
    // товары
    let textItems = "";
    // общая сумма
    let totalSum = 0;
    // перебираем массив
    products_.forEach(function (product_) {
      let product_sum = +product_.product_price * +product_.product_count;
      // собираем текст
      textItems += this.wh.lang.getParam("order.preview.item", {
        name: product_.product_name,
        price: product_.product_price,
        unit: product_.product_unit,
        count: product_.product_count,
        sum: product_sum
      });
      totalSum += product_sum;
    }.bind(this));
    // шаблон
    let template = admin ? "toAdminMain" : "main";
    // собирем и вернем текст
    return this.wh.lang.getParam("order.preview." + template, {
      hash: order.hash.toUpperCase(),
      body: this.wh.lang.getParam("order.preview.body", {
        phone_body: this.wh.lang.getParam("order.preview.phone", {
          phone: order.phone
        }),
        delivery_body: this.wh.lang.getParam("order.preview.delivery_" + order.delivery, {
          address: +order.delivery ? order.address : this.wh.lang.getParam("order.pickupPoint")
        }),
        pay_body: this.wh.lang.getParam("order.preview.pay", {
          pay: this.wh.lang.getParam("order.pay._" + order.pay)
        })
      }),
      items: this.wh.lang.getParam("order.preview.items", {
        items: textItems,
        total: totalSum
      })
    });
  }

  /**
   * Выводим благодарность
   */
  thanks() {
    // выводим сообщение
    this.wh.bot.sendMessage(
      this.wh.bot.getFromId(),
      this.wh.lang.getParam("order.success"),
      [
        [this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("order.orders"), "orders::run_0_0")],
        [this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("order.catalog"), "catalog::run_0")]
      ]
    );
  }
}

/**
 * Контроллер пользователя - Каталог
 */
class ControllerCatalog extends Controller {
  /**
   * Констуктор класса
   * @param wh
   */
  constructor(wh) {
    // записываем объект в свойство
    super(wh);
    this.limit = 5;
  }

  /**
   * Выводим каталог
   * @param params_
   */
  run(params_ = null) {
    // гасим удаляем
    if (this.wh.bot.isCallBack()) {
      this.wh.bot.noticeDelete();
    }
    // Объявим переменные
    let buttons_ = [],
      buttons,
      text,
      go_back,
      parent_name,
      items = [],
      lang_template;
    // 1 - parent, 2 - page
    let params = paramsFromText(!isNull(params_)
      ? params_
      : (this.wh.bot.isCallBack()
        ? this.wh.bot.getCallbackQueryData()
        : "param_0_0")
    );
    // подстрахуем
    params[2] = isSet(params[2]) ? params[2] : 0;
    // определяем куда возвращаться
    if (params[1] !== "0") {
      let category = Category.find().findOneBy("hash", params[1]);
      go_back = "catalog::run_" + category.parent;
      parent_name = Category.breadCrumbs(category.hash);
    } else {
      go_back = null;
      parent_name = this.wh.lang.getParam("catalog.name");
    }
    // счетчик
    let offset = this.limit * +params[2];
    // всего позиций
    let total = 0;
    // тип данных
    let data_type = 0;
    // получим парент
    let parent_ = params[1] === "0" ? 0 : params[1];
    let parent_type_search = parent_ ? "string" : "number";
    // настройки для поиска количества значений
    let search_params = [
      ["parent", parent_type_search, "===", parent_],
      ["type", "number", "===", 1],
      ["hide", "number", "===", 1],
    ];
    // параметр сортировки
    let search_sort = ["position", true];
    // получаем данные категорий
    let itemsCategoryCount = Category.find().getCountByParams(search_params);
    //  если категорий нет
    if (!itemsCategoryCount) {
      // тип данных
      data_type = 1;
      // получаем товары
      let itemsProductCount = Product.find().getCountByParams(search_params);
      // проверяем товары
      if (itemsProductCount) {
        // переопределяем общее кол-во
        total = itemsProductCount;
        // получаем данные товаров
        items = Product.find().findAllByParams(search_params, search_sort).filter(function (item, idx) {
          return idx >= offset && idx < (offset + this.limit);
        }.bind(this));
      }
    } else {
      // переопределяем количество
      total = itemsCategoryCount;
      // получаем данные категории
      items = Category.find().findAllByParams(search_params, search_sort).filter(function (item, idx) {
        return idx >= offset && idx < (offset + this.limit);
      }.bind(this));
    }
    // готовим кнопки
    if (!isNull(go_back)) {
      // кнопка вернуться
      buttons_.push([this.wh.bot.buildInlineKeyboardButton(this.wh.lang.getParam("go.back"), go_back)]);
    }
    // данные для шаблона
    let data_template = {
      breadcrumbs: parent_name,
    };
    // проверяем
    if (items.length) {
      // если страница первая
      if (!+params[2]) {
        // выводим хлебные крошки
        this.wh.bot.sendMessage(
          this.wh.bot.getFromId(),
          this.wh.lang.getParam("catalog.breadcrumbs", {
            breadcrumbs: parent_name
          })
        );
      }
      // назание шаблона
      let template_item_name = data_type ? "product" : "category";
      // выводим данные
      items.forEach(function (item, idx) {
        // получаем картинку
        let image = item.getImage();
        // получаем адрес картинки
        let imageUrl = !isNull(image)
          ? image.file_id
          : config.no_image;
        // данные для шаблона
        let template_item_data = {
          name: item.getName(),
          body: item.getDescription(),
        };
        // если это категория
        if (!data_type) {
          // готовим кнопки
          buttons = [[this.wh.bot.buildInlineKeyboardButton(
            this.wh.lang.getParam("catalog.category_view"),
            "catalog::run_" + item.hash
          )]];
        } else {
          // добавим
          template_item_data.price = item.getPrice();
          template_item_data.unit = item.getUnit();
          // готовим кнопки
          buttons = this.getButtonsProduct(item.hash);
        }
        // получаем текст
        text = this.wh.lang.getParam("catalog." + template_item_name, template_item_data);
        // выводим элемент
        this.wh.bot.sendPhoto(this.wh.bot.getFromId(), imageUrl, text, buttons);
      }.bind(this));
      // готовим кнопки навигации
      let num = (total < (offset + this.limit)) ? total : (offset + this.limit);
      // общее кол-во страниц
      let pages = Math.ceil(total / this.limit);
      // кнопка загрузить еще
      if ((+params[2] + 1) < pages) {
        buttons_.push([this.wh.bot.buildInlineKeyboardButton(
          this.wh.lang.getParam("catalog.see_more"),
          "catalog::run_" + params[1] + "_" + (+params[2] + 1)
        )]);
      }
      // данные для шаблона
      data_template.num = num;
      data_template.total = total;
      // определим шаблон
      lang_template = "navigation";
    } else {
      // определим шаблон
      lang_template = "empty";
    }
    // выводим сообщение
    this.wh.bot.sendMessage(
      this.wh.bot.getFromId(),
      this.wh.lang.getParam("catalog." + lang_template, data_template),
      buttons_.length ? buttons_ : null
    );
  }

  /**
   * Получаем кнопки
   * @param hash
   * @returns {{text: *}[][]}
   */
  getButtonsProduct(hash) {
    // получаем запись из корзины
    let modelBasket = Basket.find().findOneByParams([
      ["product_hash", "string", "===", hash],
      ["uid", "number", "===", this.wh.user.uid],
    ]);
    // проверяем
    let count = !Array.isArray(modelBasket) ? "(" + modelBasket.count + ")" : "";
    // кнопка в корзину
    return [[this.wh.bot.buildInlineKeyboardButton(
      this.wh.lang.getParam("catalog.product_in_basket", {count: count}),
      "catalog::inBasket_" + hash
    )]];
  }

  /**
   * Добавим в корзину
   */
  inBasket() {
    // 1 - product_hash
    let params = paramsFromText(this.wh.bot.getCallbackQueryData());
    // получаем товар
    let product = Product.find().findOneBy("hash", params[1]);
    // проверяем
    if (product) {
      // получаем или [] или модель
      let model = Basket.find().findOneByParams([
        ["product_hash", "string", "===", params[1]],
        ["uid", "number", "===", this.wh.user.uid],
      ]);
      // проверяем
      if (!Array.isArray(model)) {
        // обновляем запись
        model.setCount(+model.getCount() + 1);
      } else {
        // создаем запись
        Basket.create(product.hash, this.wh.user.uid);
      }
      // гасим
      this.wh.bot.notice(this.wh.lang.getParam("catalog.product_basket_success"));
      // обновляем кнопки у медиа
      this.wh.bot.editMessageReplyMarkup(
        this.wh.bot.getFromId(),
        this.wh.bot.getMessageId(),
        this.getButtonsProduct(product.hash)
      );
    } else {
      // выводим уведомление
      this.wh.bot.notice(this.wh.lang.getParam("error._404"));
    }
  }
}

/**
 * Контроллер пользователя - Заказы
 */
class ControllerOrders extends Controller {
  /**
   * Выводим заказы
   * @param params_
   */
  run(params_ = null) {
    // 1 - type orders, 2 - page
    let params = paramsFromText(!isNull(params_)
      ? params_
      : (this.wh.bot.isCallBack()
        ? this.wh.bot.getCallbackQueryData()
        : "param_0_0_0")
    );
    // подстрахуем
    params[1] = isSet(params[1]) ? +params[1] : 0;
    params[2] = isSet(params[2]) ? +params[2] : 0;
    params[3] = isSet(params[3]) ? +params[3] : 0;
    // проверяем
    if (isSet(Order.statuses()["_" + params[1]])) {
      // получаем заказы по статусам
      let orders = Order.find().findAllByParams([
        ["uid", "number", "===", this.wh.user.uid],
        ["type", "number", "===", 1],
        ["status", "string", "===", Order.statuses()["_" + params[1]]]
      ], [
        "created_at", true
      ]);
      // получим общее количество заказов
      let orders_count = orders.length;
      // отфильтруем заказы
      orders = orders.filter(function (order, idx) {
        return idx >= +params[2] && idx < +params[2] + 1;
      })
      // проверим
      if (orders.length) {
        // получим значение заказа
        let order = orders[0];
        // получаем текст
        let text = this.getTextOrder(order, +params[1], +params[2], orders_count);
        // получаем кнопки
        let buttons = this.getButtonsOrder(+params[1], orders_count, +params[2]);
        // выводим сообщение
        if (!+params[3]) {
          // гасим удалим
          if (this.wh.bot.isCallBack()) {
            this.wh.bot.noticeDelete();
          }
          // отправляем
          this.wh.bot.sendMessage(this.wh.bot.getFromId(), text, buttons);
        } else {
          // гасим
          if (this.wh.bot.isCallBack()) {
            this.wh.bot.notice();
          }
          // редактируем сообщение
          this.wh.bot.editMessageText(this.wh.bot.getFromId(), this.wh.bot.getMessageId(), text, buttons);
        }
      } else {
        if (this.wh.bot.isCallBack()) {
          this.wh.bot.noticeDelete();
        }
        // выводим уведомление
        this.wh.bot.sendMessage(
          this.wh.bot.getFromId(),
          this.wh.lang.getParam("order.empty", {
            type: this.wh.lang.getParam("order.type_" + params[1])
          }),
          [[
            this.wh.bot.buildInlineKeyboardButton(
              this.wh.lang.getParam("order.type_" + +!+params[1]),
              "orders::run_" + +!+params[1] + "_0")
          ]]
        );
      }
    } else {
      // получаем значение ошибки
      let error = this.wh.lang.getParam("error._404");
      // выводим предупреждение
      if (this.wh.bot.isCallBack()) {
        this.wh.bot.notice(error);
      } else {
        this.wh.bot.sendMessage(this.wh.bot.getFromId(), error);
      }
    }
  }

  /**
   * Текст для экрана
   * @param order
   * @param type_orders
   * @param page
   * @param total
   * @returns {*}
   */
  getTextOrder(order, type_orders, page, total) {
    // получаем все модели из корзины
    let items = OrderItem.find().findAllByParams([
      ["parent", "string", "===", order.hash]
    ]);
    // готовим для товаров
    let items_text = "";
    // общая сумма
    let totalSum = 0;
    // проверяем
    if (items.length) {
      // перебираем модели
      items.forEach(function (item) {
        // высчитываем сумму
        let itemSum = (+item.product_price * +item.product_count);
        // пишем строку
        items_text += this.wh.lang.getParam("order.preview.item", {
          name: item.product_name,
          price: item.product_price,
          unit: item.product_unit,
          count: item.product_count,
          sum: itemSum
        });
        // пополняем
        totalSum += itemSum;
      }.bind(this));
    }
    // вернем результат
    return this.wh.lang.getParam("order.body", {
      type: this.wh.lang.getParam("order.type_" + type_orders),
      hash: order.hash.toUpperCase(),
      date: getDateToFormat(order.created_at),
      phone: order.getPhone(),
      delivery: this.wh.lang.getParam("order.preview.delivery_" + order.getDelivery(), {
        address: +order.getDelivery() ? order.getAddress() : this.wh.lang.getParam("order.pickupPoint")
      }),
      pay: this.wh.lang.getParam("order.pay._" + order.getPay()),
      status: this.wh.lang.getParam("order.status." + order.getStatus()),
      items_body: this.wh.lang.getParam("order.preview.items", {
        items: items_text,
        total: totalSum
      }),
      page: +page + 1,
      total: total
    });
  }

  /**
   * Кнопки для экрана
   * @param type_orders
   * @param total
   * @param page
   * @returns {Array}
   */
  getButtonsOrder(type_orders, total, page) {
    let buttons = [];
    // проверяем пагинацию
    if (total > 1) {
      // парамерт для кнопки назад
      let prev = ((page - 1) < 0) ? (total - 1) : (page - 1);
      // параметр для кнопки вперед
      let next = ((page + 1) >= total) ? 0 : (page + 1);
      // готовим кнопки туда - сюда
      buttons.push([
        this.wh.bot.buildInlineKeyboardButton(
          this.wh.lang.getParam("order.prev"),
          "orders::run_" + type_orders + "_" + prev + "_1"
        ),
        this.wh.bot.buildInlineKeyboardButton(
          this.wh.lang.getParam("order.next"),
          "orders::run_" + type_orders + "_" + next + "_1"
        ),
      ]);
    }
    // переключатель между типами
    buttons.push([this.wh.bot.buildInlineKeyboardButton(
      this.wh.lang.getParam("order.type_" + +!+type_orders),
      "orders::run_" + +!+type_orders + "_0"
    )]);
    // вернем кнопки
    return buttons;
  }
}

/**
 * Контроллер пользователя Оплата и доставка
 */
class ControllerPayDelivery extends Controller  {
  /**
   * Запускаем
   */
  run() {
    // гасим удаляем
    if (this.wh.bot.isCallBack()) {
      this.wh.bot.noticeDelete();
    }
    // получаем страницу
    let page = Page.getPage("payDelivery");
    // получим описание
    let description = page.getDescription();
    // получаем текст
    let text = isNull(description)
      ? this.wh.lang.getParam("payDelivery.empty")
      : description;
    // проверим картинку
    let image = page.getImage();
    // проверим как отправляем
    if (!isNull(image)) {
      this.wh.bot.sendPhoto(this.wh.bot.getFromId(), image, text);
    } else {
      this.wh.bot.sendMessage(this.wh.bot.getFromId(), text);
    }
  }
}

/**
 * Контроллер Старт Бота
 */
class ControllerStart extends Controller {
  /**
   * Запускаем
   */
  run() {
    // гасим удаляем
    if (this.wh.bot.isCallBack()) {
      this.wh.bot.noticeDelete();
    } else {
      // готовим клавиатуру для пользователя
      let keyboard = ControllerStart.getStartKeyboard(this.wh);
      // выводим клавиатуру
      this.wh.bot.sendMessage(this.wh.bot.getChatId(), "...", keyboard, true);
    }
    // готовим кнопки
    let buttons = null;
    if (this.wh.isAdmin()) {
      buttons = [[this.wh.bot.buildInlineKeyboardButton("AdminPanel /admin", "admin::run_0")]];
    }
    // выводим приветствие для пользователя
    this.wh.bot.sendMessage(
      this.wh.bot.getFromId(),
      this.wh.lang.getParam("start.user.message", {
        user: this.wh.user.name
      }),
      buttons
    );
  }

  /**
   * Получаем кнопки клавиатуры
   * @param wh
   * @returns {{request_location: boolean, text: *, request_contact: boolean}[][]}
   */
  static getStartKeyboard(wh) {
    // вернем массив кнопок
    return [
      [
        wh.bot.buildKeyboardButton(wh.lang.getParam("start.keyboard.btn_1")),
        wh.bot.buildKeyboardButton(wh.lang.getParam("start.keyboard.btn_2")),
      ],
      [
        wh.bot.buildKeyboardButton(wh.lang.getParam("start.keyboard.btn_3")),
        wh.bot.buildKeyboardButton(wh.lang.getParam("start.keyboard.btn_4")),
      ],
    ];
  }
}

/**
 * Инициируем приложение
 */
function initApp() {
  try {
    // получаем таблицу
    let spreadSheet = SpreadsheetApp.openById(config.sheet);
    // перебираем настройки таблиц классов
    for (let class_ in mapClasses) {
      // получаем класс
      const this_class = mapClasses[class_];
      // получаем настройки таблицы
      const table_config = this_class.table();
      // проверяем если отсутствует лист
      if (isNull(spreadSheet.getSheetByName(table_config.name))) {
        // создаем лист
        spreadSheet.insertSheet(table_config.name);
        // добавляем название столбцов
        new this_class().getSheet().appendRow(table_config.columns);
      }
    }
    // выводим в консоль уведомление
    console.log("Complete");
  } catch (e) {
    // выводим в консоль ошибку
    console.log(e.message)
  }
}

/**
 * Проверяем на существование
 * @param variable
 * @returns {boolean}
 */
function isSet(variable) {
  return typeof variable !== "undefined";
}

/**
 * Проверяем на пустое значение
 * @param variable
 * @returns {boolean}
 */
function isEmpty(variable) {
  return variable === "";
}

/**
 * Проверяем на null
 * @param variable
 * @returns {boolean}
 */
function isNull(variable) {
  return variable === null;
}

/**
 * Логгер
 * @param message
 * @param table
 */
function logger(message, table = "Logs") {
  try {
    // получаем таблицу
    let ss = SpreadsheetApp.openById(config.sheet);
    // проверяем наличие листа
    if (ss.getSheetByName(table) === null) {
      // создаем лист если его нет
      ss.insertSheet(table);
    }
    // записываем сообщение
    ss.getSheetByName(table).appendRow([message]);
  } catch (e) {
  }
}

/**
 * Преобразуем слово - первый символ большая буква
 * @param word
 * @param type
 * @returns {string}
 */
function ucfirst(word, type = true) {
  let param_1 = word[0].toUpperCase();
  let param_2 = word.slice(1);
  return param_1 + (type ? param_2.toLowerCase() : param_2);
}

/**
 * Получаем индекс элемента в массиве
 * @param array
 * @param value
 * @param digit
 * @returns {number}
 */
function findIndex(array, value, digit = 0) {
  let idx = array.indexOf(value);
  return idx += digit;
}

/**
 * Получаем буквенное значение столбца по индексу
 * @param n
 * @returns {string}
 */
function getLetterByIndex(n) {
  return (a = Math.floor(--n / 26)) >= 0
    ? getLetterByIndex(a - 1) + String.fromCharCode(65 + (n % 26))
    : '';
}

/**
 * Генерируем случайную строку
 * @param length
 * @returns {string}
 */
function getRandomStr(length = 16) {
  return Array(length)
    .fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
    .map(function (x) {
      return x[Math.floor(Math.random() * x.length)]
    })
    .join('')
    .toLowerCase();
}

/**
 * Получаем текущее время в секундах
 * @param datetime
 * @returns {number}
 */
function getDateToSeconds(datetime = null) {
  const date = !isNull(datetime) ? new Date(datetime) : new Date();
  return Math.floor(date.getTime() / 1000);
}

/**
 * Конвертируем время в локаль
 * @param seconds
 * @param locale
 * @returns {string}
 */
function getDateToFormat(seconds, locale = "ru") {
  // "d.m.Y в H:i"
  let date = new Date(seconds * 1000);
  // опции
  let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timezone: 'UTC'
  };
  // вернем отформатированное
  return date.toLocaleString(locale, options);
}

/**
 * Получим параметры
 * @param text
 * @returns {*}
 */
function paramsFromText(text) {
  return text.split("_");
}

/**
 * Форматирование текста
 * @param text
 * @param entities
 * @returns {*}
 */
function prepareMessageWithEntities(text, entities) {
  // проверяем наличие форматирования
  if (entities !== null && entities.length > 0) {
    // готовим переменную в нее будем добавлять
    let prepareText = "";
    // перебираем форматирование
    entities.forEach(function (entity, idx, arr) {
      // добавляем все что между форматированием
      if (entity.offset > 0) {
        /*
          * старт = если начало больше 0 и это первый элемент то берем сначала с нуля
          * если не первый то берем сразу после предыдущего элемента
          *
          * длина = это разница между стартом и текущим началом
          */
        // определяем начало
        let start = (idx === 0)
          ? 0
          : (arr[idx - 1].offset + arr[idx - 1].length);
        // определяем длину
        let length = entity.offset - start;
        // добавляем
        prepareText = prepareText + text.substr(start, length);
      }
      // выбираем текущий элемент форматирования
      let charts = text.substr(entity.offset, entity.length);
      // обрамляем в необходимый формат
      if (entity.type === "bold") {
        // полужирный
        charts = "<b>" + charts + "</b>";
      } else if (entity.type === "italic") {
        // курсив
        charts = "<i>" + charts + "</i>";
      } else if (entity.type === "code") {
        // код
        charts = "<code>" + charts + "</code>";
      } else if (entity.type === "pre") {
        // inline код
        charts = "<pre>" + charts + "</pre>";
      } else if (entity.type === "strikethrough") {
        // зачеркнутый
        charts = "<s>" + charts + "</s>";
      } else if (entity.type === "underline") {
        // подчеркнутый
        charts = "<u>" + charts + "</u>";
      } else if (entity.type === "spoiler") {
        // скрытый
        charts = "<tg-spoiler>" + charts + "</tg-spoiler>";
      } else if (entity.type === "text_link") {
        // ссылка текстовая
        charts = "<a href='" + entity.url + "'>" + charts + "</a>";
      }
      // добавляем в переменную
      prepareText = prepareText + charts;
    });
    // добавляем остатки текста если такие есть
    prepareText = prepareText + text.substr((entities[entities.length - 1].offset + entities[entities.length - 1].length));
    // возвращаем результат
    return prepareText;
  }
  // по умолчанию вернем не форматированный текст
  return text;
}

/**
 * Класс WebHook
 */
class WebHook {
  /**
   * Создаем объект WebHook
   * @param update
   * @returns {boolean}
   */
  constructor(update) {
    try {
      // деббагер
      if (config.debugger) {
        logger(JSON.stringify(update))
      }
      // создаем объект бота
      this.bot = new Bot(config.token, update);
      // проверим на частный запрос
      if (!this.bot.isPrivate()) {
        // выйдем если это группа или канал
        return true;
      }
      // создаем объект пользователя
      this.user = User.getUser(this.bot.getUserData());
      // создаем объект языковых настроек
      this.lang = new Lang(this.user.lang);
      // запускаем роутер
      new Route(this).run();
    } catch (e) {
      logger(e.message);
    }
  }

  /**
   * Проверяем на Админа
   * @returns {boolean}
   */
  isAdmin() {
    // сравним текущего пользователя с админом из настроек
    return config.admin_uid === this.user.uid;
  }

  /**
   * Преобразуем переданную строку в camelCase
   * @param method
   * @returns {*}
   */
  prepareMethod(method) {
    return method.split('_') // разделяем по знаку _ в массив
      .map(function (word, index) { // перебираем все значения
        // преобразуем первый символ в верхний регистр, остальное в нижний
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(''); // собираем в одно слово без пробелов
  }
}

/**
 * Карта классов сущностей
 * @type {{Order: Order, User: User, Category: Category, OrderItem: OrderItem, Media: Media, Product: Product, Basket: Basket, Page: Page}}
 */
const mapClasses = {
  User,
  Category,
  Product,
  Media,
  Basket,
  Order,
  OrderItem,
  Page
};

/**
 * Карта контроллеров бота
 * @type {{ControllerStart: ControllerStart, ControllerAdminOrders: ControllerAdminOrders, ControllerAdmin: ControllerAdmin, ControllerCatalog: ControllerCatalog, ControllerAdminCatalog: ControllerAdminCatalog, ControllerBasket: ControllerBasket, ControllerPayDelivery: ControllerPayDelivery, ControllerAdminPayDelivery: ControllerAdminPayDelivery, ControllerOrders: ControllerOrders}}
 */
const mapControllers = {
  ControllerStart,
  ControllerAdmin,
  ControllerAdminCatalog,
  ControllerAdminOrders,
  ControllerAdminPayDelivery,
  ControllerCatalog,
  ControllerBasket,
  ControllerOrders,
  ControllerPayDelivery
};

/**
 * Получаем данные от Телеграм
 * @param request
 */
function doPost(request) {
  // проверяем что запрос от телеграм с токеном
  if(request.parameter.token === config.token) {
    // получаем данные
    let update = JSON.parse(request.postData.contents);
    // направляем данные в объект WebHook
    new WebHook(update);
  }
}

/**
 * Получаем информацию о боте
 */
function getMe() {
  let response = UrlFetchApp.fetch(config.apiUrl + config.token + "/getMe");
  console.log(response.getContentText());
}

/**
 * Получаем информацию о Вебхуке
 */
function getWebHookInfo() {
  let response = UrlFetchApp.fetch(config.apiUrl + config.token + "/getWebHookInfo");
  console.log(response.getContentText());
}

/**
 * Устанавливаем Вебхук
 */
function setWebHook() {
  let response = UrlFetchApp.fetch(config.apiUrl + config.token + "/setWebHook?url=" + config.webhook + "?token=" + config.token);
  console.log(response.getContentText());
}

/**
 * Удалим Вебхук
 */
function deleteWebHook() {
  let response = UrlFetchApp.fetch(config.apiUrl + config.token + "/deleteWebhook?drop_pending_updates=true");
  console.log(response.getContentText());
}
