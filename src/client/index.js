import { getRequest } from './js/requestHandler'
import { handleSubmit } from './js/formHandler'
import { openCity, myFunction } from './js/tabsHandler'
import { openResultModal, closeResultModal, openErrorModal, closeResponseModal } from './js/modalController'
import logo from './icons/Logo_NLP.png';
import errorImg from './icons/sentiment_dissatisfied-24px.svg';
import responseImg from './icons/sentiment_satisfied-24px.svg';

// import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/article.scss'
import './styles/main.scss'
import './styles/footer.scss'
import './styles/modal.scss'

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('logo').src = logo;
});


export {
    getRequest,
    handleSubmit,
    openCity,
    myFunction,
    openResultModal,
    closeResultModal,
    openErrorModal,
    closeResponseModal,
    errorImg,
    responseImg
}
