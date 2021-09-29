import { makeAutoObservable } from "mobx"

class UIStore{
    pages = [
        {
            title: 'Каталог',
            url: '/catalog'
        },
        {
            title: 'Мои материалы',
            url: '/my-materials'
        },
        {
            title: 'Блог',
            url: '/blog'
        },
        {
            title: 'Контакты',
            url: '/contacts'
        },
    ]
    constructor() {
        makeAutoObservable(this)
    }
}
export default new UIStore();