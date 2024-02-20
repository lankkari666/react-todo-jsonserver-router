import axios from "axios";

// Ссылка на бэк
const link = "http://localhost:4001/tasks";

// Импорт данных с сервера
async function importJson(funcSet) {
    return await axios
        .get(link)
        .then((res) => {
            funcSet(res.data)
        })
        .catch((err) => {
            console.log(err, 'Данные не загружены');
        });
}

// Отправка данных на сервер и синхронизация бэка с фронтом
async function postJson(value, onChangeValue, funcSet) {
    return await axios
        .post(link, {
            text: value,
            check: false,
        })
        .then(() => console.log("Данные отправлены"))
        .catch((err) => {
            console.error(err);
            console.log("Данные не отправлены");
        })
        .finally(() => {
            onChangeValue("");
            importJson(funcSet);
        });
}

// Изменение данных на сервере и синхронизация бэка с фронтом
async function patchJson(params = {}, index, funcSet) {
    return await axios
        .patch(`${link}/${index}`, params)
        .then(() => console.log("Данные отправлены"))
        .catch((err) => {
            console.error(err);
            console.log("Данные не отправлены");
        })
        .finally(() => importJson(funcSet));
}

// Удаление данных из базы по индексу объекта в базе
async function deleteJson(index, funcSet) {
    return await axios
        .delete(`${link}/${index}`)
        .then(() => console.log(`Строка удалена`))
        .catch((err) => {
            console.error(err);
            console.log("Ошибка при удалении");
        })
        .finally(() => importJson(funcSet));
}

export {importJson, postJson, patchJson, deleteJson};
