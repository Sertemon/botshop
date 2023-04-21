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